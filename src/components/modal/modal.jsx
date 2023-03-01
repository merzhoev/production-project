import React from 'react';
import 'modal';

export function Modal({ chidlren, isShown, onClose }) {
  return isShown ? (
    <div className="modal">
      <div onClick={onClose} className="modal__overlay"></div>
      <div className="modal__content">{chidlren}</div>
    </div>
  ) : null;
}
