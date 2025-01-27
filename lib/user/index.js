import axiosInstance from "../axios";

export const login = async (body) => {
    try {
        const res = await axiosInstance.post('/login', body);
        return res;
    } catch (error) {
        throw error;
    }
};

export const logout = async () => {
    try {
        const res = await axiosInstance.post('/logout');
        return res;
    } catch (error) {
        throw error;
    }
};

export const addUser = async (body) => {
    try {
        const res = await axiosInstance.post('/user', body);
        return res;
    } catch (error) {
        throw error;
    }
};

export const getUsers = async (params) => {
    try {
        const res = await axiosInstance.get('/user', {
            params
        });
        return res;
    } catch (error) {
        throw error;
    }
};