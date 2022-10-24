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
                    <Link to='addMonsters' onClick={handleToggle}>Ajout d'un monstre</Link>
                    <Link to='deleteMonsters' onClick={handleToggle}>Suppression d'un monstre</Link>
                    <Link to='/admin/manage-spells'>Gestion des sorts | TODO</Link>
                    <Link to='/admin/manage-items'>Gestion des objets | TODO</Link>
                </article>

                {toggleBtn && <Outlet />}
            </section>

        </main>
    )
}

export default Admin;