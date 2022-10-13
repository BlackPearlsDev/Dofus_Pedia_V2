import axios from 'axios';

export const getAllEcosystem = async () => {
    try {
        return await axios.get("/api/v1/ecosystem/all");
    } catch (error) {
        console.log(error);
        return error.response;
    }
}