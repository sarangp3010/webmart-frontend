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
    element: lazy(() => import("../components/productInfo/ProductInfoPage")),
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
    path: "/cart",
    element: lazy(() => import("../pages/carts")),
    exact: true,
  },
  {
    path: "/cart",
    element: lazy(() => import("../pages/carts")),
    exact: true,
  },
  {
    path: "/checkout",
    element: lazy(() => import("../pages/checkout")),
    exact: true,
  },
  {
    path: "/products/:id",
    element: lazy(() => import("../pages/product/add")),
    exact: true,
  },
  {
    path: "/brands",
    element: lazy(() => import("../pages/brands")),
    exact: true,
  },
  {
    path: "/products/list",
    element: lazy(() => import("../pages/product/list")),
    exact: true,
  },
  {
    path: "/become-seller",
    element: lazy(() => import("../pages/becomeSeller")),
    exact: true,
  },
  {
    path: "/admin-dashboard",
    element: lazy(() => import("../pages/admindashboard")),
    exact: true,
  },
  {
    path: "/order/success",
    element: lazy(() => import("../components/orderSuccess")),
    exact: true,
  },
  {
    path: "/contactUs",
    element: lazy(() => import("../pages/contact")),
    exact: true,
  },
  {
    path: "/admin-dashboard",
    element: lazy(() => import("../pages/admindashboard")),
    exact: true,
  },
  {
    path: "/order/success",
    element: lazy(() => import("../components/orderSuccess")),
    exact: true,
  },
  {
    path: "/orders/list",
    element: lazy(() => import("../pages/order/list")),
    exact: true,
  },
  {
    path: "/reports/customer",
    element: lazy(() => import("../pages/reports/customerReport")),
    exact: true,
  },
  {
    path: "/reports/product",
    element: lazy(() => import("../pages/reports/ProductReports")),
    exact: true,
  },
  {
    path: "/reports/order",
    element: lazy(() => import("../pages/reports/OrderReports")),
    exact: true,
  },
  {
    path: "/customers/list",
    element: lazy(() => import("../pages/users/userList")),
    exact: true,
  },
  {
    path: "/seller/list",
    element: lazy(() => import("../pages/users/sellerList")),
    exact: true,
  },
  {
    path: "/pending-seller-request",
    element: lazy(() => import("../pages/pendingSellerRequest")),
    exact: true,
  },
];

export default routes;
