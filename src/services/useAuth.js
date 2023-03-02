import { Navigate } from "react-router-dom";

export const isAuth = () => {
  const token = localStorage.getItem("token");

  return Boolean(token)
};

const ProtectedRoute = ({ children }) => {
  const auth = isAuth();
  return auth ? children : <Navigate to="/login" />;
};

export default ProtectedRoute;
