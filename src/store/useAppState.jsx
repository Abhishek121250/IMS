import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";

import { getStorage } from "../utils/common";
import initialAppState from "./initialAppState";

export const useAppState = create()(
    persist(
        (set) => ({
            app: initialAppState,
            setUser: (user) =>
                set((state) => {
                    return {
                        ...state,
                        app: {
                            ...state.app,
                            user: user,
                        },
                    };
                }),
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
                getStorage().clear();
            },
        }),
        {
            name: "userAppState", // name of the item in the storage (must be unique)
            storage: createJSONStorage(() => getStorage()), // (optional) by default, 'localStorage' is used
        }
    )
);
