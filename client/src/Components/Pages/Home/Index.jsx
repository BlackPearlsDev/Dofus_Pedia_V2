import { useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { setToggle } from '../../../store/slices/menu.slice';
import imgAvatar from "../../../assets/avatars/vald.png";

function Home() {
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

                <section className="sectionNews">
                    <div className="zoneTitleDate">
                        <h3>Titre</h3>
                        <p>Date</p>
                    </div>

                    <div className="zoneContent">
                        <div className="zoneAuthorImgName">
                            <img src={imgAvatar} alt="Logo de l'auteur" />
                            <p className="authorName">Nom de l'auteur</p>
                        </div>

                        <article>
                            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Exercitationem assumenda suscipit quia laudantium minima dolorem magnam incidunt veniam possimus. Nesciunt!</p>
                        </article>
                    </div>
                </section>
            </section>
        </main>
    )
}

export default Home;