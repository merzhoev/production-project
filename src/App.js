import { Routes, Route } from "react-router-dom";
import { LoginPage } from "pages/login-page";
import { ProfilePage } from "pages/profile-page";
import { HomePage } from "pages/home-page";
import { NotFoundPage } from "pages/notFound-page";
import ProtectedRoute, { isAuth } from "services/useAuth";
import { AuthLayout } from "layouts/auth-layout";
import { useLayoutEffect } from "react";

function App() {
  useLayoutEffect(() => {
    console.log(isAuth())
  }, [])

  return (
    <>
      <Routes>
        <Route path="/" element={<AuthLayout />}>
          <Route index element={<ProtectedRoute><HomePage /></ProtectedRoute>} />
          <Route path="/profile" element={<ProfilePage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Route>
        <Route path="/login" element={<LoginPage />} />
      </Routes>
    </>
  );
}


export default App;
