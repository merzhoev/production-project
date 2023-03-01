import React from 'react';
import trashIcon from 'assets/images/trash.svg';
import closeIcon from 'assets/images/close.svg';
import './cart.scss';

export function Cart() {
  return (
    <div className="cart">
      <div className="cart__title-container">
        <h2 className="cart__title">Корзина</h2>
        <img className="cart__close-icon" src={closeIcon} alt="close" />
      </div>
      <div className="cart-card">
        <div className="cart-card__inner">
          <img
            className="cart-card__image"
            src="https://lottserves.org/wp-content/uploads/2017/10/500x500.png"
            alt="card"
          />
          <h3 className="cart-card__title">Худи</h3>
          <div className="cart-card__buttons">
            <button className="cart-card__button">-</button>
            <span className="cart-card__amount">1</span>
            <button className="cart-card__button">+</button>
          </div>
          <span className="cart-card__price">10 Х</span>
          <button className="cart-card__detail">
            <img src={trashIcon} alt="cart" />
          </button>
        </div>
      </div>
      <div className="cart-card">
        <div className="cart-card__inner">
          <img
            className="cart-card__image"
            src="https://lottserves.org/wp-content/uploads/2017/10/500x500.png"
            alt="card"
          />
          <h3 className="cart-card__title">Худи</h3>
          <div className="cart-card__buttons">
            <button className="cart-card__button">-</button>
            <span className="cart-card__amount">1</span>
            <button className="cart-card__button">+</button>
          </div>
          <span className="cart-card__price">10 Х</span>
          <button className="cart-card__detail">
            <img src={trashIcon} alt="cart" />
          </button>
        </div>
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
