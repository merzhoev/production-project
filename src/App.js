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
    </div>
  );
}

export default App;
