import React, { useState } from "react";
import { CartModal } from "components/cart-modal";
import logoIcon from "assets/images/logo.svg";
import cartIcon from "assets/images/cart.svg";
import userIcon from "assets/images/user.svg";
import "./header.scss";
import { Link } from "react-router-dom";

export function Header() {
  const [isModalShown, setIsModalShown] = useState(false);

  return (
    <header className="header">
      <div className="header__inner container">
        <Link to="/" >
          <img src={logoIcon} alt="logo" />
        </Link>
        <div className="header__details">
          <span className="header__detail">235 Х</span>
          <button
            onClick={() => setIsModalShown(true)}
            className="header__detail header__detail--button"
          >
            <img src={cartIcon} alt="cart" />
          </button>
          <Link to="/profile">
            <button className="header__detail header__detail--button">
              <img src={userIcon} alt="user" />
            </button>
          </Link>
        </div>
      </div>
      <CartModal
        onClose={() => setIsModalShown(false)}
        isShown={isModalShown}
      />
    </header>
  );
}
