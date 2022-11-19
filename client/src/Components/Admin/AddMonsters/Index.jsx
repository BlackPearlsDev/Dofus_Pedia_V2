import { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronUp } from '@fortawesome/free-solid-svg-icons';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';
import { addMonster, addImg } from '../../../services/API/monsters';
import { getAllMonsters } from '../../../services/API/monsters';
import { loadMonsters } from '../../../store/slices/monsters.slice';


function AddMonsters({ecosystem, race, spells}) {

    const fileInput = useRef();
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [isEmpty, setIsEmpty] = useState(false);
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

    const [inputs, setInputs] = useState({ valueName: "", valueEcosystem: "", valueRace: "", valueLevel: "", valueHealth: "", valuePA: "", valuePM: "", valueExperience: "", valueInitiative: "", valueStrength: "", valueIntelligence: "", valueChance: "", valueAgility: "", valueDodgePA: "", valueDodgePM: "", valueResiNeutral: "", valueResiEarth: "", valueResiFire: "", valueResiWater: "", valueResiWind: "", valueSpells: "", valueDrops: "", valueZones: "", image_name: null});
    // pour les selects faire UN SEUL handleChange qui execute une fonction qui fais une requetes API vers le back

    const handleSubmit = async (e) => {
        const formData = new FormData();
        e.preventDefault();
        if(inputs.valueName === "" || inputs.valueEcosystem === "" || inputs.valueRace === "" || inputs.valueLevel === "" || inputs.valueHealth === "" || inputs.valuePA === "" || inputs.valuePM === "" || inputs.valueExperience === "" || inputs.valueInitiative === "" || inputs.valueStrength === "" || inputs.valueIntelligence === "" || inputs.valueChance === "" || inputs.valueAgility === "" || inputs.valueDodgePA === "" || inputs.valueDodgePM === "" || inputs.valueResiNeutral === "" || inputs.valueResiEarth === "" || inputs.valueResiFire === "" || inputs.valueResiWater === "" || inputs.valueResiWind === "" || inputs.valueSpells === "" || inputs.valueDrops === "" || inputs.valueZones === "" || inputs.image_name === null) {
            setIsEmpty(true);
            return;
        }

        if (inputs.image_name !== null) {
            formData.append('image', inputs.image_name);
            const res1 = await addImg(formData);
            if (res1.status === 200) {
                const datas = {
                    ...inputs,
                    image_name : res1.data.url,
                }
                const res2 = await addMonster(datas);
                if (res2.status === 200) {
                    navigate(`/admin`);
                    const res = await getAllMonsters();
                    dispatch(loadMonsters(res.data.result));
                }
            }
        } else {
            const res = await addMonster(inputs);
            if (res.status === 200) {
                navigate(`/admin`);
            }
        }
    }

    const handleInputs = (e) => {
        e.preventDefault();
        const {name, value} = e.target;
        setInputs({...inputs, [name]: value});
    }

    return (
        <section className="mainContent">
            <h2>Ajouter un monstre</h2>

            {isEmpty && <p className="txtErrorEntry">Veuillez remplir tous les champs</p>}
            <form onSubmit={handleSubmit} className='formAddMonster'>
                <input type="text" name="valueName" placeholder="Nom du monstre" onChange={handleInputs} value={inputs.valueName}/>
                <select name="valueEcosystem" id="ecosystem" onChange={handleInputs} value={inputs.valueEcosystem}>
                    <option value="" disabled hidden>Écosystème</option>
                    {ecosystem.map((ecosystem, index) => (
                        <option key={index} value={ecosystem.id}>({ecosystem.id}) {ecosystem.ecosystem_name}</option>
                    ))}
                </select>
                <select name="valueRace" id="race" onChange={handleInputs} value={inputs.valueRace}>
                    <option value="" disabled hidden>Race</option>
                    {race.map((race, index) => (
                        <option key={index} value={race.id}>({race.id}) {race.race_name}</option>
                    ))}
                </select>
                <input type="number" name="valueLevel" placeholder="Niveau" max="5000" onChange={handleInputs} value={inputs.valueLevel}/>
                <input type="number" name="valueHealth" placeholder="Points de vie" max="100000" onChange={handleInputs} value={inputs.valueHealth}/>
                <input type="number" name="valuePA" placeholder="PA" max="50" onChange={handleInputs} value={inputs.valuePA}/>
                <input type="number" name="valuePM" placeholder="PM" max="50" onChange={handleInputs} value={inputs.valuePM}/>
                <input type="number" name="valueExperience" placeholder="Gain d'éxpérience" max="9999999" onChange={handleInputs} value={inputs.valueExperience}/>
                <input type="number" name="valueInitiative" placeholder="Initiative" max="20000" onChange={handleInputs} value={inputs.valueInitiative}/>
                <input type="number" name="valueStrength" placeholder="Puissance Terre" max="5000" onChange={handleInputs} value={inputs.valueStrength}/>
                <input type="number" name="valueIntelligence" placeholder="Puissance Feu" max="5000" onChange={handleInputs} value={inputs.valueIntelligence}/>
                <input type="number" name="valueChance" placeholder="Puissance Eau" max="5000" onChange={handleInputs} value={inputs.valueChance}/>
                <input type="number" name="valueAgility" placeholder="Puissance Air" max="5000" onChange={handleInputs} value={inputs.valueAgility}/>
                <input type="number" name="valueDodgePA" placeholder="Esquive PA" max="20000" onChange={handleInputs} value={inputs.valueDodgePA}/>
                <input type="number" name="valueDodgePM" placeholder="Esquive PM" max="20000" onChange={handleInputs} value={inputs.valueDodgePM}/>
                <input type="number" name="valueResiNeutral" placeholder="Résistance Neutre" max="5000" onChange={handleInputs} value={inputs.valueResiNeutral}/>
                <input type="number" name="valueResiEarth" placeholder="Résistance Terre" max="5000" onChange={handleInputs} value={inputs.valueResiEarth}/>
                <input type="number" name="valueResiFire" placeholder="Résistance Feu" max="5000" onChange={handleInputs} value={inputs.valueResiFire}/>
                <input type="number" name="valueResiWater" placeholder="Résistance Eau" max="5000" onChange={handleInputs} value={inputs.valueResiWater}/>
                <input type="number" name="valueResiWind" placeholder="Résistance Air" max="5000" onChange={handleInputs} value={inputs.valueResiWind}/>
                <select name="valueSpells" id="spells" onChange={handleInputs} value={inputs.valueSpells}>
                    <option value="">Sorts</option>
                    {spells.map((spell, index) => (
                        <option key={index} value={spell.id}>({spell.id}) {spell.spell_name}</option>
                    ))}
                </select>
                <input type="text" name="valueDrops" placeholder="Drops" onChange={handleInputs} value={inputs.valueDrops}/> {/* mettre un select a la place qui récupère les données BDD */}
                <input type="text"  name="valueZones" placeholder="Zones" onChange={handleInputs} value={inputs.valueZones}/> {/* mettre un select a la place qui récupère les données BDD */}
                <label className="custom-file-upload">
                    <input type="file" name="image_name" id="image_name" ref={fileInput} onChange={() => setInputs({...inputs, image_name: fileInput.current.files[0]})}/>
                    Choisir l'image du monstre
                </label>

                <input type="submit" value="Ajouter le monstre" className='btnAddMonster'/>
            </form>


            <section>
                <h2>Preview</h2>

                <div className='monsterPreview'>

                    <article className="monsterCard">
                        <div className='monsterHeadInfos'>
                            <h3>{inputs.valueName}</h3>
                            <p className='monsterLevel'>Niv.{inputs.valueLevel}</p>
                        </div>

                        {widthScreen < 767 ? (
                            <>
                                <div className='imgMonsterLittle'>
                                    <img src={inputs.image_name != null ? `images/monsters/${fileInput.current.files[0]}` : `/images/monsters/gfxNotFound.svg`} alt={`icone du monstre`} />
                                </div>
                            </>
                        ) : (
                            <>
                                {/* rien ici */}
                            </>
                        )}

                        <div className='monsterContent'>
                        {widthScreen > 767 ? (
                                <>
                                
                                <div className='imgMonster'>
                                <img src={inputs.image_name != null ? `images/monsters/${fileInput.current.files[0]}` : `/images/monsters/gfxNotFound.svg`} alt={`icone du monstre`} />
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
                                        <p>Écosystème: {inputs.valueEcosystem}</p>
                                        <p>Race: {inputs.valueRace}</p>
                                    </article>
                                </div>

                                <div className='statsMonster'>
                                    <h4>Caractéristiques</h4>

                                {widthScreen > 767 ? (
                                <>
                                    <ul>
                                        <li>
                                            <img src={"/images/icons/Vita.svg"} alt="" className="icons-monsters" />
                                            <p>{inputs.valueHealth}</p>
                                        </li>

                                        <li>
                                            <img src={"/images/icons/PA.svg"} alt="" className="icons-monsters" />
                                            <p>{inputs.valuePA}</p>
                                        </li>

                                        <li>
                                            <img src={"/images/icons/PM.svg"} alt="" className="icons-monsters" />
                                            <p>{inputs.valuePM}</p>
                                        </li>

                                        <li>
                                            <img src={"/images/icons/XP.svg"} alt="" className="icons-monsters" />
                                            <p>{inputs.valueExperience}</p>
                                        </li>
                                    </ul>

                                    <ul>
                                        <li>
                                            <img src={"/images/icons/Init.svg"} alt="" className="icons-monsters" />
                                            <p>{inputs.valueInitiative}</p>
                                        </li>

                                        <li>
                                            <img src={"/images/icons/earth.svg"} alt="" className="icons-monsters" />
                                            <p>{inputs.valueStrength}</p>
                                        </li>

                                        <li>
                                            <img src={"/images/icons/fire.svg"} alt="" className="icons-monsters" />
                                            <p>{inputs.valueIntelligence}</p>
                                        </li>

                                        <li>
                                            <img src={"/images/icons/water.svg"} alt="" className="icons-monsters" />
                                            <p>{inputs.valueChance}</p>
                                        </li>

                                        <li>
                                            <img src={"/images/icons/Air.svg"} alt="" className="icons-monsters" />
                                            <p>{inputs.valueAgility}</p>
                                        </li>
                                    </ul>
                                </>
                                ) : (
                                <>
                                    <ul>
                                        <li>
                                            <img src={"/images/icons/Vita.svg"} alt="" className="icons-monsters" />
                                            <p>{inputs.valueHealth}</p>
                                        </li>

                                        <li>
                                            <img src={"/images/icons/PA.svg"} alt="" className="icons-monsters" />
                                            <p>{inputs.valuePA}</p>
                                        </li>

                                        <li>
                                            <img src={"/images/icons/PM.svg"} alt="" className="icons-monsters" />
                                            <p>{inputs.valuePM}</p>
                                        </li>

                                        <li>
                                            <img src={"/images/icons/XP.svg"} alt="" className="icons-monsters" />
                                            <p>{inputs.valueExperience}</p>
                                        </li>
                                    </ul>

                                    <ul>
                                        <li>
                                            <img src={"/images/icons/Init.svg"} alt="" className="icons-monsters" />
                                            <p>{inputs.valueInitiative}</p>
                                        </li>

                                        <li>
                                            <img src={"/images/icons/earth.svg"} alt="" className="icons-monsters" />
                                            <p>{inputs.valueStrength}</p>
                                        </li>

                                        <li>
                                            <img src={"/images/icons/fire.svg"} alt="" className="icons-monsters" />
                                            <p>{inputs.valueIntelligence}</p>
                                        </li>
                                    </ul>

                                    <ul>
                                        <li>
                                            <img src={"/images/icons/water.svg"} alt="" className="icons-monsters" />
                                            <p>{inputs.valueChance}</p>
                                        </li>

                                        <li>
                                            <img src={"/images/icons/Air.svg"} alt="" className="icons-monsters" />
                                            <p>{inputs.valueAgility}</p>
                                        </li>
                                    </ul>
                                </>
                                )}

                                    
                                </div>

                                <div className='statsMonster'>
                                    <h4>Esquive</h4>

                                    <ul>
                                        <li>
                                            <img src={"/images/icons/PA.svg"} alt="" className="icons-monsters" />
                                            <p>{inputs.valueDodgePA}%</p>
                                        </li>

                                        <li>
                                            <img src={"/images/icons/PM.svg"} alt="" className="icons-monsters" />
                                            <p>{inputs.valueDodgePM}%</p>
                                        </li>
                                    </ul>
                                </div>

                                <div className='statsMonster'>
                                    <h4>Résistances</h4>

                                {widthScreen > 767 ? (
                                <>
                                    <ul>
                                        <li>
                                            <img src={"/images/icons/neutral.svg"} alt="" className="icons-monsters" />
                                            <p>{inputs.valueResiNeutral}%</p>
                                        </li>

                                        <li>
                                            <img src={"/images/icons/earth.svg"} alt="" className="icons-monsters" />
                                            <p>{inputs.valueResiEarth}%</p>
                                        </li>

                                        <li>
                                            <img src={"/images/icons/fire.svg"} alt="" className="icons-monsters" />
                                            <p>{inputs.valueResiFire}%</p>
                                        </li>
                                        
                                        <li>
                                            <img src={"/images/icons/water.svg"} alt="" className="icons-monsters" />
                                            <p>{inputs.valueResiWater}%</p>
                                        </li>

                                        <li>
                                            <img src={"/images/icons/Air.svg"} alt="" className="icons-monsters" />
                                            <p>{inputs.valueResiWind}%</p>
                                        </li>
                                    </ul>
                                </>
                                ) : (
                                <>
                                    <ul>
                                        <li>
                                            <img src={"/images/icons/neutral.svg"} alt="" className="icons-monsters" />
                                            <p>{inputs.valueResiNeutral}%</p>
                                        </li>

                                        <li>
                                            <img src={"/images/icons/earth.svg"} alt="" className="icons-monsters" />
                                            <p>{inputs.valueResiEarth}%</p>
                                        </li>

                                        <li>
                                            <img src={"/images/icons/fire.svg"} alt="" className="icons-monsters" />
                                            <p>{inputs.valueResiFire}%</p>
                                        </li>
                                    </ul>

                                    <ul>
                                        <li>
                                            <img src={"/images/icons/water.svg"} alt="" className="icons-monsters" />
                                            <p>{inputs.valueResiWater}%</p>
                                        </li>

                                        <li>
                                            <img src={"/images/icons/Air.svg"} alt="" className="icons-monsters" />
                                            <p>{inputs.valueResiWind}%</p>
                                        </li>
                                    </ul>
                                </>
                                )}
                                </div>

                                <div className='statsMonster'>
                                    <div className='headHideInfos'>
                                        <h4>Sorts</h4>
                                        <button onClick={handleToggle} className="btnShowMonster"> 
                                            {infosToggle ? <FontAwesomeIcon icon={faChevronUp}/> : <FontAwesomeIcon icon={faChevronDown}/>}
                                        </button>
                                    </div>

                                    {infosToggle && (
                                        <p>{inputs.valueSpells}</p>
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
                                        <p>{inputs.valueZones}</p>
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
                                        <p>{inputs.valueDrops}</p>
                                    )}
                                </div>
                            </div>
                        </div>
                    </article>
                </div>
            </section>
        </section>
    )
}

export default AddMonsters;