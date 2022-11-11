import { Routes, Route } from "react-router-dom";
import HOC from "../Helpers/HOC";

// Import Pages
import Home from "../Components/Pages/Home/Index";
// Import Classes
import Classes from "../Components/Pages/Classes/Index";
import Feca from "../Components/Pages/Classes/Feca/Index";
import Osamodas from "../Components/Pages/Classes/Osamodas/Index";
import Enutrof from "../Components/Pages/Classes/Enutrof/Index";
import Sram from "../Components/Pages/Classes/Sram/Index";
import Xelor from "../Components/Pages/Classes/Xelor/Index";
import Ecaflip from "../Components/Pages/Classes/Ecaflip/Index";
import Eniripsa from "../Components/Pages/Classes/Eniripsa/Index";
import Iop from "../Components/Pages/Classes/Iop/Index";
import Cra from "../Components/Pages/Classes/Cra/Index";
import Sadida from "../Components/Pages/Classes/Sadida/Index";
import Sacrieur from "../Components/Pages/Classes/Sacrieur/Index";
import Pandawa from "../Components/Pages/Classes/Pandawa/Index";
// Import Pages next
import Bestiary from "../Components/Pages/Bestiary/Index";
import Map from "../Components/Pages/Map/Index";
import Login from "../Components/Entry/Login/Index";
import Register from "../Components/Entry/Register/Index";
import Dashboard from "../Components/Pages/User/Dashboard/Index";
import Logout from "../Components/Entry/Logout/Index";
import LearnDofus from "../Components/Pages/LearnDofus/Index";
import NotFound from "../Components/Pages/NotFound/Index";
// Import Pages Admin
import Admin from "../Components/Admin/Index";
import CreatePosts from "../Components/Admin/CreatePosts/Index";
import DeletePosts from "../Components/Admin/DeletePosts/Index";
import AddMonsters from "../Components/Admin/AddMonsters/Index";
import DeleteMonsters from "../Components/Admin/DeleteMonsters/Index";
import CreateCategories from "../Components/Admin/CreateCategories/Index";

function Router() {
    return (
        <Routes>
            <Route index path="/" element={ <HOC child={Home}/> } />
            
            <Route path="classes" element={ <HOC child={Classes}/> } >
                <Route path="Feca" element={ <HOC child={Feca}/> } />
                <Route path="Osamodas" element={ <HOC child={Osamodas}/> } />
                <Route path="Enutrof" element={ <HOC child={Enutrof}/> } />
                <Route path="Sram" element={ <HOC child={Sram}/> } />
                <Route path="Xelor" element={ <HOC child={Xelor}/> } />
                <Route path="Ecaflip" element={ <HOC child={Ecaflip}/> } />
                <Route path="Eniripsa" element={ <HOC child={Eniripsa}/> } />
                <Route path="Iop" element={ <HOC child={Iop}/> } />
                <Route path="Cra" element={ <HOC child={Cra}/> } />
                <Route path="Sadida" element={ <HOC child={Sadida}/> } />
                <Route path="Sacrieur" element={ <HOC child={Sacrieur}/> } />
                <Route path="Pandawa" element={ <HOC child={Pandawa}/> } />
            </Route>

            <Route path="bestiary" element={ <HOC child={Bestiary}/> } />
            <Route path="map" element={ <HOC child={Map}/> } />
            <Route path="login" element={ <HOC child={Login}/> } />
            <Route path="register" element={ <HOC child={Register}/> } />
            <Route path="user/:uuid" element={<HOC child={Dashboard} isAuthRequired={true} />} />
            <Route path="logout" element={ <HOC child={Logout} isAuthRequired={true} /> } />
            <Route path="admin" element={ <HOC child={Admin} isAuthRequired={true} isAdminRequired={true} /> } >
                <Route path="createPosts" element={ <HOC child={CreatePosts} isAuthRequired={true} /> } />
                <Route path="deletePosts" element={ <HOC child={DeletePosts} isAuthRequired={true} /> } />
                <Route path="addMonsters" element={ <HOC child={AddMonsters} isAuthRequired={true} /> } />
                <Route path="deleteMonsters" element={ <HOC child={DeleteMonsters} isAuthRequired={true} /> } />
                <Route path="createCategories" element={ <HOC child={CreateCategories} isAuthRequired={true} /> } />
            </Route>

            <Route path="learnDofus" element={ <HOC child={LearnDofus}/> } />
            <Route path="*" element={<NotFound />}/>
        </Routes>
    );
}

export default Router;