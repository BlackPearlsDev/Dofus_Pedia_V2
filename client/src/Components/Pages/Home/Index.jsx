import { useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { setToggle } from '../../../store/slices/menu.slice';
import imgAvatar from "../../../assets/avatars/vald.png";

function Home({ posts }) {
    console.log('posts', posts);
    useEffect(() => {
        document.title = "Accueil - Dofus Pedia";
    }, [])

    const dispatch = useDispatch();
    const { isToggle } = useSelector((state) => ({...state.menu}));

    return (
        <main>
            <div className={isToggle ? "overlay" : undefined} onClick={() => dispatch(setToggle(!isToggle))}></div>

            <section className='mainContent'>
                <h2>Les News !</h2>

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

                    <p className="newsCategory">Catégorie: {post.category}</p>
                </section>
            ))}
            </section>
        </main>
    )
}

export default Home;