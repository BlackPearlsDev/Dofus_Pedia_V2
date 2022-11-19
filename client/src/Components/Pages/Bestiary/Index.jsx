import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setToggle } from '../../../store/slices/menu.slice';
import MonstersList from './MonsterList';
import Pagination from '../../UI/Pagination';
import { getAllMonsters } from '../../../services/API/monsters';
import { loadMonsters } from '../../../store/slices/monsters.slice';

function Bestiary({ monsters }) {
    // console.log('Bestiary: ', monsters);

    const dispatch = useDispatch();
    const { isToggle } = useSelector((state) => ({...state.menu}));

    // pagination
    // eslint-disable-next-line
    const [bestiaryData, setBestiaryData] = useState(monsters);
    const [currentPage, setCurrentPage] = useState(1);
    // eslint-disable-next-line
    const [monstersPerPage, setMonstersPerPage] = useState(4); // nombres de monstres par page
    const lastMonstersIndex = currentPage * monstersPerPage;
    const firstMonstersIndex = lastMonstersIndex - monstersPerPage;
    const currentMonsters = bestiaryData.slice(firstMonstersIndex, lastMonstersIndex);

    const refreshBestiary = async () => {
        const res = await getAllMonsters();
        dispatch(loadMonsters(res.data.result));
    }

    useEffect(() => {
        refreshBestiary();
        // eslint-disable-next-line
    }, []);

    return (
        <main>
            <div className={isToggle ? "overlay" : undefined} onClick={() => dispatch(setToggle(!isToggle))}></div>
            
            <section className="mainContent">
                <h2>Le Bestiaire !</h2>

                <p className='monstersFound'>{monsters.length} monstres trouvés.</p>
                <MonstersList monsters={currentMonsters} />
                <Pagination totalMonsters={bestiaryData.length} monstersPerPage={monstersPerPage} setCurrentPage={setCurrentPage} currentPage={currentPage}/>
            </section>
        </main>
    )
}

export default Bestiary;