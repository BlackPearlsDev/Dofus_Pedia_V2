import { deletePost } from '../../../services/API/post';
import { loadPosts } from "../../../store/slices/post.slice";
import { useDispatch } from 'react-redux';

function DeletePosts({ posts }) {

    const dispatch = useDispatch();

    const handleDelete = async (e, postId) => {
        e.preventDefault();
        console.log("post id : ", postId);
        const res = await deletePost(postId);
        if(res.status === 404) {
		    console.log(res.data.msg);
		 	return;
        }
        if (res.status === 200) {
            console.log('post deleted');
            dispatch(loadPosts());
        }
    }

    return (
        <main>
            <section className="mainContent">
                <h2>Supprimer une news</h2>
                
                {posts.map((post, index) => (
                    <article key={index} className="newsToDelete">
                        <h3>{post.title}</h3>
                        <p>{(post.content).substring(0, 30) + '...'}</p>
                        <p>Autheur: {post.author}</p>
                        <p>Catégorie: {post.category}</p>

                        <button className='btnDeleteNews' onClick={(e) => handleDelete(e, post.id)}> Supprimer </button>
                    </article>
                ))}
            </section>
        </main>
    )
}

export default DeletePosts;