import { useDispatch, useSelector } from 'react-redux';
import { setToggle } from '../../../../store/slices/menu.slice';

function Dashboard({userInfos}) {

    const dispatch = useDispatch();
    const { isToggle } = useSelector((state) => ({...state.menu}));

    return (
        <main>
            <div className={isToggle ? "overlay" : undefined} onClick={() => dispatch(setToggle(!isToggle))}></div>

            <section className="mainContent">
                <h2 className='h2MyInfos'>Mes informations</h2>
                <h3 className='txtMyAccount'>Mon compte</h3>
                <div className='userDashboardContent'>
                    <div className='userImgDashboard'>
                        <img src="/images/avatars/solomonk.png" alt="Icone du profil" />
                    </div>

                    <div className='userDashboardInfos'>
                        <p><span className='txtBrown'>Nom:</span> {userInfos?.username === null ? `bug` : `${userInfos?.username}`}</p>
                        <p><span className='txtBrown'>Email:</span> {userInfos?.email === null ? `bug` : `${userInfos?.email}`}</p>
                        <p><span className='txtBrown'>Créé le:</span> {userInfos?.last_connection === null ? `bug` : (userInfos?.last_connection)?.slice(0, 10)}</p>
                        <p><span className='txtBrown'>Rôle:</span> {userInfos?.role_id === 1 ? "Utilisateur" : "Admin"}</p>
                    </div>

                </div>
            </section>
        </main>
    )
}

export default Dashboard;