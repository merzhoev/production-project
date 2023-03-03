import React, { useEffect, useState } from 'react';
import { ProductCard } from 'components/product-card';
import { useDispatch, useSelector } from 'react-redux';
import { getCategories } from 'store/slices/categorySlice';
import { getProducts } from 'store/slices/productSlice';
import classNames from 'classnames';
import './products.scss';

export function Products() {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.product.items);
  const cartProducts = useSelector((state) => state.cart.items);
  const categories = useSelector((state) => state.category.items);
  const [activeCategoryId, setActiveCategoryId] = useState(null);
  const [sortBy, setSortBy] = useState('asc');

  function handleCategoryClick(categoryId) {
    setActiveCategoryId(categoryId);
  }

  function handleSortClick() {
    setSortBy(sortBy === 'asc' ? 'desc' : 'asc');
  }

  useEffect(() => {
    dispatch(getCategories());
  }, []);

  useEffect(() => {
    const categoryQuery = activeCategoryId === null ? '' : `&categoryId=${activeCategoryId}`;
    const sortQuery = `sort=${sortBy}`;
    const queryParams = `?${sortQuery}${categoryQuery}`;

    dispatch(getProducts(queryParams));
  }, [activeCategoryId, sortBy]);

  useEffect(() => {
    localStorage.setItem('cartProducts', JSON.stringify(cartProducts));
  }, [cartProducts]);

  return (
    <div className="products container">
      <ul className="products__categories">
        {categories.map(({ id, title }) => (
          <li
            key={id}
            onClick={() => handleCategoryClick(id)}
            className={classNames('products__category', {
              'products__category--active': activeCategoryId === id,
            })}>
            {title}
          </li>
        ))}
        <li
          onClick={() => handleCategoryClick(null)}
          className={classNames('products__category', {
            'products__category--active': activeCategoryId === null,
          })}>
          Все
        </li>
      </ul>
      <div className="products__sort">
        <div onClick={handleSortClick} className="products__sort-item">
          <span className="products__sort-text">По цене</span>
          <svg
            className={classNames('products__sort-icon', {
              'products__sort-icon--reversed': sortBy === 'asc',
            })}
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
