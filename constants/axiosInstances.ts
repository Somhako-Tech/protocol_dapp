import React from "react";
import axios from "axios";

const apiEndpoint = `/api`;

const axiosAPIInstance = axios.create({
    baseURL: apiEndpoint,
    timeout: 5000,
    headers: {
        // 'Authorization': "JWT " + access_token,
        "Content-Type": "application/json",
        accept: "application/json",
    },
});
const axiosContractInstance = axios.create({
    baseURL: apiEndpoint,
    timeout: 60000,
    headers: {
        // 'Authorization': "JWT " + access_token,
        "Content-Type": "application/json",
        accept: "application/json",
    },
});

export { axiosContractInstance, axiosAPIInstance };
