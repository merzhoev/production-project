import React from 'react';
import './products.scss';
import { ProductCard } from 'components/product-card';

const categories = ['Мерч', 'Техника', 'Компьютерная периферия', 'Аксессуары', 'Все'];
const cards = Array.from({ length: 6 }, (_, i) => ({
  id: i + 1,
  imageUrl: 'https://lottserves.org/wp-content/uploads/2017/10/500x500.png',
  title: 'Худи',
  price: 10,
}));

export function Products() {
  return (
    <div className="products container">
      <ul className="products__categories">
        {categories.map((category, idx) => (
          <li key={idx} className="products__category">
            {category}
          </li>
        ))}
      </ul>
      <div className="products__sort">
        <div className="products__sort-item">
          <span className="products__sort-text">По цене</span>
          <svg
            className="products__sort-icon"
            width="21"
            height="26"
            viewBox="0 0 21 26"
            fill="none"
            xmlns="http://www.w3.org/2000/svg">
            <path
              fill="none"
              d="M11.1624 1.75781V24.2419M11.1624 24.2419L1.75 15.7419M11.1624 24.2419L20 15.7419"
              stroke="white"
              strokeWidth="2"
              strokeLinecap="round"
            />
          </svg>
        </div>
      </div>
      <div className="products__list">
        {cards.map((card) => (
          <ProductCard key={card.id} {...card} />
        ))}
      </div>
    </div>
  );
}
