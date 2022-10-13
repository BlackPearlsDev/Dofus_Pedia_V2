import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setToggle } from '../../../store/slices/menu.slice';
import { Outlet } from 'react-router-dom';
import { Link } from 'react-router-dom';

function Classes({ classes }) {

    const dispatch = useDispatch();
    const { isToggle } = useSelector((state) => ({...state.menu}));
    const [toggleBtn, setToggleBtn] = useState(false);
    
    const handleToggle = () => {
        setToggleBtn(!toggleBtn);
    }

    return (
        <main>
            <div className={isToggle ? "overlay" : undefined} onClick={() => dispatch(setToggle(!isToggle))}></div>

            <section className='mainContent'>
                <h2>Les Classes !</h2>

                <section>
                    <nav className='allClassesIcons'>
                        {classes.map((classe, index) => (
                            <Link key={index} to={`${classe.classe_name}`} onClick={handleToggle}>
                                <img src={`/images/heads/${classe.id}.svg`} alt={classe.classe_name} />
                            </Link>
                        ))}
                    </nav>
                </section>

                {toggleBtn && <Outlet />}
            </section>
        </main>
    )
}

export default Classes;