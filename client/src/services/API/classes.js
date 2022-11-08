import axios from 'axios';

export const getAllClasses = async () => {
    try {
        return await axios.get("/api/v1/classes/all");
    } catch (error) {
        return error.response;
    }
}