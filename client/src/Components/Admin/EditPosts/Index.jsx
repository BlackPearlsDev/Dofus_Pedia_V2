import { useNavigate } from "react-router-dom";
import { getPostById } from "../../../services/API/post";

function EditPosts({posts}) {
    console.log('posts: ', posts);

    const navigate = useNavigate();

    const handleEdit = async (e, postId) => {
        e.preventDefault();
        console.log('postId: ', postId);
        const res = await getPostById(postId);
        if (res.status === 200) {
            navigate(`/admin/editPosts/${postId}`);
        }
    }

    return (
        <section className="mainContent">
            <h2>Modifier une news</h2>

            <div className='postsPosition'>
                {posts.map((post, index) => (
                    <article key={index} className="newsToDelete">
                        <h3>{post.title}</h3>
                        <p>{(post.content).substring(0, 40) + '...'}</p>
                        <p>Autheur: {post.author}</p>
                        <p>Catégorie: {post.category}</p>

                        <button className='btnDeleteNews' onClick={(e) => handleEdit(e, post.id)}> Modifier </button>
                    </article>
                ))}
            </div>
        </section>
    )
}

export default EditPosts;