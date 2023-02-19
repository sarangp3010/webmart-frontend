import { lazy, Suspense } from "react";
import { Routes, Route } from "react-router-dom";

import { BarsLoader } from "../components/loader/loader";
import routes from "../routes/routes";
import PublicRoute from "../components/routing/PublicRoute";
const LoginPage = lazy(() => import("../pages/Login/login"));
const ForgetPassword = lazy(() => import("../pages/forgetPassword"));

const AppRoutes = () => {
  return (
    <Suspense fallback={<BarsLoader />}>
      <Routes>
        {(routes || []).map(({ element: Element, path }, index) => (
          <>
            <Route path={`/${path}`} element={<Element />} key={index} />
          </>
        ))}

        <Route path="/" element={<PublicRoute />}>
          <Route path="/login" element={<LoginPage />} />
          <Route path="/signup" element={<LoginPage />} />
          <Route path="/forgot-password" element={<ForgetPassword />} />
        </Route>
      </Routes>
    </Suspense>
  );
};

export default AppRoutes;
