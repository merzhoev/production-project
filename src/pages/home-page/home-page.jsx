import React from 'react';
import { Promo } from 'components/promo';
import { Products } from 'components/products';

export function HomePage() {
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
