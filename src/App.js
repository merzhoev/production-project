import { Routes, Route } from "react-router-dom";
import { LoginPage } from "pages/login-page";
import { ProfilePage } from "pages/profile-page";
import { Footer } from "components/footer";
import { Header } from "components/header";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<ProfilePage />} errorElement={<LoginPage />} />
        <Route path="/profile" element={<ProfilePage />} />
        <Route path="/login" element={<LoginPage />} />
        {/* <Route path="*" element={<LoginPage />} /> TODO */}
      </Routes>
      <Footer />
    </>
  );
}

export default App;
