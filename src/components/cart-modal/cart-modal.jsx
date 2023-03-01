import React from 'react';
import { Cart } from 'components/cart';
import './cart-modal.scss';

export function CartModal({ isShown, onClose }) {
  return isShown ? (
    <div className="modal">
      <div onClick={onClose} className="modal__overlay"></div>
      <div className="modal__content">{<Cart onClose={onClose} />}</div>
    </div>
  ) : null;
}
