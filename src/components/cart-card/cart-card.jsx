import React from "react";
import trashIcon from "assets/images/trash.svg";
import { useDispatch } from "react-redux";
import { cartActions } from "store/slices/cartSlice";

export function CartCard({ id, title, image, price, amount }) {
  const dispatch = useDispatch();
  const handleClick = () => {
    dispatch(
      cartActions.removeProduct(id)
    );
  };

  return (
    <>
      <div className="cart-card">
        <div className="cart-card__inner">
          <img className="cart-card__image" src={image} alt="card" />
          <h3 className="cart-card__title">{title}</h3>
          <div className="cart-card__buttons">
            <button className="cart-card__button">-</button>
            <span className="cart-card__amount">{amount}</span>
            <button className="cart-card__button">+</button>
          </div>
          <span className="cart-card__price">{price} Х</span>
          <button onClick={() => handleClick()} className="cart-card__detail">
            <img src={trashIcon} alt="cart" />
          </button>
        </div>
      </div>
    </>
  );
}
