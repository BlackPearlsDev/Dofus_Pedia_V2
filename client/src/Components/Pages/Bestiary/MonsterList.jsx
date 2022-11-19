import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setToggle } from '../../../store/slices/menu.slice';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronUp } from '@fortawesome/free-solid-svg-icons';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';

function MonstersList({ monsters }) {

    const dispatch = useDispatch();
    const { isToggle } = useSelector((state) => ({...state.menu}));

    const [widthScreen, setWidthScreen] = useState(window.innerWidth);
    useEffect(() => {
        const handleResize = () => setWidthScreen(window.innerWidth);
        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    });

    const [infosToggle, setInfosToggle] = useState(true); // sur vrai au départ car on veut voir les infos en arrivant sur la page

    const handleToggle = () => {
        setInfosToggle(!infosToggle);
    }

    // valeur non ammenée à changer donc pas besoin de mettre dans un state
    const renderEcosystem = (ecoInfos) => {
        switch (ecoInfos) {
            case 1:
                return <p>Ecosystème: Créatures des champs</p>;
            case 2:
                return <p>Ecosystème: Créatures Diverses</p>;
            case 3:
                return <p>Ecosystème: Créatures des marécages</p>;
            case 4:
                return <p>Ecosystème: Créatures des landes</p>;
            case 5:
                return <p>Ecosystème: Créatures des plages</p>
            case 6:
                return <p>Ecosystème: Créatures de l'île des Wabbits</p>
            case 7:
                return <p>Ecosystème: Créatures de l'île du Minotoror</p>
            case 8:
                return <p>Ecosystème: Créatures de la zone des débutants</p>
            case 9:
                return <p>Ecosystème: Créatures de l'île de Moon</p>
            case 10:
                return <p>Ecosystème: Créatures des villes</p>
            case 11:
                return <p>Ecosystème: Créatures des plaines</p>
            case 12:
                return <p>Ecosystème: Créatures du village des éleveurs</p>
            case 13:
                return <p>Ecosystème: Créatures de la montagne</p>
            case 14:
                return <p>Ecosystème: Protecteurs des ressources</p>
            case 15:
                return <p>Ecosystème: Créatures de l'île d'Otomaï</p>
            case 16:
                return <p>Ecosystème: Créatures de Pandala</p>
            case 17:
                return <p>Ecosystème: Créatures de la forêt</p>
            case 18:
                return <p>Ecosystème: Créatures humanoïdes</p>
            case 19:
                return <p>Ecosystème: Créatures Archi-monstres</p>
            case 20:
                return <p>Ecosystème: Créatures de la nuit</p>
            default:
                return <p>Ecosystème: Inconnu</p>;
        }
    }

    const [searchInputs, setSearchInputs] = useState('');
    const handleSearch = (e) => {
        let lowerCaseSearch = e.target.value.toLowerCase();
        setSearchInputs(lowerCaseSearch);
        // on filtre les monstres en fonction de la recherche
        monsters.filter((monster) => {
            return monster.monster_name.toLowerCase().includes(lowerCaseSearch);
        });
    }

    const filteredData = monsters.filter((monster) => {
        return monster.monster_name.toLowerCase().includes(searchInputs);
    });

    // eslint-disable-next-line
    const [sort, setSort] = useState('');
    const handleOrderbyName = (e) => {
        setSort(e.target.value);
        monsters.sort((a, b) => {
            if (e.target.value === 'asc') {
                return a.monster_name.localeCompare(b.monster_name);
            } else if (e.target.value === 'desc') {
                return b.monster_name.localeCompare(a.monster_name);
            }
            return 0;
        });
    }

    const handleOrderbyLevel = (e) => {
        setSort(e.target.value);
        monsters.sort((a, b) => {    
            if (e.target.value === 'asc') {
                return a.level - b.level;
            } else if (e.target.value === 'desc') {
                return b.level - a.level;
            }
            return 0;
        });
    }

    return (
        <main>
            <div className={isToggle ? "overlay" : undefined} onClick={() => dispatch(setToggle(!isToggle))}></div>
            
            <section className="mainContent">
            <div className='bestiarySearchBox'>
                <input type="searchBar" id='searchBar' placeholder="Rechercher un monstre" onChange={(e) => handleSearch(e)}/>
                <div className='filtersMonsters'>
                    <label htmlFor="monster-name">Trier par nom</label>
                    <select name="name" id="monster-name" onChange={(e) => handleOrderbyName(e)}>
                        <option value="asc">A ↓</option>
                        <option value="desc">Z ↑</option>
                    </select>

                    <label htmlFor="monster-level">Trier par niveau</label>
                    <select name="level" id="monster-level" onChange={(e) => handleOrderbyLevel(e)}>
                        <option value="asc">Croissant</option>
                        <option value="desc">Décroissant</option>
                    </select>
                </div>
            </div>
                <section className='sectionMonster'>
                    {filteredData.map((mob, index) => (
                        <article key={index} className="monsterCard">
                            <div className='monsterHeadInfos'>
                                <h3>{mob.monster_name}</h3>
                                <p className='monsterLevel'>Niv.{mob.level}</p>
                            </div>

                            {widthScreen < 728 ? (
                                <>
                                <div className='imgMonsterLittle'>
                                    <img src={mob.image_name != null ? `images/monsters/${mob.image_name}` : `images/monsters/gfxNotFound.svg`} alt={`icone du monstre ${mob.monster_name}`} />
                                </div>
                                </>
                            ) : (
                                <>
                                    {/* rien ici */}
                                </>
                            )}

                            <div className='monsterContent'>
                                {widthScreen > 728 ? (
                                    <>
                                    
                                    <div className='imgMonster'>
                                        <img src={mob.image_name != null ? `images/monsters/${mob.image_name}` : `images/monsters/gfxNotFound.svg`} alt={`icone du monstre ${mob.monster_name}`}/>
                                    </div>
                                    </>
                                ) : (
                                    <>
                                        {/* rien ici */}
                                    </>
                                )}

                                <div className='monsterContentInfos'>
                                    <div className='infosMonster'>
                                        <article className='specMonster'>
                                            {renderEcosystem(mob.ecosystem_id)} {/* a refaire */}
                                            <p>Race: {mob.race_name}</p>
                                        </article>
                                    </div>

                                    <div className='statsMonster'>
                                        <h4>Caractéristiques</h4>

                                        <ul>
                                            <li>
                                                <img src={"images/icons/Vita.svg"} alt={`Vie du monstre ${mob.monster_name}`} className="icons-monsters" />
                                                <p>{mob.health}</p>
                                            </li>

                                            <li>
                                                <img src={"images/icons/PA.svg"} alt={`PA du monstre ${mob.action_point}`} className="icons-monsters" />
                                                <p>{mob.action_point}</p>
                                            </li>

                                            <li>
                                                <img src={"images/icons/PM.svg"} alt={`PM du monstre ${mob.movement_point}`} className="icons-monsters" />
                                                <p>{mob.movement_point}</p>
                                            </li>

                                            <li>
                                                <img src={"images/icons/XP.svg"} alt={`Expérience du monstre ${mob.experience}`} className="icons-monsters" />
                                                <p>{mob.experience}</p>
                                            </li>
                                        </ul>

                                        {widthScreen < 728 ? (
                                        <>
                                            <ul>
                                                <li>
                                                    <img src={"images/icons/Init.svg"} alt={`Initiative du monstre ${mob.init}`} className="icons-monsters" />
                                                    <p>{mob.init}</p>
                                                </li>

                                                <li>
                                                    <img src={"images/icons/earth.svg"} alt={`Force du monstre ${mob.earth}`} className="icons-monsters" />
                                                    <p>{mob.earth}</p>
                                                </li>

                                                <li>
                                                    <img src={"images/icons/fire.svg"} alt={`Intelligence du monstre ${mob.fire}`} className="icons-monsters" />
                                                    <p>{mob.fire}</p>
                                                </li>
                                            </ul>

                                            <ul>
                                                <li>
                                                    <img src={"images/icons/water.svg"} alt={`Chance du monstre ${mob.water}`} className="icons-monsters" />
                                                    <p>{mob.water}</p>
                                                </li>

                                                <li>
                                                    <img src={"images/icons/Air.svg"} alt={`Agilité du monstre ${mob.wind}`} className="icons-monsters" />
                                                    <p>{mob.wind}</p>
                                                </li>
                                            </ul>
                                        </>
                                        ) : (
                                        <>
                                            <ul>
                                                <li>
                                                    <img src={"images/icons/Init.svg"} alt={`Initiative du monstre ${mob.init}`} className="icons-monsters" />
                                                    <p>{mob.init}</p>
                                                </li>

                                                <li>
                                                    <img src={"images/icons/earth.svg"} alt={`Force du monstre ${mob.earth}`} className="icons-monsters" />
                                                    <p>{mob.earth}</p>
                                                </li>

                                                <li>
                                                    <img src={"images/icons/fire.svg"} alt={`Intelligence du monstre ${mob.fire}`} className="icons-monsters" />
                                                    <p>{mob.fire}</p>
                                                </li>

                                                <li>
                                                    <img src={"images/icons/water.svg"} alt={`Chance du monstre ${mob.water}`} className="icons-monsters" />
                                                    <p>{mob.water}</p>
                                                </li>

                                                <li>
                                                    <img src={"images/icons/Air.svg"} alt={`Agilité du monstre ${mob.wind}`} className="icons-monsters" />
                                                    <p>{mob.wind}</p>
                                                </li>
                                            </ul>
                                        </>
                                        )}
                                    </div>


                                    <div className='statsMonster'>
                                        <h4>Esquive</h4>

                                        <ul>
                                            <li>
                                                <img src={"images/icons/PA.svg"} alt={`Esquive d'action du monstre ${mob.dodge_pa}`} className="icons-monsters" />
                                                <p>{mob.dodge_pa}%</p>
                                            </li>

                                            <li>
                                                <img src={"images/icons/PM.svg"} alt={`Esquive de mouvement du monstre ${mob.dodge_pm}`} className="icons-monsters" />
                                                <p>{mob.dodge_pm}%</p>
                                            </li>
                                        </ul>
                                    </div>

                                    <div className='statsMonster'>
                                        <h4>Résistances</h4>

                                        {widthScreen < 728 ? (
                                        <>
                                            <ul>

                                                <li>
                                                    <img src={"images/icons/neutral.svg"} alt={`Résistance neutre du monstre ${mob.resi_neutral}`} className="icons-monsters" />
                                                    <p>{mob.resi_neutral}%</p>
                                                </li>

                                                <li>
                                                    <img src={"images/icons/earth.svg"} alt={`Résistance terre du monstre ${mob.resistance_earth}`} className="icons-monsters" />
                                                    <p>{mob.resi_earth}%</p>
                                                </li>

                                                <li>
                                                    <img src={"images/icons/fire.svg"} alt={`Résistance feu du monstre ${mob.resistance_fire}`} className="icons-monsters" />
                                                    <p>{mob.resi_fire}%</p>
                                                </li>
                                            </ul>

                                            <ul>
                                                <li>
                                                    <img src={"images/icons/water.svg"} alt={`Résistance eau du monstre ${mob.resistance_water}`} className="icons-monsters" />
                                                    <p>{mob.resi_water}%</p>
                                                </li>

                                                <li>
                                                    <img src={"images/icons/Air.svg"} alt={`Résistance air du monstre ${mob.resistance_wind}`} className="icons-monsters" />
                                                    <p>{mob.resi_wind}%</p>
                                                </li>
                                            </ul>
                                        </>
                                        ) : (
                                        <>
                                            <ul>
                                                <li>
                                                    <img src={"images/icons/neutral.svg"} alt={`Résistance neutre du monstre ${mob.resi_neutral}`} className="icons-monsters" />
                                                    <p>{mob.resi_neutral}%</p>
                                                </li>

                                                <li>
                                                    <img src={"images/icons/earth.svg"} alt={`Résistance terre du monstre ${mob.resistance_earth}`} className="icons-monsters" />
                                                    <p>{mob.resi_earth}%</p>
                                                </li>

                                                <li>
                                                    <img src={"images/icons/fire.svg"} alt={`Résistance feu du monstre ${mob.resistance_fire}`} className="icons-monsters" />
                                                    <p>{mob.resi_fire}%</p>
                                                </li>

                                                <li>
                                                    <img src={"images/icons/water.svg"} alt={`Résistance eau du monstre ${mob.resistance_water}`} className="icons-monsters" />
                                                    <p>{mob.resi_water}%</p>
                                                </li>

                                                <li>
                                                    <img src={"images/icons/Air.svg"} alt={`Résistance air du monstre ${mob.resistance_wind}`} className="icons-monsters" />
                                                    <p>{mob.resi_wind}%</p>
                                                </li>
                                            </ul>
                                        </>
                                        )}
                                    </div>
                                </div>
                            </div>

                            <div className='statsMonster'>
                                <div className='headHideInfos'>
                                    <h4>Sorts</h4>
                                    <button onClick={handleToggle} className="btnShowMonster"> 
                                        {infosToggle ? <FontAwesomeIcon icon={faChevronUp}/> : <FontAwesomeIcon icon={faChevronDown}/>}
                                    </button>
                                </div>

                                {infosToggle && (
                                    <p>{mob.spell_name} #{mob.spells_id}</p>
                                )}
                            </div>

                            {mob.zones && (
                                <div className='statsMonster'>
                                    <div className='headHideInfos'>
                                        <h4>Sous-zones</h4>
                                        <button onClick={handleToggle} className="btnShowMonster"> 
                                            {infosToggle ? <FontAwesomeIcon icon={faChevronUp}/> : <FontAwesomeIcon icon={faChevronDown}/>}
                                        </button>
                                    </div>

                                    {infosToggle && (
                                        <p>{mob.zones}</p>
                                    )}
                                </div>
                            )}

                            {mob.drops && (
                                <div className='statsMonster'>
                                    <div className='headHideInfos'>
                                        <h4>Drops</h4>
                                        <button onClick={handleToggle} className="btnShowMonster"> 
                                            {infosToggle ? <FontAwesomeIcon icon={faChevronUp}/> : <FontAwesomeIcon icon={faChevronDown}/>}
                                        </button>
                                    </div>

                                    {infosToggle && (
                                        <p>{mob.drops}</p>
                                    )}
                                </div>
                            )}
                        </article>
                    ))}
                </section>
            </section>
        </main>
    )
}

export default MonstersList;