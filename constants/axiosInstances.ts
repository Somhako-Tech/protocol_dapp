import React from "react";
import axios from "axios";

const apiEndpoint = "/api";

const axiosAPIInstance = axios.create({
    baseURL: apiEndpoint,
    timeout: 5000,
    headers: {
        // 'Authorization': "JWT " + access_token,
        "Content-Type": "application/json",
        accept: "application/json",
    },
});

const getReferralCount = async (userId: number) => {
    const { data } = await axiosAPIInstance.get(`/referrals?user_id=${userId}`);
    return data;
};

const getProfile = async (handle: string) => {
    const { data } = await axiosAPIInstance.get(`/profile/${handle}`);
    return data;
};

const getProfileById = async (id: number) => {
    const { data } = await axiosAPIInstance.get(`/profile/id/${id}`);
    return data;
};

const getUserById = async (id: number) => {
    const { data } = await axiosAPIInstance.get(`/user/${id}`);
    return data;
};

export {
    axiosAPIInstance,
    getReferralCount,
    getProfile,
    getProfileById,
    getUserById,
};
