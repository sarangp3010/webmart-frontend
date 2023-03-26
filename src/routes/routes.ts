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
    element: lazy(() => import("../components/pageNotFound/pageNotFound")),
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
  },
  {
    path: "/verify-email",
    element: lazy(() => import("../pages/emailVerification")),
    exact: true,
  },
  {
    path: "/user/profile",
    element: lazy(() => import("../pages/profile")),
    exact: true,
  }
];

export default routes;
