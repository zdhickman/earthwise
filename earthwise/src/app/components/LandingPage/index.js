// components/LandingPage/index.js

import React from 'react';
import * as S from './styled';

const LandingPage = () => {
  return (
    <>
      <S.HeroSection>
        <div className="hero-text">
          <h1>Discover Earth-Friendly Products</h1>
          <p>Join us in making the world a greener place.</p>
          <a href="/products" className="cta-button">Shop Now</a>
        </div>
        <S.HeroIcons>
          <div className="icon-container">
            <img src="leaf-icon.png" alt="Leaf Icon" />
          </div>
          <div className="icon-container">
            <img src="recycle-icon.png" alt="Recycle Icon" />
          </div>
          <div className="icon-container">
            <img src="lightbulb-icon.png" alt="Lightbulb Icon" />
          </div>
        </S.HeroIcons>
      </S.HeroSection>

      <S.FeaturesSection>
        <S.Feature>
          <h2>Trustworthy</h2>
          <p>We carefully curate the best eco-friendly products from Amazon.</p>
        </S.Feature>
        <S.Feature>
          <h2>Eco-Friendly</h2>
          <p>All our products are designed to help you live a more sustainable lifestyle.</p>
        </S.Feature>
        <S.Feature>
          <h2>Green</h2>
          <p>We promote products that minimize harm to the environment and support a greener future.</p>
        </S.Feature>
      </S.FeaturesSection>
    </>
  );
};

export default LandingPage;
