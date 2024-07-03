import { create } from "zustand";
import { persist } from "zustand/middleware";

// import { getStorage } from "../utils/common";
// import initialAppState from "./initalAppState";

let initialAppState = {
    loading: false,
    user: {},
    level: 0,
    privilegeCount: 0,
};

export const useAppState = create()(
    persist(
        (set) => ({
            app: initialAppState,

            setLoading: (flag) =>
                set((state) => {
                    return {
                        ...state,
                        app: {
                            ...state.app,
                            loading: flag,
                        },
                    };
                }),

            reset: () => {
                // clear the state and remove data from browser storage
                set(initialAppState);
            },
        }),
        {
            name: "userAppState", // name of the item in the storage (must be unique)// (optional) by default, 'localStorage' is used
        }
    )
);
