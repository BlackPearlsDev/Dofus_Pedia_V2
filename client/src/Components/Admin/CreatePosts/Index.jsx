import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { validate } from "../../../Helpers/sanitize";
import { addPost } from '../../../services/API/post';
import { getAllCategories } from "../../../services/API/categories";
import { loadCategories } from '../../../store/slices/categories.slice';

function CreatePosts({ categories }) {

    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [inputs, setInputs] = useState({ title: "", content: "" , author: "", category: "" });

    const handleSubmit = async (e) => {
        e.preventDefault();
        const inputsSanitized = validate(inputs);
        const res = await addPost(inputsSanitized);
        if (res.status === 200) {
            navigate(`/admin`);
        }
    }

    const refreshCategories = async () => {
        const res = await getAllCategories();
        dispatch(loadCategories(res.data.result));
        navigate("/admin/createPosts");
    }

    useEffect(() => {
        refreshCategories();
        // eslint-disable-next-line
    }, []);

    return (
        <section className="mainContent">
            <h2>Écrire une news</h2>

            <form onSubmit={handleSubmit} className="formAddNews">
                <div className='newsTogether'>
                    <label htmlFor="title">Titre</label>
                    <input type="text" name="title" id="title" onChange={(e) => setInputs({...inputs, title: e.target.value})} required/>
                </div>

                <div className='newsTogether'>
                    <label htmlFor="category">Catégorie</label>
                    <select name="categoryName" id="categoryName" onChange={(e) => setInputs({...inputs, category: e.target.value})} required>
                        {categories.map((category, index) => (
                            <option key={index} value={category.category_name}>{category.category_name}</option>
                        ))}
                    </select>
                </div>

                <textarea name="content" id="content" cols="30" rows="10" placeholder='Informations...' onChange={(e) => setInputs({...inputs, content: e.target.value})} required></textarea>

                <input type="text" name='author' id='author' placeholder='Auteur' onChange={(e) => setInputs({...inputs, author: e.target.value})} required/>

                <input type="submit" value="Valider"/>
            </form>
        </section>
    )
}

export default CreatePosts;