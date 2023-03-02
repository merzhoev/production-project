import { Routes, Route } from "react-router-dom";
import { LoginPage } from "pages/login-page";
import { ProfilePage } from "pages/profile-page";
import { HomePage } from "pages/home-page";
import { NotFoundPage } from "pages/notFound-page";
import { Footer } from "components/footer";
import { Header } from "components/header";
import ProtectedRoute from "services/useAuth";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<ProtectedRoute><HomePage /></ProtectedRoute>} />
        <Route path="/profile" element={<ProfilePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
      <Footer />
    </>
  );
}


export default App;
