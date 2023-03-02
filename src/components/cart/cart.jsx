import React from "react";
import closeIcon from "assets/images/close.svg";
import "./cart.scss";
import { useSelector } from "react-redux";
import { CartCard } from "components/cart-card/cart-card";

export function Cart({ onClose }) {
  const cart = useSelector((state) => state.cart.items);

  return (
    <div className="cart">
      <div className="cart__title-container">
        <h2 className="cart__title">Корзина</h2>
        <img
          onClick={onClose}
          className="cart__close-icon"
          src={closeIcon}
          alt="close"
        />
      </div>
      <div className="cart__items">
        {cart.map((card, index) => (
          <CartCard
            key={index}
            {...card}
          />
        ))}
      </div>
      <div className="cart-conclusion">
        <div className="cart-conclusion__inner">
          <div className="cart-conclusion__price-container">
            <p className="cart-conclusion__text">Итого:</p>
            <span className="cart-conclusion__price">20 Х</span>
          </div>
          <button className="cart-conclusion__button">Оформить заказ</button>
        </div>
      </div>
    </div>
  );
}
