import axios from 'axios';

export const getAllMonsters = async () => {
    try {
        return await axios.get("/api/v1/monsters/all");
    } catch (error) {
        console.log(error);
        return error.response;
    }
}