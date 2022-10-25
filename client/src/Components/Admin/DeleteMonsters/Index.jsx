import { useDispatch, useSelector } from 'react-redux';
import { deleteMonster } from '../../../services/API/monsters';
import { setToggle } from '../../../store/slices/menu.slice';

function DeleteMonster({monsters}) {
    console.log("monsters", monsters);

    const dispatch = useDispatch();
    const { isToggle } = useSelector((state) => ({...state.menu}));

    const handleDelete = async (e, monsterId) => {
        e.preventDefault();
        console.log("monster id : ", monsterId);
        const res = await deleteMonster(monsterId);
        if(res.status === 404) {
			console.log(res.data.msg);
			return;
        }
    }

    return (
        <main>
            <div className={isToggle ? "overlay" : undefined} onClick={() => dispatch(setToggle(!isToggle))}></div>

            <section className="mainContent">
                <h2>Supprimer un monstre</h2>

                    {monsters.map((monster, index) => {
                        return (
                            <article key={index} className="listMonstersToDelete">
                                <p>{monster.monster_name}</p>

                                <button className='btnDeleteMonster' onClick={(e) => handleDelete(e, monster.id)}> Supprimer </button>
                            </article>
                        )
                    })}
            </section>
        </main>
    )
}

export default DeleteMonster;