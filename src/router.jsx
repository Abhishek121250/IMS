import { ErrorPage } from "./components/Error/ErrorPage";
import BaseLayout from "../src/layouts/BaseLayout";
import { Suspense } from "react";
import CreateProduct from "./pages/Products/component/CreateProduct";
import ProductContainer from "./pages/Products/container/ProductContainer";

export const routes = [
    {
        path: "/",
        element: (
            <Suspense>
                {/* <Authenticate> */}
                <BaseLayout />
                {/* </Authenticate> */}
            </Suspense>
        ),
        errorElement: <ErrorPage />,
        children: [
            {
                path: "product/list",
                element: (
                    <Suspense>
                        <ProductContainer />
                    </Suspense>
                ),
                errorElement: <ErrorPage />,
            },
            {
                path: "product/create",
                element: <CreateProduct />,
                errorElement: <ErrorPage />,
            },
        ],
    },
];
