import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setToggle } from '../../../store/slices/menu.slice';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronUp } from '@fortawesome/free-solid-svg-icons';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';

function ManageMonsters({ecosystem, race}) {

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

    const [infosToggle, setInfosToggle] = useState(true);

    const handleToggle = () => {
        setInfosToggle(!infosToggle);
    }

    const [valueName, setValueName] = useState('');
    const [valueEcosystem, setValueEcosystem] = useState('');
    const [valueRace, setValueRace] = useState('');
    const [valueLevel, setValueLevel] = useState('');
    const [valueHealth, setValueHealth] = useState('');
    const [valuePA, setValuePA] = useState('');
    const [valuePM, setValuePM] = useState('');
    const [valueExperience, setValueExperience] = useState('');
    const [valueInitiative, setValueInitiative] = useState('');
    const [valueStrength, setValueStrength] = useState('');
    const [valueIntelligence, setValueIntelligence] = useState('');
    const [valueChance, setValueChance] = useState('');
    const [valueAgility, setValueAgility] = useState('');
    const [valueDodgePA, setValueDodgePA] = useState('');
    const [valueDodgePM, setValueDodgePM] = useState('');
    const [valueResiNeutral, setValueResiNeutral] = useState('');
    const [valueResiEarth, setValueResiEarth] = useState('');
    const [valueResiFire, setValueResiFire] = useState('');
    const [valueResiWater, setValueResiWater] = useState('');
    const [valueResiWind, setValueResiWind] = useState('');
    // const [valueSpells, setValueSpells] = useState('');
    // const [valueDrops, setValueDrops] = useState('');
    // const [valueZones, setValueZones] = useState('');


    const handleChangeName = (e) => {
        e.preventDefault();
        setValueName(e.target.value);
    }

    const handleChangeEcosystem = (e) => {
        e.preventDefault();
        setValueEcosystem(e.target.value);
        console.log('valueEcosystem:', e.target.value);
    }

    const handleChangeRace = (e) => {
        e.preventDefault();
        setValueRace(e.target.value);
    }

    const handleChangeLevel = (e) => {
        e.preventDefault();
        setValueLevel(e.target.value);
    }

    const handleChangeHealth = (e) => {
        e.preventDefault();
        setValueHealth(e.target.value);
    }

    const handleChangePA = (e) => {
        e.preventDefault();
        setValuePA(e.target.value);
    }

    const handleChangePM = (e) => {
        e.preventDefault();
        setValuePM(e.target.value);
    }

    const handleChangeExperience = (e) => {
        e.preventDefault();
        setValueExperience(e.target.value);
    }

    const handleChangeInitiative = (e) => {
        e.preventDefault();
        setValueInitiative(e.target.value);
    }

    const handleChangeStrength = (e) => {
        e.preventDefault();
        setValueStrength(e.target.value);
    }

    const handleChangeIntelligence = (e) => {
        e.preventDefault();
        setValueIntelligence(e.target.value);
    }

    const handleChangeChance = (e) => {
        e.preventDefault();
        setValueChance(e.target.value);
    }

    const handleChangeAgility = (e) => {
        e.preventDefault();
        setValueAgility(e.target.value);
    }

    const handleChangeDodgePA = (e) => {
        e.preventDefault();
        setValueDodgePA(e.target.value);
    }

    const handleChangeDodgePM = (e) => {
        e.preventDefault();
        setValueDodgePM(e.target.value);
    }

    const handleChangeResiNeutral = (e) => {
        e.preventDefault();
        setValueResiNeutral(e.target.value);
    }

    const handleChangeResiEarth = (e) => {
        e.preventDefault();
        setValueResiEarth(e.target.value);
    }

    const handleChangeResiFire = (e) => {
        e.preventDefault();
        setValueResiFire(e.target.value);
    }

    const handleChangeResiWater = (e) => {
        e.preventDefault();
        setValueResiWater(e.target.value);
    }

    const handleChangeResiWind = (e) => {
        e.preventDefault();
        setValueResiWind(e.target.value);
    }

    // const handleChangeSpells = (e) => {
    //     e.preventDefault();
    //     setValueSpells(e.target.value);
    // }

    // const handleChangeDrops = (e) => {
    //     e.preventDefault();
    //     setValueDrops(e.target.value);
    // }

    // const handleChangeZones = (e) => {
    //     e.preventDefault();
    //     setValueZones(e.target.value);
    // }

    return (
        <main>
            <div className={isToggle ? "overlay" : undefined} onClick={() => dispatch(setToggle(!isToggle))}></div>

            <section className="mainContent">
                <h2>Gestion des monstres</h2>

                <form action="" className='formAddMonster'>
                    <input type="text" placeholder="Nom du monstre" onChange={handleChangeName} value={valueName}/>
                    <select name="ecosystem" id="ecosystem" onChange={handleChangeEcosystem} value={valueEcosystem}>
                        <option value="">Écosystème</option>
                        {ecosystem.map((ecosystem, index) => (
                            <option key={index} value={ecosystem.id}>{ecosystem.ecosystem_name}</option>
                        ))}
                    </select>
                    <select name="race" id="race" onChange={handleChangeRace} value={valueRace}>
                        <option value="">Race</option>
                        {race.map((race, index) => (
                            <option key={index} value={race.id}>{race.race_name}</option>
                        ))}
                    </select>
                    <input type="number" placeholder="Niveau" max="5000" onChange={handleChangeLevel} value={valueLevel}/>
                    <input type="number" placeholder="Points de vie" max="100000" onChange={handleChangeHealth} value={valueHealth}/>
                    <input type="number" placeholder="PA" max="50" onChange={handleChangePA} value={valuePA}/>
                    <input type="number" placeholder="PM" max="50" onChange={handleChangePM} value={valuePM}/>
                    <input type="number" placeholder="Gain d'éxpérience" max="999999" onChange={handleChangeExperience} value={valueExperience}/>
                    <input type="number" placeholder="Initiative" max="15000" onChange={handleChangeInitiative} value={valueInitiative}/>
                    <input type="number" placeholder="Puissance Terre" max="5000" onChange={handleChangeStrength} value={valueStrength}/>
                    <input type="number" placeholder="Puissance Feu" max="5000" onChange={handleChangeIntelligence} value={valueIntelligence}/>
                    <input type="number" placeholder="Puissance Eau" max="5000" onChange={handleChangeChance} value={valueChance}/>
                    <input type="number" placeholder="Puissance Air" max="5000" onChange={handleChangeAgility} value={valueAgility}/>
                    <input type="number" placeholder="Esquive PA" max="5000" onChange={handleChangeDodgePA} value={valueDodgePA}/>
                    <input type="number" placeholder="Esquive PM" max="5000" onChange={handleChangeDodgePM} value={valueDodgePM}/>
                    <input type="number" placeholder="Résistance Neutre" max="5000" onChange={handleChangeResiNeutral} value={valueResiNeutral}/>
                    <input type="number" placeholder="Résistance Terre" max="5000" onChange={handleChangeResiEarth} value={valueResiEarth}/>
                    <input type="number" placeholder="Résistance Feu" max="5000" onChange={handleChangeResiFire} value={valueResiFire}/>
                    <input type="number" placeholder="Résistance Eau" max="5000" onChange={handleChangeResiWater} value={valueResiWater}/>
                    <input type="number" placeholder="Résistance Air" max="5000" onChange={handleChangeResiWind} value={valueResiWind}/>
                    <input type="text" placeholder="Sorts" /> {/* mettre un select a la place qui récupère les données BDD */}
                    <input type="text" placeholder="Drops" /> {/* mettre un select a la place qui récupère les données BDD */}
                    <input type="text" placeholder="Zones" /> {/* mettre un select a la place qui récupère les données BDD */}

                    <input type="submit" value="Ajouter le monstre" className='btnAddMonster'/>
                </form>


                <section>
                    <h2>Preview</h2>

                    <div className='monsterPreview'>
                        <div className='monsterPreviewImg'>
                            {/* <img src="/images/monsters/monster1.png" alt="Icone du monstre" /> */}
                        </div>

                        <article className="monsterCard">
                            <div className='monsterHeadInfos'>
                                <h3>{valueName}</h3>
                                <p className='monsterLevel'>Niv.{valueLevel}</p>
                            </div>

                            <div className='imgMonsterLittle'>
                                <img src={``} alt={`icone du monstre`} />
                            </div>

                            <div className='monsterContent'>
                            {widthScreen > 767 ? (
                                    <>
                                    
                                    <div className='imgMonster'>
                                        <img src="" alt="" />
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
                                            <p>Écosystème: {valueEcosystem}</p>
                                            <p>Race: {valueRace}</p>
                                        </article>
                                    </div>

                                    <div className='statsMonster'>
                                        <h4>Caractéristiques</h4>

                                        <ul>
                                            <li>
                                                <img src={"/images/icons/Vita.svg"} alt="" className="icons-monsters" />
                                                <p>{valueHealth}</p>
                                            </li>

                                            <li>
                                                <img src={"/images/icons/PA.svg"} alt="" className="icons-monsters" />
                                                <p>{valuePA}</p>
                                            </li>

                                            <li>
                                                <img src={"/images/icons/PM.svg"} alt="" className="icons-monsters" />
                                                <p>{valuePM}</p>
                                            </li>

                                            <li>
                                                <img src={"/images/icons/XP.svg"} alt="" className="icons-monsters" />
                                                <p>{valueExperience}</p>
                                            </li>
                                        </ul>

                                        <ul>
                                            <li>
                                                <img src={"/images/icons/Init.svg"} alt="" className="icons-monsters" />
                                                <p>{valueInitiative}</p>
                                            </li>

                                            <li>
                                                <img src={"/images/icons/earth.svg"} alt="" className="icons-monsters" />
                                                <p>{valueStrength}</p>
                                            </li>

                                            <li>
                                                <img src={"/images/icons/fire.svg"} alt="" className="icons-monsters" />
                                                <p>{valueIntelligence}</p>
                                            </li>
                                        </ul>

                                        <ul>
                                            <li>
                                                <img src={"/images/icons/water.svg"} alt="" className="icons-monsters" />
                                                <p>{valueChance}</p>
                                            </li>

                                            <li>
                                                <img src={"/images/icons/Air.svg"} alt="" className="icons-monsters" />
                                                <p>{valueAgility}</p>
                                            </li>
                                        </ul>
                                    </div>

                                    <div className='statsMonster'>
                                        <h4>Esquive</h4>

                                        <ul>
                                            <li>
                                                <img src={"/images/icons/PA.svg"} alt="" className="icons-monsters" />
                                                <p>{valueDodgePA}%</p>
                                            </li>

                                            <li>
                                                <img src={"/images/icons/PM.svg"} alt="" className="icons-monsters" />
                                                <p>{valueDodgePM}%</p>
                                            </li>
                                        </ul>
                                    </div>

                                    <div className='statsMonster'>
                                        <h4>Résistances</h4>

                                        <ul>

                                            <li>
                                                <img src={"/images/icons/neutral.svg"} alt="" className="icons-monsters" />
                                                <p>{valueResiNeutral}%</p>
                                            </li>

                                            <li>
                                                <img src={"/images/icons/earth.svg"} alt="" className="icons-monsters" />
                                                <p>{valueResiEarth}%</p>
                                            </li>

                                            <li>
                                                <img src={"/images/icons/fire.svg"} alt="" className="icons-monsters" />
                                                <p>{valueResiFire}%</p>
                                            </li>
                                        </ul>

                                        <ul>
                                            <li>
                                                <img src={"/images/icons/water.svg"} alt="" className="icons-monsters" />
                                                <p>{valueResiWater}%</p>
                                            </li>

                                            <li>
                                                <img src={"/images/icons/Air.svg"} alt="" className="icons-monsters" />
                                                <p>{valueResiWind}%</p>
                                            </li>
                                        </ul>
                                    </div>

                                    <div className='statsMonster'>
                                        <div className='headHideInfos'>
                                            <h4>Sorts</h4>
                                            <button onClick={handleToggle} className="btnShowMonster"> 
                                                {infosToggle ? <FontAwesomeIcon icon={faChevronUp}/> : <FontAwesomeIcon icon={faChevronDown}/>}
                                            </button>
                                        </div>

                                        {infosToggle && (
                                            <p>{}</p>
                                        )}
                                    </div>

                                    <div className='statsMonster'>
                                        <div className='headHideInfos'>
                                            <h4>Sous-zones</h4>
                                            <button onClick={handleToggle} className="btnShowMonster"> 
                                                {infosToggle ? <FontAwesomeIcon icon={faChevronUp}/> : <FontAwesomeIcon icon={faChevronDown}/>}
                                            </button>
                                        </div>

                                        {infosToggle && (
                                            <p>{}</p>
                                        )}
                                    </div>

                                    <div className='statsMonster'>
                                        <div className='headHideInfos'>
                                            <h4>Drops</h4>
                                            <button onClick={handleToggle} className="btnShowMonster"> 
                                                {infosToggle ? <FontAwesomeIcon icon={faChevronUp}/> : <FontAwesomeIcon icon={faChevronDown}/>}
                                            </button>
                                        </div>

                                        {infosToggle && (
                                            <p>{}</p>
                                        )}
                                    </div>
                                </div>
                            </div>
                        </article>
                    </div>
                </section>
            </section>
        </main>
    )
}

export default ManageMonsters;