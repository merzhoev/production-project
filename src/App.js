import { Routes, Route } from "react-router-dom";
import { LoginPage } from "pages/login-page";
import { ProfilePage } from "pages/profile-page";
import { Footer } from "components/footer";
import { Header } from "components/header";
import { Promo } from "components/promo";
import { Products } from "components/products";
import { Cart } from "components/cart";

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
                <Promo />
      <Cart />
      <Products />
            {/* <LoginPage/> */}
      <ProfilePage/>
      <Footer/>
    </div>
  );
}

export default App;
