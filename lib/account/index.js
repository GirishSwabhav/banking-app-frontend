import axiosInstance from "../axios";

export const addAccount = async (body) => {
    try {
        const res = await axiosInstance.post('/account', body);
        return res;
    } catch (error) {
        throw error;
    }
};

export const getAccounts = async (params) => {
    try {
        const res = await axiosInstance.get('/account', {
            params
        });
        return res;
    } catch (error) {
        throw error;
    }
};

export const getUserAccounts = async (params) => {
    try {
        const userId = localStorage.getItem('id')
        const res = await axiosInstance.get(`/user/${userId}/account`, {
            params
        });
        return res;
    } catch (error) {
        throw error;
    }
};