import { useDispatch } from 'react-redux';
import { useNavigate } from "react-router-dom";
import { deleteMonster } from '../../../services/API/monsters';
import { loadMonsters } from '../../../store/slices/monsters.slice';
import { getAllMonsters } from "../../../services/API/monsters";

function DeleteMonster({monsters}) {

    const navigate = useNavigate();
    const dispatch = useDispatch();

    const handleDelete = async (e, monsterId) => {
        console.log('monsterId: ', monsterId);
        e.preventDefault();
        const res = await deleteMonster(monsterId);
        if (res.status === 200) {
            const res = await getAllMonsters();
            dispatch(loadMonsters(res.data.result));
            navigate("/admin/deleteMonsters");
        }
    }

    return (
        <section className="mainContent">
            <h2>Supprimer un monstre</h2>

                {monsters.map((monster, index) => {
                    return (
                        <article key={index} className="listMonstersToDelete">
                            <p>{monster.monster_name}</p>

                            <button className='btnDeleteMonster' onClick={(e) => handleDelete(e, (monster.id))}> Supprimer </button>
                        </article>
                    )
                })}
        </section>
    )
}

export default DeleteMonster;