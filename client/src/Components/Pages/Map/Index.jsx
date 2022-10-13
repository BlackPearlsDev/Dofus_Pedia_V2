import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setToggle } from '../../../store/slices/menu.slice';

function Map() {

    const dispatch = useDispatch();
    const { isToggle } = useSelector((state) => ({...state.menu}));

    return (
        <main>
            <div className={isToggle ? "overlay" : undefined} onClick={() => dispatch(setToggle(!isToggle))}></div>

            <section className="mainContent">
                <h2>La Map !</h2>

                <iframe src="https://dofusretro.org/fr/map/sbjvee" width="1200" height="600" className='mapFrame' title='La map du monde de Dofus'></iframe>
            </section>
        </main>
    )
}

export default Map;

// <iframe src="https://dofusretro.org/fr/map/sbjvee" width="1200" height="600"></iframe>