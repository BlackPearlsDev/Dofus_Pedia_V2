import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import Error from "../Components/Error";

/********** USERS **********/
import { checkToken } from "../services/API/user";
import { login, logout } from '../store/slices/user.slice';
import { loadUsers } from "../store/slices/user.slice";
import { getAll } from "../services/API/user";

/********** CLASSES **********/
import { getAllClasses } from "../services/API/classes";
import { loadClasses } from "../store/slices/classes.slice";

/********** MONSTERS **********/
import { getAllMonsters } from "../services/API/monsters";
import { loadMonsters } from "../store/slices/monsters.slice";

/********** ECOSYSTEM **********/
import { getAllEcosystem } from "../services/API/ecosystem";
import { loadEcosystem } from "../store/slices/ecosystem.slice";

/********** RACE **********/
import { getAllRaces } from "../services/API/race";
import { loadRace } from "../store/slices/race.slice";

/********** SPELLS **********/
import { getAllSpells } from "../services/API/spells";
import { loadSpells } from "../store/slices/spells.slice";

/********** POST **********/
import { getAllPosts } from "../services/API/post";
import { loadPosts } from "../store/slices/post.slice";

/********** CATEGORY **********/
import { getAllCategories } from "../services/API/categories";
import { loadCategories } from "../store/slices/categories.slice";

function HOC({ child, isAuthRequired, isAdminRequired }) {
    const navigate = useNavigate();

    const [fetchError, setFetchError] = useState(false);
    
    const dispatch = useDispatch();
    const { listUsers, userInfos, isLogged, listClasses, listMonsters, listEcosystem, listRace, listSpell, listPost, listCategories } = useSelector((state) => ({...state.user, ...state.users, ...state.classes, ...state.monsters, ...state.ecosystem, ...state.race, ...state.spell, ...state.post, ...state.categories}));

    useEffect(()=>{
        async function checkAuth(){
            const TOKEN = localStorage.getItem("auth_token");
            if(isLogged && !TOKEN) {
                dispatch(logout());
                navigate("/");
            }

            if(!isLogged) {
                if(isAuthRequired && !TOKEN) {
                    dispatch(logout());
                    navigate("/");
                }
                
                if(TOKEN !== null) {
                    const res = await checkToken(TOKEN);
                    if(res.status === 200){
                        dispatch(login(res.data.result));
                    }
                }
            }
        }
        checkAuth();
        // eslint-disable-next-line
    }, [child]);

    // block access to admin page if user is not admin
    useEffect(() => {
        if(isAdminRequired && userInfos?.role_id !== 2) {
            navigate("/");
        }
        // eslint-disable-next-line
    }, []);

    useEffect(() => {
        if (!listUsers.length) {
            async function fetchData() {
                const res = await getAll();
                if (res.code) {
                    setFetchError(true);
                    return;
                }
                dispatch(loadUsers(res.data.result));
            }
            fetchData();
        }
        // eslint-disable-next-line
    }, []);

    useEffect(() => {
        if (!listClasses.length) {
            async function fetchData() {
                const res = await getAllClasses();
                if (res.code) {
                    setFetchError(true);
                    return;
                }
                dispatch(loadClasses(res.data.result));
            }
            fetchData();
        }
        // eslint-disable-next-line
    }, []);

    useEffect(() => {
        if (!listMonsters.length) {
            async function fetchData() {
                const res = await getAllMonsters();
                if (res.code) {
                    setFetchError(true);
                    return;
                }
                dispatch(loadMonsters(res.data.result));
            }
            fetchData();
        }
        // eslint-disable-next-line
    }, [ listMonsters ]);

    useEffect(() => {
        if (!listEcosystem.length) {
            async function fetchData() {
                const res = await getAllEcosystem();
                if (res.code) {
                    setFetchError(true);
                    return;
                }
                dispatch(loadEcosystem(res.data.result));
            }
            fetchData();
        }
        // eslint-disable-next-line
    }, []);
    
    useEffect(() => {
        if (!listRace.length) {
            async function fetchData() {
                const res = await getAllRaces();
                if (res.code) {
                    setFetchError(true);
                    return;
                }
                dispatch(loadRace(res.data.result));
            }
            fetchData();
        }
        // eslint-disable-next-line
    }, []);

    useEffect(() => {
        if (!listSpell.length) {
            async function fetchData() {
                const res = await getAllSpells();
                if (res.code) {
                    setFetchError(true);
                    return;
                }
                dispatch(loadSpells(res.data.result));
            }
            fetchData();
        }
        // eslint-disable-next-line
    }, []);

    useEffect(() => {
        if (!listPost.length) {
            async function fetchData() {
                const res = await getAllPosts();
                if (res.code) {
                    setFetchError(true);
                    return;
                }
                dispatch(loadPosts(res.data.result));
            }
            fetchData();
        }
        // eslint-disable-next-line
    }, []);

    useEffect(() => {
        if (!listCategories.length) {
            async function fetchData() {
                const res = await getAllCategories();
                if (res.code) {
                    setFetchError(true);
                    return;
                }
                dispatch(loadCategories(res.data.result));
            }
            fetchData();
        }
        // eslint-disable-next-line
    }, []);

    const Child = child;

    if (fetchError) {
        return <Error />;
    }

    return (
        <>
            {!listClasses.length ? (
                 <p className="loadingData">Chargement des données ...</p>
             ) : (
                    <Child userInfos={userInfos} listUsers={listUsers} classes={listClasses} monsters={listMonsters} ecosystem={listEcosystem} race={listRace} spells={listSpell} posts={listPost} categories={listCategories}/>
            )}
        </>
    );
}

export default HOC;