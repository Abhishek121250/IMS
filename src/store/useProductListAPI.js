import { useMutation } from "@tanstack/react-query";

// import commonClient from "../services/commonClient";
import axios from "axios";
import { useAppState } from "./useAppState";

const useProductListAPI = () => {
    const { setLoading } = useAppState();
    return useMutation({
        mutationFn: () => {
            console.log("im in API call");
            setLoading(true);
            return axios.get("http://192.168.10.83/api/products");
        },
        onSuccess: (res) => {
            if (!res.data) {
                throw new Error(res.message);
            }
        },
        // eslint-disable-next-line no-unused-vars
        onError: (error) => {
            console.log(error);
        },
        onSettled: () => {
            setLoading(false);
        },
    });
};

export default useProductListAPI;
