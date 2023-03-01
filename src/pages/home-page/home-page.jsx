import React from "react";
import { Promo } from "components/promo";
import { Products } from "components/products";
import { Cart } from "components/cart";

export default function HomePage() {
  return (
    <>
      <Promo />
      {/* <Cart /> */}
      <Products />
    </>
  );
}
