// src/components/routing/ProtectedRoute.tsx
import { Navigate } from "react-router-dom";
import PATHS from "../../constants/paths";

interface ProtectedRouteProps {
  isAuthenticated: boolean;
  children: React.ReactNode;
}

const ProtectedRoute = ({ isAuthenticated, children }: ProtectedRouteProps) => {
  if (!isAuthenticated) {
    return <Navigate to={PATHS.Login} replace />;
  }
  return <>{children}</>;
};

export default ProtectedRoute;
