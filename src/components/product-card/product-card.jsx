import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { cartActions } from "store/slices/cartSlice";
import "./product-card.scss";


export function ProductCard({ id, image, title, price }) {
  const dispatch = useDispatch();
  const cartProducts = useSelector((state) => state.cart.items);
  const isCartAdded = cartProducts.some(card => card.id === id)

  const handleClick = () => {
    dispatch(cartActions.setProducts({
      id,
      title,
      image,
      price,
      amount: 0,
    }));
  };

  return (
    <div key={id} className="products-card">
      <img className="products-card__image" src={image} alt="card" />
      <div className="products-card__title-container">
        <h3 className="products-card__title">{title}</h3>
        <span className="products-card__price">{price} Х</span>
      </div>
      <div className="products-card__details">
        <button disabled={isCartAdded} onClick={() => handleClick()} className={isCartAdded ? "products-card__detail products-card__detail--added" : "products-card__detail" }>
          {isCartAdded ? "Добавлено" : "В корзину"}
        </button>
      </div>
    </div>
  );
}
