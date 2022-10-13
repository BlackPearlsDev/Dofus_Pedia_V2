import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { logout } from "../../../store/slices/user.slice";

function Logout() {
    const navigate = useNavigate();
    const dispatch = useDispatch();

    useEffect(() => {
        localStorage.removeItem("auth_token");
        dispatch(logout());
        navigate("/");
    }, [dispatch, navigate]);

    return null;
}

export default Logout;