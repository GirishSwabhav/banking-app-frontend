import axiosInstance from "../axios";

export const addBank = async (body) => {
    try {
        const res = await axiosInstance.post('/bank', body);
        return res;
    } catch (error) {
        throw error;
    }
};

export const getBanks = async (params) => {
    try {
        const res = await axiosInstance.get('/bank', {
            params
        });
        return res;
    } catch (error) {
        throw error;
    }
};