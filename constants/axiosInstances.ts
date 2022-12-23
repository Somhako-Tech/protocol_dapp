import React from "react";
import axios from "axios";

const contractEndpoint = "http://localhost:3030/";

const axiosContractInstance = axios.create({
    baseURL: contractEndpoint,
    timeout: 5000,
    headers: {
        // 'Authorization': "JWT " + access_token,
        "Content-Type": "application/json",
        accept: "application/json",
    },
});

export { axiosContractInstance };
