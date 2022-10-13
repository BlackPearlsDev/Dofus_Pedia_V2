import { useState, useEffect } from 'react';

function Eniripsa({classes}) {

    const [widthScreen, setWidthScreen] = useState(window.innerWidth);

    useEffect(() => {
        const handleResize = () => setWidthScreen(window.innerWidth);
        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    });

    return (
        <section className='classeOutlet'>
            <div className='classeName'>
                <h3>{classes[6].classe_name}</h3>
                <h4>{classes[6].alias}</h4>
            </div>

            <h4 className='txtClasseDesc'>Description</h4>
            <p className='classeDesc'>{classes[6].description}</p>

            <h4 className='classesCaraH4'>Caractéristiques</h4>

            <table className='classeTableCara'>
                <thead>
                    <tr>
                        <th></th>
                        {widthScreen > 374 ? (
                            <>
                                <th>1 pour 1</th>
                            </>
                        ) : (
                            <>
                                <th>1/1</th>
                            </>
                        )}
                        {widthScreen > 374 ? (
                            <>
                                <th>2 pour 1</th>
                            </>
                        ) : (
                            <>
                                <th>2/1</th>
                            </>
                        )}
                        {widthScreen > 374 ? (
                            <>
                                <th>3 pour 1</th>
                            </>
                        ) : (
                            <>
                                <th>3/1</th>
                            </>
                        )}
                        {widthScreen > 374 ? (
                            <>
                                <th>4 pour 1</th>
                            </>
                        ) : (
                            <>
                                <th>4/1</th>
                            </>
                        )}
                        {widthScreen > 374 ? (
                            <>
                                <th>5 pour 1</th>
                            </>
                        ) : (
                            <>
                                <th>5/1</th>
                            </>
                        )}
                    </tr>
                </thead>
                <tbody>
                    {widthScreen > 374 ? (
                        <>
                            <tr>
                                <td className='startRowIcons'>Vitalité <img src={"/images/icons/Vita.svg"} alt="Icone de vitalité" className='icons-monsters'/></td>
                                <td>{classes[6].vitality}</td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                            </tr>
                        </>
                    ) : (
                        <>
                            <tr>
                                <td className='startRowIcons'>Vitalité</td>
                                <td>{classes[6].vitality}</td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                            </tr>
                        </>
                    )}
                    {widthScreen > 374 ? (
                        <>
                            <tr>
                                <td className='startRowIcons'>Sagesse <img src={"/images/icons/Wisdom.svg"} alt="Icone de sagesse" className='icons-monsters'/></td>
                                <td></td>
                                <td></td>
                                <td>{classes[6].wisdom}</td>
                                <td></td>
                                <td></td>
                            </tr>
                        </>
                    ) : (
                        <>
                            <tr>
                                <td className='startRowIcons'>Sagesse</td>
                                <td></td>
                                <td></td>
                                <td>{classes[6].wisdom}</td>
                                <td></td>
                                <td></td>
                            </tr>
                        </>
                    )}
                    {widthScreen > 374 ? (
                        <>
                            <tr>
                                <td className='startRowIcons'>Force <img src={"/images/icons/EarthBonus.svg"} alt="Icone de force" className='icons-monsters'/></td>
                                <td></td>
                                <td>{classes[6].strength}</td>
                                <td>{classes[6].strength + 50}</td>
                                <td>{classes[6].strength + 150}</td>
                                <td>{classes[6].strength + 250}</td>
                            </tr>
                        </>
                    ) : (
                        <>
                            <tr>
                                <td className='startRowIcons'>Force</td>
                                <td></td>
                                <td>{classes[6].strength}</td>
                                <td>{classes[6].strength + 50}</td>
                                <td>{classes[6].strength + 150}</td>
                                <td>{classes[6].strength + 250}</td>
                            </tr>
                        </>
                    )}
                    {widthScreen > 374 ? (
                        <>
                            <tr>
                                <td className='startRowIcons'>Intelligence <img src={"/images/icons/FireBonus.svg"} alt="Icone d'intelligence" className='icons-monsters'/></td>
                                <td>{classes[6].intelligence - 100}</td>
                                <td>{classes[6].intelligence}</td>
                                <td>{classes[6].intelligence + 100}</td>
                                <td>{classes[6].intelligence + 200}</td>
                                <td>{classes[6].intelligence + 300}</td>
                            </tr>
                        </>
                    ) : (
                        <>
                            <tr>
                                <td className='startRowIcons'>Intelligence</td>
                                <td>{classes[6].intelligence - 100}</td>
                                <td>{classes[6].intelligence}</td>
                                <td>{classes[6].intelligence + 100}</td>
                                <td>{classes[6].intelligence + 200}</td>
                                <td>{classes[6].intelligence + 300}</td>
                            </tr>
                        </>
                    )}
                    {widthScreen > 374 ? (
                        <>
                            <tr>
                                <td className='startRowIcons'>Chance <img src={"/images/icons/WaterBonus.svg"} alt="Icone de chance" className='icons-monsters'/></td>
                                <td>{classes[6].chance - 20}</td>
                                <td>{classes[6].chance}</td>
                                <td>{classes[6].chance + 20}</td>
                                <td>{classes[6].chance + 40}</td>
                                <td>{classes[6].chance + 60}</td>
                            </tr>
                        </>
                    ) : (
                        <>
                            <tr>
                                <td className='startRowIcons'>Chance</td>
                                <td>{classes[6].chance - 20}</td>
                                <td>{classes[6].chance}</td>
                                <td>{classes[6].chance + 20}</td>
                                <td>{classes[6].chance + 40}</td>
                                <td>{classes[6].chance + 60}</td>
                            </tr>
                        </>
                    )}
                    {widthScreen > 374 ? (
                        <>
                            <tr>
                                <td className='startRowIcons'>Agilité <img src={"/images/icons/AirBonus.svg"} alt="Icone d'agilité" className='icons-monsters'/></td>
                                <td>{classes[6].agility - 20}</td>
                                <td>{classes[6].agility}</td>
                                <td>{classes[6].agility + 20}</td>
                                <td>{classes[6].agility + 40}</td>
                                <td>{classes[6].agility + 60}</td>
                            </tr>
                        </>
                    ) : (
                        <>
                            <tr>
                                <td className='startRowIcons'>Agilité</td>
                                <td>{classes[6].agility - 20}</td>
                                <td>{classes[6].agility}</td>
                                <td>{classes[6].agility + 20}</td>
                                <td>{classes[6].agility + 40}</td>
                                <td>{classes[6].agility + 60}</td>
                            </tr>
                        </>
                    )}
                </tbody>
            </table>

            <h4 className='classesCaraH4'>Armes de prédilection</h4>
            <table className='classeTableWeapons'>
                <thead>
                    {widthScreen > 374 ? (
                        <>
                            <tr>
                                <th><img src={"/images/weapons/bow.svg"} alt="Icone de l'arc" className='icons-weapons'/></th>
                                <th><img src={"/images/weapons/wand-green.svg"} alt="Icone de la baguette" className='icons-weapons'/></th>
                                <th><img src={"/images/weapons/staff-orange.svg"} alt="Icone du baton" className='icons-weapons'/></th>
                                <th><img src={"/images/weapons/dagger.svg"} alt="Icone des dagues" className='icons-weapons'/></th>
                                <th><img src={"/images/weapons/sword.svg"} alt="Icone de l'epee" className='icons-weapons'/></th>
                                <th><img src={"/images/weapons/axe.svg"} alt="Icone de la hache" className='icons-weapons'/></th>
                                <th><img src={"/images/weapons/hammer.svg"} alt="Icone du marteau" className='icons-weapons'/></th>
                                <th><img src={"/images/weapons/shovel.svg"} alt="Icone de la pelle" className='icons-weapons'/></th>
                            </tr>
                        </>
                    ) : (
                        <>
                            <tr>
                                <th><img src={"/images/weapons/bow.svg"} alt="Icone de l'arc" className='icons-weapons'/></th>
                                <th><img src={"/images/weapons/wand-green.svg"} alt="Icone de la baguette" className='icons-weapons'/></th>
                                <th><img src={"/images/weapons/staff-orange.svg"} alt="Icone du baton" className='icons-weapons'/></th>
                                <th><img src={"/images/weapons/dagger.svg"} alt="Icone des dagues" className='icons-weapons'/></th>
                            </tr>
                            <tr>
                                <th><img src={"/images/weapons/sword.svg"} alt="Icone de l'epee" className='icons-weapons'/></th>
                                <th><img src={"/images/weapons/axe.svg"} alt="Icone de la hache" className='icons-weapons'/></th>
                                <th><img src={"/images/weapons/hammer.svg"} alt="Icone du marteau" className='icons-weapons'/></th>
                                <th><img src={"/images/weapons/shovel.svg"} alt="Icone de la pelle" className='icons-weapons'/></th>
                            </tr>
                        </>
                    )}
                </thead>
                <tbody>
                    {widthScreen > 374 ? (
                        <>
                            <tr>
                                <td>{classes[6].bow}%</td>
                                <td>{classes[6].wand}%</td>
                                <td>{classes[6].staff}%</td>
                                <td>{classes[6].dagger}%</td>
                                <td>{classes[6].sword}%</td>
                                <td>{classes[6].axe}%</td>
                                <td>{classes[6].hammer}%</td>
                                <td>{classes[6].shovel}%</td>
                            </tr>
                        </>
                    ) : (
                        <>
                            <tr>
                                <td>{classes[6].bow}%</td>
                                <td>{classes[6].wand}%</td>
                                <td>{classes[6].staff}%</td>
                                <td>{classes[6].dagger}%</td>
                            </tr>
                            <tr>
                                <td>{classes[6].sword}%</td>
                                <td>{classes[6].axe}%</td>
                                <td>{classes[6].hammer}%</td>
                                <td>{classes[6].shovel}%</td>
                            </tr>
                        </>
                    )}
                </tbody>
            </table>
        </section>
    )
}

export default Eniripsa;