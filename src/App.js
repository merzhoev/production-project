import { Routes, Route } from "react-router-dom";
import { LoginPage } from "pages/login-page";
import { ProfilePage } from "pages/profile-page";
import { Footer } from "components/footer";
import { Header } from "components/header";
import HomePage from "pages/home-page/home-page";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route
          path="/"
          element={<HomePage />}
          errorElement={<LoginPage />}
        />
        <Route path="/profile" element={<ProfilePage />} />
        <Route path="/login" element={<LoginPage />} />
        {/* <Route path="*" element={<LoginPage />} /> TODO */}
      </Routes>
      <Footer />
    </>
  );
}

export default App;
