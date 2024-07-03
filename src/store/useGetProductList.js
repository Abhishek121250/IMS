import { useQuery } from "@tanstack/react-query";
// import commonClient from "../services/commonClient";
// import { URL } from "../utils/constants";
import axios from "axios";

const useGetProductList = () =>
    // config = {
    //     grant_type: "client_credentials",
    //     scope: Date.now(),
    // }
    {
        return useQuery({
            queryKey: ["GET_PRODUCT_LIST"],
            queryFn: () => axios.get("http://192.168.10.83/api/products"),
        });
    };

export default useGetProductList;
