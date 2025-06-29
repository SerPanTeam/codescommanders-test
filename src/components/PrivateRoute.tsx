import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import type { RootState } from "../store";
import type { JSX } from "react";

interface PrivateRouteProps {
  children: JSX.Element;
}

export const PrivateRoute = ({ children }: PrivateRouteProps) => {
  const user = useSelector((state: RootState) => state.auth.user);
  if (!user) {
    return <Navigate to="/login" replace />;
  }
  return children;
};
