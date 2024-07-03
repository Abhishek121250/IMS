import { useMutation } from "@tanstack/react-query";
import { URL } from "../utils/constants";
import commonClient from "../services/commonClient";
import { useAppState } from "./useAppState";

const useCreateProduct = () => {
  const { setUser } = useAppState();

  return useMutation({
    mutationFn: (data) =>
      commonClient.post(URL.CREATE_PORDUCT, {
        username: data?.userId,
        password: data?.password,
      }),
    onSuccess: (res) => {
      if (!res.data) {
        throw new Error(res.message);
      }
      setUser(res.data);
      return res?.data;
    },
    // eslint-disable-next-line no-unused-vars
    onError: (error) => {
      toast.error(`Wrong Username/password`, {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: false,
        progress: undefined,
        theme: "colored",
      });
    },
  });
};

export default useCreateProduct;
