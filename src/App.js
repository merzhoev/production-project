import { Routes, Route } from "react-router-dom";
import { LoginPage } from "pages/login-page";
import { ProfilePage } from "pages/profile-page";
import { Footer } from "components/footer";
import { Header } from "components/header";
import { HomePage } from "pages/home-page/home-page";
import ProtectedRoute from "services/useAuth";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<ProtectedRoute><HomePage /></ProtectedRoute>} />
        <Route path="/profile" element={<ProfilePage />} />
        <Route path="/login" element={<LoginPage />} />
        {/* <Route path="*" element={<NotFound />} /> TODO */}
      </Routes>
      <Footer />
    </>
  );
}

export default App;
