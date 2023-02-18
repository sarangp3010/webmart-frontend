import { lazy, Suspense } from "react";
import { Routes, Route } from "react-router-dom";

import { BarsLoader } from "../components/loader/loader";
import routes from "../routes/routes";
import PublicRoute from "../components/routing/PublicRoute";
const LoginPage = lazy(() => import("../pages/login"));
const SignUpPage = lazy(() => import("../pages/signUp"));
const ForgetPassword = lazy(() => import("../pages/forgetPassword"));

const AppRoutes = () => {
  return (
    <Suspense fallback={<BarsLoader />}>
      <Routes>
        <Route path="/" element={<PublicRoute />}>
          <Route path="/login" element={<LoginPage />} />
          <Route path="/signup" element={<SignUpPage />} />
          <Route path="/forgot-password" element={<ForgetPassword />} />
        </Route>
        {(routes || []).map(({ element: Element, path }, index) => (
          <>
            <Route path={`/${path}`} element={<Element />} key={index} />
          </>
        ))}
      </Routes>
    </Suspense>
  );
};

export default AppRoutes;
