import React from 'react';
import './promo.scss';

export function Promo({children}) {
  return (
    <div className="promo">
      <div className="promo__title-container">
        <h1 className="promo__title">
          {children}
        </h1>
      </div>
    </div>
  );
}
