import React, { lazy, Suspense } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import StatusBar from "../components/header/header";
import { BarsLoader } from "../components/loader/loader";
import routes from "../routes/routes";
import PublicRoute from "../components/routing/PublicRoute";
import ErrorBoundary from "../components/errorBoundary/errorBoundary";
import Footer from "../components/footer/footer";
const LoginPage = lazy(() => import("../pages/Login/Login"));
const ForgetPassword = lazy(() => import("../pages/forgetPassword"));

const withoutHeader = ["/login", "/signup", "/forgot-password", "/verify-email"];
const isHeaderAvailable = (path: string) => {
  return withoutHeader.includes(path);
};
const AppRoutes = () => {
  const location = useLocation();

  return (
    <Suspense fallback={<BarsLoader />}>
      {!isHeaderAvailable(location.pathname) ? (
        <React.Fragment>
          <StatusBar />
        </React.Fragment>
      ) : null}

      <ErrorBoundary>
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
      </ErrorBoundary>
      
      {!isHeaderAvailable(location.pathname) ? (
        <React.Fragment>
          <Footer />
        </React.Fragment>
      ) : null}
    </Suspense>
  );
};

export default AppRoutes;
