import React, { useEffect } from 'react';
import { Promo } from 'components/promo';
import { Products } from 'components/products';
import { useDispatch } from 'react-redux';
import { getUser } from 'store/slices/userSlice';

export function HomePage() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getUser());
  }, []);

  return (
    <>
      <Promo>
        Забери призы по заслуге <br />
        за
        <br /> хаккойны
      </Promo>
      <Products />
    </>
  );
}
