import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setToggle } from '../../../store/slices/menu.slice';
import { Link, useNavigate } from 'react-router-dom';
import { validate } from "../../../Helpers/sanitize";
import { login } from "../../../services/API/user";

function Login() {

    const dispatch = useDispatch();
    const { isToggle } = useSelector((state) => ({...state.menu}));

    const navigate = useNavigate();
    const [inputs, setInputs] = useState({ pseudo: "", password: "" });
    const [isEmpty, setIsEmpty] = useState(false);

    const handleLogin = async(e) => {
        e.preventDefault();
		const inputsSanitized = validate(inputs);
		const res = await login(inputsSanitized);
		console.log('res data:', res);
		if(res.status === 404) {
			console.log(res.data.msg);
			return;
		}
        if (inputs.pseudo === "" || inputs.password === "") {
            setIsEmpty(true);
            return;
        } else {
            localStorage.setItem("auth_token", res.data.token);
            navigate(`/user/${res.data.uuid}`);
        }

    };

    return (
        <main>
            <div className={isToggle ? "overlay" : undefined} onClick={() => dispatch(setToggle(!isToggle))}></div>
            
            <section className="mainContent">
                <h2>Connexion</h2>

                <form onSubmit={handleLogin} className='formUserEntry'>
                    <input type="text" name="pseudo" id="pseudo" placeholder="Pseudo" onChange={(e) => setInputs({...inputs, pseudo: e.target.value})}/>
                    <input type="password" name="password" id="password" placeholder="Mot de passe" onChange={(e) => setInputs({...inputs, password: e.target.value})}/>

                    <input type="submit" value="Se connecter" className='btnSubmit'/>
                </form>

                {isEmpty && <p className='txtErrorEntry'>Veuillez remplir tous les champs</p>}
                <p className='notYetRegistered'>Pas encore de compte ? <Link to="/register">Inscrivez-vous</Link></p>
            </section>
        </main>
    )
}

export default Login;