import { deletePost } from '../../../services/API/post';
import { useDispatch } from 'react-redux';
import { useNavigate } from "react-router-dom";
import { loadPosts } from "../../../store/slices/post.slice";
import { getAllPosts } from "../../../services/API/post";

function DeletePosts({ posts }) {

    const navigate = useNavigate();
    const dispatch = useDispatch();

    const handleDelete = async (e, postId) => {
        e.preventDefault();
        const res = await deletePost(postId);
        if (res.status === 200) {
            const res = await getAllPosts();
            dispatch(loadPosts(res.data.result));
            navigate("/admin/deletePosts");
        }
    }

    return (
        <section className="mainContent">
            <h2>Supprimer une news</h2>
            
            <div className='postsPosition'>
                {posts.map((post, index) => (
                    <article key={index} className="newsToDelete">
                        <h3>{post.title}</h3>
                        <p>{(post.content).substring(0, 30) + '...'}</p>
                        <p>Autheur: {post.author}</p>
                        <p>Catégorie: {post.category}</p>

                        <button className='btnDeleteNews' onClick={(e) => handleDelete(e, post.id)}> Supprimer </button>
                    </article>
                ))}
            </div>
        </section>
    )
}

export default DeletePosts;