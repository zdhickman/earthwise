// components/FeaturedProducts/index.js

import React from 'react';
import Link from 'next/link';
import * as S from './styled';

const FeaturedProducts = ({ products }) => {
  return (
    <S.Container>
      <h2>Featured Products</h2>
      <S.Products>
        {products.map((product) => (
          <S.Product key={product.id}>
        <Link href={product.productUrl} legacyBehavior>
          <a>
            <S.ProductImage>
              <img src={product.imageUrl} alt={product.title} />
            </S.ProductImage>
            <S.ProductTitle>{product.title}</S.ProductTitle>
            <S.ProductPrice>{product.price}</S.ProductPrice>
          </a>
        </Link>
      </S.Product>
    ))}
  </S.Products>
</S.Container>
);
};

export default FeaturedProducts;