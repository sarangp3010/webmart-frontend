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
  },{
    path: "*",
    element: lazy(() => import("../pages/pageNotFound/pageNotFound")),
    exact: true,
  },
];

export default routes;
