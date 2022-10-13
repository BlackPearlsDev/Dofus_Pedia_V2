import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setToggle } from '../../../store/slices/menu.slice';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronUp } from '@fortawesome/free-solid-svg-icons';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';

function Bestiary({ monsters }) {
    // console.log('monsters', monsters); // A REMETTRE QUAND JE FERAIS LES TEST D'AJOUT ADMINS

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

    const renderEcosystem = (ecoInfos) => {
        if (ecoInfos === 1) {
            return <p>Ecosystème: Créatures des champs</p>
        } else if (ecoInfos === 2) {
            return <p>Ecosystème: Créatures Diverses</p>
        } else if (ecoInfos === 3) {
            return <p>Ecosystème: Créatures des marécages</p>
        } else if (ecoInfos === 4) {
            return <p>Ecosystème: Créatures des landes</p>
        } else if (ecoInfos === 5) {
            return <p>Ecosystème: Créatures des plages</p>
        } else if (ecoInfos === 6) {
            return <p>Ecosystème: Créatures de l'île des Wabbits</p>
        } else if (ecoInfos === 7) {
            return <p>Ecosystème: Créatures de l'île du Minotoror</p>
        } else if (ecoInfos === 8) {
            return <p>Ecosystème: Créatures de la zone des débutants</p>
        } else if (ecoInfos === 9) {
            return <p>Ecosystème: Créatures de l'île de Moon</p>
        } else if (ecoInfos === 10) {
            return <p>Ecosystème: Créatures des villes</p>
        } else if (ecoInfos === 11) {
            return <p>Ecosystème: Créatures des plaines</p>
        } else if (ecoInfos === 12) {
            return <p>Ecosystème: Créatures du village des éleveurs</p>
        } else if (ecoInfos === 13) {
            return <p>Ecosystème: Créatures de la montagne</p>
        } else if (ecoInfos === 14) {
            return <p>Ecosystème: Protecteurs des ressources</p>
        } else if (ecoInfos === 15) {
            return <p>Ecosystème: Créatures de l'île d'Otomaï</p>
        } else if (ecoInfos === 16) {
            return <p>Ecosystème: Créatures de Pandala</p>
        } else if (ecoInfos === 17) {
            return <p>Ecosystème: Créatures de la forêt</p>
        } else if (ecoInfos === 18) {
            return <p>Ecosystème: Créatures humanoïdes</p>
        } else if (ecoInfos === 19) {
            return <p>Ecosystème: Créatures Archi-monstres</p>
        } else if (ecoInfos === 20) {
            return <p>Ecosystème: Créatures de la nuit</p>
        }
    }

    return (
        <main>
            <div className={isToggle ? "overlay" : undefined} onClick={() => dispatch(setToggle(!isToggle))}></div>
            
            <section className="mainContent">
                <h2>Le Bestiaire !</h2>

                <section className='sectionMonster'>
                    {monsters.map((mob) => (
                        <article key={mob.id} className="monsterCard">
                            <div className='monsterHeadInfos'>
                                <h3>{mob.monster_name}</h3>
                                <p className='monsterLevel'>Niv.{mob.level}</p>
                            </div>

                            {widthScreen < 425 ? (
                                <>
                                <div className='imgMonsterLittle'>
                                    <img src={`images/monsters/${mob.id}.svg`} alt={`icone du monstre ${mob.monster_name}`} />
                                </div>
                                </>
                            ) : (
                                <>
                                    {/* rien ici */}
                                </>
                            )}

                            <div className='monsterContent'>
                                {widthScreen > 424 ? (
                                    <>
                                    
                                    <div className='imgMonster'>
                                        <img src={`images/monsters/${mob.id}.svg`} alt={`icone du monstre ${mob.monster_name}`} />
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
                                            {renderEcosystem(mob.ecosystem)}
                                            <p>Race: {mob.race}</p>
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
                                    <p>{mob.spells}</p>
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

export default Bestiary;