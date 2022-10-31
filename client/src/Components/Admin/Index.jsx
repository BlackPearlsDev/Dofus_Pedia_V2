import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setToggle } from '../../store/slices/menu.slice';
import { Link } from 'react-router-dom';
import { Outlet } from 'react-router-dom';

function Admin() {

    const dispatch = useDispatch();
    const { isToggle } = useSelector((state) => ({...state.menu}));
    const [toggleBtn, setToggleBtn] = useState(false);

    const handleToggle = () => {
        setToggleBtn(!toggleBtn);
    }

    return (
        <main>
            <div className={isToggle ? "overlay" : undefined} onClick={() => dispatch(setToggle(!isToggle))}></div>

            <section className="mainContent">
                <h2>Gestion admin</h2>

                <article className='adminLinks'>
                    <h2 className='h2PanelAdmin'>Les news</h2>
                    <div className='divDivider'></div>
                    <Link to='createPosts' onClick={handleToggle}>Écrire une news</Link>
                    <Link to='deletePosts' onClick={handleToggle}>Supprimer une news</Link>
                    <Link to='createCategories' onClick={handleToggle}>Créer une catégorie news</Link>

                    <h2 className='h2PanelAdmin'>Les monstres</h2>
                    <div className='divDivider'></div>
                    <Link to='addMonsters' onClick={handleToggle}>Ajout d'un monstre</Link>
                    <Link to='deleteMonsters' onClick={handleToggle}>Suppression d'un monstre</Link>
                </article>

                {toggleBtn && <Outlet />}
            </section>

        </main>
    )
}

export default Admin;