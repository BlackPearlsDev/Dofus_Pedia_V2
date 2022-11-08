import axios from 'axios';

export const getAllEcosystem = async () => {
    try {
        return await axios.get("/api/v1/ecosystem/all");
    } catch (error) {
        return error.response;
    }
}