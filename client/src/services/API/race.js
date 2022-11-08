import axios from 'axios';

export const getAllRaces = async () => {
    try {
        return await axios.get("/api/v1/race/all");
    } catch (error) {
        return error.response;
    }
}