import { ErrorPage } from "./components/Error/ErrorPage";
import BaseLayout from "../src/layouts/BaseLayout";
import { Suspense } from "react";
import ProductList from "./pages/Products/ProductList";
import CreateProduct from "./pages/Products/CreateProduct";

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
            <ProductList />
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
