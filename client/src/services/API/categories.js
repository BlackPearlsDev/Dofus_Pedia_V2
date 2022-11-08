import axios from 'axios';

export const getAllCategories = async () => {
    try {
        return await axios.get("/api/v1/categories/all");
    } catch (error) {
        return error.response;
    }
}

export const addCategory = async (data) => {
    try {
        return await axios.post("/api/v1/categories/create", data);
    } catch (error) {
        return error.response;
    }
}