import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setToggle } from '../../../store/slices/menu.slice';
import MonstersList from './MonsterList';
import Pagination from '../../UI/Pagination';
import { getAllMonsters } from '../../../services/API/monsters';
import { loadMonsters } from '../../../store/slices/monsters.slice';

function Bestiary({ monsters }) {

    const dispatch = useDispatch();
    const { isToggle } = useSelector((state) => ({...state.menu}));

    // pagination
    // eslint-disable-next-line
    const [bestiaryData, setBestiaryData] = useState(monsters);
    const [currentPage, setCurrentPage] = useState(1);
    // eslint-disable-next-line
    const [postsPerPage, setPostsPerPage] = useState(20);
    const lastPostIndex = currentPage * postsPerPage;
    const firstPostIndex = lastPostIndex - postsPerPage;
    const currentPosts = bestiaryData.slice(firstPostIndex, lastPostIndex);

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

                <MonstersList monsters={currentPosts} />
                <Pagination totalPosts={bestiaryData.length} postsPerPage={postsPerPage} setCurrentPage={setCurrentPage} currentPage={currentPage}/>
            </section>
        </main>
    )
}

export default Bestiary;