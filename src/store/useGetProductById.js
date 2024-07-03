import { useQuery } from "@tanstack/react-query";
// import commonClient from "../services/commonClient";
// import { URL } from "../utils/constants";
import axios from "axios";

const useGetProductById = ({ productId }) =>
    // config = {
    //     grant_type: "client_credentials",
    //     scope: Date.now(),
    // }
    {
        console.log(productId, "inside call");
        return useQuery({
            queryKey: ["GET_PRODUCT_BY_ID"],
            queryFn: () =>
                axios.get(`http://192.168.10.83/api/products/${productId}`),
        });
    };

export default useGetProductById;
