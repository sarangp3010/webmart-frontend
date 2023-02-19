import { lazy, Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import StatusBar from "../components/header/header";
import { BarsLoader } from "../components/loader/loader";
import routes from "../routes/routes";
import PublicRoute from "../components/routing/PublicRoute";
const LoginPage = lazy(() => import("../pages/Login/Login"));
const ForgetPassword = lazy(() => import("../pages/forgetPassword"));

const AppRoutes = () => {
  return (
    <Suspense fallback={<BarsLoader />}>
      <Routes>
        <StatusBar  
        logo="path/to/logo.png"
        name="WebMart"
        profileImage="path/to/profile-image.png"
        cartItems={6}   />

       
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
