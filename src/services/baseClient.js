import { toast } from "react-toastify";

class BaseAPIClient {
    constructor(axiosInstance) {
        this.axiosInstance = axiosInstance;
    }

    get(endpoint, payload) {
        return this.axiosInstance
            .get(endpoint, payload)
            .then((res) => res.data)
            .catch((err) => {
                if (
                    err?.response?.data?.status === 401 &&
                    err?.response?.data?.code === "900902"
                ) {
                    toast.error(err?.response?.data?.message);
                    setTimeout(() => {
                        window.sessionStorage.clear();
                        window.localStorage.clear();
                        window.location.href = "/";
                    }, 1500);
                }
            });
    }

    // config refers to the headers
    post(endpoint, payload, config) {
        return this.axiosInstance
            .post(endpoint, payload, config)
            .then((res) => res.data)
            .catch((err) => {
                if (
                    err?.response?.data?.status === 401 &&
                    err?.response?.data?.code === "900902"
                ) {
                    toast.error(err?.response?.data?.message);
                    setTimeout(() => {
                        window.sessionStorage.clear();
                        window.localStorage.clear();
                        window.location.href = "/";
                    }, 1500);
                }
            });
    }

    put(endpoint, payload, config) {
        return this.axiosInstance
            .put(endpoint, payload, config)
            .then((res) => res.data)
            .catch((err) => {
                if (
                    err?.response?.data?.status === 401 &&
                    err?.response?.data?.code === "900902"
                ) {
                    toast.error(err?.response?.data?.message);
                    setTimeout(() => {
                        window.sessionStorage.clear();
                        window.localStorage.clear();
                        window.location.href = "/";
                    }, 1500);
                }
            });
    }

    delete(endpoint, payload) {
        return this.axiosInstance
            .delete(endpoint, payload)
            .then((res) => res.data)
            .catch((err) => {
                if (
                    err?.response?.data?.status === 401 &&
                    err?.response?.data?.code === "900902"
                ) {
                    toast.error(err?.response?.data?.message);
                    setTimeout(() => {
                        window.sessionStorage.clear();
                        window.localStorage.clear();
                        window.location.href = "/";
                    }, 1500);
                }
            });
    }
}

export default BaseAPIClient;
