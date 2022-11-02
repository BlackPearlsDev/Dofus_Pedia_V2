import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setToggle } from '../../../store/slices/menu.slice';
import { Link, useNavigate } from 'react-router-dom';
import { validate } from "../../../Helpers/sanitize";
import { register } from "../../../services/API/user";

function Register() {

    const dispatch = useDispatch();
    const { isToggle } = useSelector((state) => ({...state.menu}));

    const navigate = useNavigate();
    const [inputs, setInputs] = useState({ pseudo: "", email : "", password: "" });
    const [empty, setEmpty] = useState(false);

    const handleRegister = async (e) => {
        e.preventDefault();
        const inputsValidation = validate(inputs);
        if (inputs.pseudo === "" || inputs.email === "" || inputs.password === "") {
            setEmpty(true);
            return;
        }
		if(inputsValidation === true) {
			const res = await register(inputs);
			if (res.status === 409) {
				return;
			} else {
				navigate("/login");
			}
		} else {
			// pas de validation des inputs donc il se passe rien
		}
    };

    return (
        <main>
            <div className={isToggle ? "overlay" : undefined} onClick={() => dispatch(setToggle(!isToggle))}></div>
            
            <section className="mainContent">
                <h2>Inscription</h2>

                <form onSubmit={handleRegister} className='formUserEntry'>
                    <input type="text" name="pseudo" id="pseudo" placeholder="Pseudo (2-20 caractères)" onChange={(e) => setInputs({...inputs, pseudo: e.target.value})}/>
                    <input type="email" name="email" id="email" placeholder="Email (6-128 caractères)" onChange={(e) => setInputs({...inputs, email: e.target.value})}/>
                    <input type="password" name="password" id="password" placeholder="Mot de passe (8 caractères minimum)" onChange={(e) => setInputs({...inputs, password: e.target.value})}/>

                    <input type="submit" value="S'inscrire" className='btnSubmit'/>
                </form>

                {empty && <p className='txtErrorEntry'>Veuillez remplir tous les champs</p>}
                <p className='notYetRegistered'>Déjà un compte ? <Link to="/login">Connectez-vous</Link></p>
            </section>
        </main>
    )
}

export default Register;