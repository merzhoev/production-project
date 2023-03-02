import React from 'react';
import cartIcon from 'assets/images/cart.svg';
import './product-card.scss';

export function ProductCard({ id, imageUrl, title, price }) {
  return (
    <div key={id} className="products-card">
      <img className="products-card__image" src={imageUrl} alt="card" />
      <div className="products-card__title-container">
        <h3 className="products-card__title">{title}</h3>
        <span className="products-card__price">{price} Х</span>
      </div>
      <div className="products-card__details">
        <button className="products-card__detail">
          В корзину
        </button>
      </div>
    </div>
  );
}
