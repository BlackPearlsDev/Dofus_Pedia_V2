import { useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from "react-router-dom";
import { setToggle } from '../../../store/slices/menu.slice';
import imgAvatar from "../../../assets/avatars/parchemin.png";

import { getAllPosts } from "../../../services/API/post";
import { loadPosts } from '../../../store/slices/post.slice';

function Home({ posts }) {
    useEffect(() => {
        document.title = "Accueil - Dofus Pedia";
        refreshPosts();
        // eslint-disable-next-line
    }, []);

    const refreshPosts = async () => {
        const res = await getAllPosts();
        dispatch(loadPosts(res.data.result));
        navigate("/");
    }

    const navigate = useNavigate();
    const dispatch = useDispatch();
    const { isToggle } = useSelector((state) => ({...state.menu}));

    return (
        <main>
            <div className={isToggle ? "overlay" : undefined} onClick={() => dispatch(setToggle(!isToggle))}></div>

            <section className='mainContent'>
                <h2>Les News !</h2>

            <div className="positionNewsRow">
                {posts.map((post, index) => (
                    <section key={index} className="sectionNews">
                        <div className="zoneTitleDate">
                            <h3>{post.title}</h3>
                            <p>{new Date (post.creation_time).toLocaleDateString()}</p>
                        </div>

                        <div className="zoneContent">
                            <div className="zoneAuthorImgName">
                                <img src={imgAvatar} alt="Logo de l'auteur" />
                                <p className="authorName">{post.author}</p>
                            </div>

                            <article>
                                <p>{post.content}</p>
                            </article>
                        </div>

                        <p className="newsCategory">Catégorie: {post.category !=="" ? post.category : "Autres"}</p>
                    </section>
                ))}
            </div>
            </section>
        </main>
    )
}

export default Home;