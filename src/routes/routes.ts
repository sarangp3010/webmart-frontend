import { lazy } from "react";

const routes = [
  {
    path: "home",
    element: lazy(() => import("../pages/home")),
    exact: true,
  },
  {
    path: "",
    element: lazy(() => import("../pages/home")),
    exact: true,
  }, 
  {
    path: "*",
    element: lazy(() => import("../pages/pageNotFound/pageNotFound")),
    exact: true,
  },
  {
    path: "/productInfo/:productId",
    element: lazy(() => import("../pages/productInfo")),
    exact: true,
  },
  {
    path: "/afterSearch",
    element: lazy(() => import("../pages/afterSearch")),
    exact: true,
  }
];

export default routes;
