import axios from 'axios';

export const getAllSpells = async () => {
    try {
        return await axios.get("/api/v1/spells/all");
    } catch (error) {
        console.log(error);
        return error.response;
    }
}