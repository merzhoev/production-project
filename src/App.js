// import { LoginPage } from "pages/login-page";
import { ProfilePage } from "pages/profile-page";
import { Footer } from "components/footer";


import { Header } from "components/header";
import { Promo } from "components/promo";
import { Products } from "components/products";
import { Cart } from "components/cart";

function App() {
  return (
    <div className="app">
      <Header />
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
