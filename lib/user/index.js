import axiosInstance from "../axios";

export const login = async (body) => {
    try {
        const res = await axiosInstance.post('/login', body, {
            headers: {
                'Content-Type': 'application/json'
            }
        });
        return res;
    } catch (error) {
        throw error;
    }
};