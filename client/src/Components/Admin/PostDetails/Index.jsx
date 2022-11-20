import {useEffect, useState} from "react";
import {useParams} from "react-router-dom";
import { getPostById } from "../../../services/API/post";
import { updatePost } from "../../../services/API/post";
import { useNavigate } from "react-router-dom";

function PostDetails({categories}) {
    const navigate = useNavigate();
    const { id } = useParams();
    const [post, setPost] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const [inputs, setInputs] = useState({ title: "", content: "", category: "" });

    useEffect(() => {
        const fetchPost = async () => {
            try {
                const res = await getPostById(id);
                setPost(res.data.result);
            } catch (error) {
                setError(error);
            } finally {
                setLoading(false);
            }
        }
        fetchPost();
    }, [id]);

    const handleSubmit = async (e) => {
        e.preventDefault();
        const res = await updatePost(id, inputs);
        if (res.status === 200) {
            navigate(`/admin/editPosts`);
        }
    }

    return (
        <section className="mainContent">
            <h2>Détails du post</h2>

            {loading && <p>Chargement...</p>}
            {error && <p>Une erreur est survenue</p>}

            {post && (
                <form onSubmit={handleSubmit} className="editPostArticle">
                    <input type="text" name="title" id="title" defaultValue={post[0].title} onChange={(e) => setInputs({...inputs, title: e.target.value})}/>

                    <textarea name="content" id="content" defaultValue={post[0].content} onChange={(e) => setInputs({...inputs, content: e.target.value})}/>

                    <input type="text" name="categoryShow" id="categoryShow" defaultValue={`Categorie: ${post[0].category}`} disabled/>

                    <select name="category" id="category" onChange={(e) => setInputs({...inputs, category: e.target.value})}>
                        {categories.map((category, index) => (
                            <option key={index} value={category.category_name}>{category.category_name}</option>
                        ))}
                    </select>

                    <input type="submit" value="Modifier" />
                </form>
            )}
        </section>
    )
}

export default PostDetails;