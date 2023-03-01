import React, { useState } from 'react';
import { CartModal } from 'components/cart-modal';
import logoIcon from 'assets/images/logo.svg';
import cartIcon from 'assets/images/cart.svg';
import userIcon from 'assets/images/user.svg';
import './header.scss';

export function Header() {
  const [isModalShown, setIsModalShown] = useState(false);

  return (
    <header className="header">
      <div className="header__inner container">
        <img src={logoIcon} alt="logo" />
        <div className="header__details">
          <span className="header__detail">235 Х</span>
          <button
            onClick={() => setIsModalShown(true)}
            className="header__detail header__detail--button">
            <img src={cartIcon} alt="cart" />
          </button>
          <button className="header__detail header__detail--button">
            <img src={userIcon} alt="user" />
          </button>
        </div>
      </div>
      <CartModal onClose={() => setIsModalShown(false)} isShown={isModalShown} />
    </header>
  );
}
