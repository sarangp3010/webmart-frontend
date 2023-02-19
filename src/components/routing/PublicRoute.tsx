import { Outlet, Navigate } from "react-router-dom";
import { useSelector } from "react-redux";

import TRootState from "../../store/root.types";

const PublicRoute: React.FC<any> = () => {
  const isAuthenticated = useSelector((state: TRootState) => state.auth.token);
  return isAuthenticated ? <Navigate to="/" /> : <Outlet />;
};

export default PublicRoute;
