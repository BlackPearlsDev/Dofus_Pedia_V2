import axios from 'axios';

export const getAllSpells = async () => {
    try {
        return await axios.get("/api/v1/spells/all");
    } catch (error) {
        return error.response;
    }
}