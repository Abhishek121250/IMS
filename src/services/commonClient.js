// import { getStorage } from '@/utils/common';
import axios from "axios";

import { getStorage } from "../utils/common";
import BaseAPIClient from "./baseClient";

const axiosInstance = axios.create({
    baseURL: process.env.REACT_APP_BASE_DATA_URL,
});

const storage = getStorage();

axiosInstance.defaults.headers["Content-Type"] = "application/json";

axiosInstance.interceptors.request.use(
    (config) => {
        config.headers = config.headers || {};

        const wsoToken = storage.getItem("wsoToken");
        const token = storage.getItem("token");

        if (wsoToken) {
            config.headers["Authorization"] = `Bearer ${wsoToken}`;
        }

        if (token) {
            config.headers["token"] = `${token}`;
        }

        return config;
    },
    (error) => {
        return Promise.reject(error);
    }
);

class COMMONClient extends BaseAPIClient {
    constructor(axiosInstance) {
        super(axiosInstance);
    }
}

const commonClient = new COMMONClient(axiosInstance);
export default commonClient;
