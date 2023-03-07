import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { CartCard } from 'components/cart-card/cart-card';
import classNames from 'classnames';
import { $api } from 'services/api';
import { getUser } from 'store/slices/userSlice';
import { cartActions } from 'store/slices/cartSlice';
import './cart.scss';

export function Cart() {
  const dispatch = useDispatch();
  const userCoins = useSelector((state) => state.user.data.money);
  const cartProducts = useSelector((state) => state.cart.items);
  const totalPrice = cartProducts.reduce((sum, product) => sum + product.totalPrice, 0);
  const isEnoughCoins = userCoins >= totalPrice;
  const [isSuccessOrder, setIsSuccessOrder] = useState(false);

  function handleOrder() {
    const orderProducts = cartProducts.map(({ id, amount }) => ({
      product_id: id,
      amount,
    }));

    $api
      .makeOrder(orderProducts)
      .then((response) => {
        dispatch(getUser());
        dispatch(cartActions.removeAllProducts());
        setIsSuccessOrder(true);
      })
      .catch(() => {
        alert('Произошла ошибка!');
      });
  }

  useEffect(() => {
    localStorage.setItem('cartProducts', JSON.stringify(cartProducts));
  }, [cartProducts]);

  return (
    <div className="cart">
      <div className="cart__title-container">
        <h2 className="cart__title">Корзина</h2>
      </div>

      {isSuccessOrder ? (
        <h2 className="cart__empty-text cart__empty-text--success">Заказ оформлен</h2>
      ) : cartProducts.length > 0 ? (
        <>
          <div className="cart__items">
            {cartProducts.map((card, index) => (
              <CartCard key={index} {...card} />
            ))}
          </div>
          <div className="cart-conclusion">
            <div className="cart-conclusion__inner">
              <div className="cart-conclusion__price-container">
                <p className="cart-conclusion__text">Итого:</p>
                <span
                  className={classNames('cart-conclusion__price', {
                    'cart-conclusion__price--attention': !isEnoughCoins,
                  })}>
                  {totalPrice} Х
                </span>
              </div>
              <button onClick={handleOrder} className="cart-conclusion__button">
                Оформить заказ
              </button>
            </div>
          </div>
        </>
      ) : (
        <h2 className="cart__empty-text">Корзина пуста</h2>
      )}
    </div>
  );
}
