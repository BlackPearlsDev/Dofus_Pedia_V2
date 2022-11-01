import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { validate } from "../../../Helpers/sanitize";
import { addCategory } from '../../../services/API/categories';

function CreateCategories() {

    const [inputs, setInputs] = useState({ categoryName: "" });
    const navigate = useNavigate();

    const handeSubmit = async (e) => {
        e.preventDefault();
        const inputsSanitized = validate(inputs);
        const res = await addCategory(inputsSanitized);
        if (res.status === 200) {
            navigate(`/admin`);
        }
    }

    return (
        <section className="mainContent">
            <h2>Créer une catégorie</h2>

            <form onSubmit={handeSubmit} className='formAddCategories'>
                <label htmlFor="categoryName">Nom de la catégorie</label>
                <input type="text" name="categoryName" id="categoryName" onChange={(e) => setInputs({...inputs, categoryName: e.target.value})}/>

                <input type="submit" value="Valider"/>
            </form>
        </section>
    )
}

export default CreateCategories;