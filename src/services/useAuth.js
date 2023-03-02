import { Navigate } from "react-router-dom";

export const useAuth = () => {
  const token = localStorage.getItem("token");

  return Boolean(token)
};

const ProtectedRoute = ({ children }) => {
  const auth = useAuth();
  return auth ? children : <Navigate to="/login" />;
};

export default ProtectedRoute;
