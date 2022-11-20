import axios from 'axios';

export const getAllPosts = async () => {
    try {
        return await axios.get("/api/v1/post/all");
    } catch (error) {
        return error.response;
    }
}

export const addPost = async (post) => {
    try {
        return await axios.post("/api/v1/post/create", post);
    } catch (error) {
        return error.response;
    }
}

export const deletePost = async (id) => {
    try {
        return await axios.delete(`/api/v1/post/delete/${id}`);
    } catch (error) {
        return error.response;
    }
}

export const updatePost = async (id, post) => {
    try {
        return await axios.put(`/api/v1/post/update/${id}`, post);
    } catch (error) {
        return error.response;
    }
}

export const getPostById = async (id) => {
    try {
        return await axios.get(`/api/v1/post/${id}`);
    } catch (error) {
        return error.response;
    }
}