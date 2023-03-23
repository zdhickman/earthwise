// components/HeroSection/index.js

import React from 'react';
import * as S from './styled';

const HeroSection = () => {
  return (
    <S.Wrapper>
      <S.Container>
        <div className="hero-text">
          <h1>Discover Earth-Friendly Products</h1>
          <p>Join us in making the world a greener place.</p>
          <a href="/products" className="cta-button">Shop Now</a>
        </div>
      </S.Container>
    </S.Wrapper>
  );
};

export default HeroSection;
