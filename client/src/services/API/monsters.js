import axios from 'axios';

export const getAllMonsters = async () => {
    try {
        return await axios.get("/api/v1/monsters/all");
    } catch (error) {
        console.log(error);
        return error.response;
    }
}

export const addMonster = async (monster) => {
    try {
        return await axios.post("/api/v1/monsters/add", monster);
    } catch (error) {
        console.log(error);
        return error.response;
    }
}

export const addImg = async (img) => {
    try {
        return await axios.post("/api/v1/monsters/addImg", img);
    } catch (error) {
        return error;
    }
}

export const deleteMonster = async (monsterId) => {
    try {
        return await axios.delete(`/api/v1/monsters/delete/${monsterId}`);
    } catch (error) {
        console.log(error);
        return error.response;
    }
}