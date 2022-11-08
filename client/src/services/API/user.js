import axios from 'axios';

export const checkToken = async (token) => {
    try {
        return await axios.get("/api/v1/user/checkToken", { headers : {"x-access-token": token}});
    } catch (error) {
        return error.response;
    }
}

export const register = async (datas) => {
    try {
        return await axios.post("/api/v1/user/register", datas);
    } catch (error) {
        return error.response;
    }
}
export const login = async (datas) => {
    try {
        return await axios.post("/api/v1/user/login", datas);
    } catch (error) {
        return error.response;
    }
}

export const update = async (uuid, datas) => {
    try {
        return await axios.patch(`/api/v1/user/${uuid}`, datas);
    } catch (error) {
        return error.response;
    }
}

export const getAll = async () => {
    try {
        return await axios.get("/api/v1/user/all");
    } catch (error) {
        return error.response;
    }
}

export const remove = async (uuid) => {
    try {
        return await axios.delete(`/api/v1/user/${uuid}`);
    } catch (error) {
        return error.response;
    }
}