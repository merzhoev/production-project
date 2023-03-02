import React, { useEffect } from 'react';
import './products.scss';
import { ProductCard } from 'components/product-card';
import { useDispatch, useSelector } from 'react-redux';
import { getCategories } from 'store/slices/categorySlice';
import { getProducts } from 'store/slices/productSlice';

// const categories = ['Мерч', 'Техника', 'Компьютерная периферия', 'Аксессуары', 'Все'];
// const cards = Array.from({ length: 6 }, (_, i) => ({
//   id: i + 1,
//   imageUrl: 'https://lottserves.org/wp-content/uploads/2017/10/500x500.png',
//   title: 'Худи',
//   price: 10,
// }));

export function Products() {
  const products = useSelector((state) => state.product.items);
  const categories = useSelector((state) => state.category.items);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCategories());
    dispatch(getProducts());
  }, []);

  return (
    <div className="products container">
      <ul className="products__categories">
        {categories.map(({ id, title }) => (
          <li key={id} className="products__category">
            {title}
          </li>
        ))}
        <li className="products__category">Все</li>
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
        {products.map((card) => (
          <ProductCard key={card.id} {...card} />
        ))}
      </div>
    </div>
  );
}
