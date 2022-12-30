import React from "react";
import axios from "axios";

const contractEndpoint = "http://localhost:3030/";

const axiosAPIInstance = axios.create({
    baseURL: contractEndpoint,
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

export { axiosAPIInstance, getReferralCount, getProfile };
