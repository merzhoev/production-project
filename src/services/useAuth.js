import { Navigate } from "react-router-dom";

const useAuth = () => {
  const user = localStorage.getItem("token");
  if (user) {
    return true;
  } else {
    return false;
  }
};

const ProtectedRoute = ({ children }) => {
  const auth = useAuth();
  return auth ? children : <Navigate to="/login" />;
};

export default ProtectedRoute;
