import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { validate } from "../../../Helpers/sanitize";
import { addPost } from '../../../services/API/post';

function CreatePosts() {

    const navigate = useNavigate();
    const [inputs, setInputs] = useState({ title: "", content: "" , author: "", category: "" });

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log('inputs: ', inputs);
        const inputsSanitized = validate(inputs);
        const res = await addPost(inputsSanitized);
        if (res.status === 200) {
            console.log('post added');
            navigate(`/admin`);
        }
    }

    return (
        <main>
            <section className="mainContent">
                <h2>Écrire une news</h2>

                <form onSubmit={handleSubmit} className="formAddNews">
                    <div className='newsTogether'>
                        <label htmlFor="title">Titre</label>
                        <input type="text" name="title" id="title" onChange={(e) => setInputs({...inputs, title: e.target.value})}/>
                    </div>

                    <div className='newsTogether'>
                        <label htmlFor="category">Catégorie</label>
                        <select name="category" id="category" onChange={(e) => setInputs({...inputs, category: e.target.value})}>
                            <option value="news">News</option>
                            <option value="update">Mise à jour</option>
                            <option value="event">Événement</option>
                        </select>
                    </div>

                    <textarea name="content" id="content" cols="30" rows="10" placeholder='Informations...' onChange={(e) => setInputs({...inputs, content: e.target.value})}></textarea>

                    <input type="text" name='author' id='author' placeholder='Auteur' onChange={(e) => setInputs({...inputs, author: e.target.value})}/>

                    <input type="submit" value="Valider"/>
                </form>
            </section>
        </main>
    )
}

export default CreatePosts;