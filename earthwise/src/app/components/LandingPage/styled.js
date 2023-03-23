// components/LandingPage/styled.js

import styled from 'styled-components';

export const HeroSection = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 2rem 1rem;
  background: linear-gradient(135deg, #2ecc71 0%, #27ae60 100%);
  color: #ffffff;
  font-family: 'Roboto', sans-serif;

  .hero-text {
    text-align: center;

    h1 {
      font-size: 2.5rem;
      margin-bottom: 1rem;
    }

    p {
      font-size: 1.25rem;
      margin-bottom: 1rem;
    }

    .cta-button {
      display: inline-block;
      background-color: #ffffff;
      padding: 0.75rem 1.5rem;
      border-radius: 0.5rem;
      color: #27ae60;
      font-size: 1rem;
      text-decoration: none;

      &:hover {
        background-color: #ecf0f1;
      }
    }
  }
`;

export const HeroIcons = styled.div`
  display: flex;
  justify-content: space-around;
  width: 100%;

  .icon-container {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 80px;
    height: 80px;
    border-radius: 50%;
    background-color: rgba(255, 255, 255, 0.15);

    img {
      width: 50%;
      height: auto;
    }
  }
`;

// ... rest of the styled components


export const FeaturesSection = styled.section`
  display: flex;
  justify-content: space-between;
  padding: 2rem 1rem;
  background-color: #ffffff;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

export const Feature = styled.div`
  flex: 1;
  padding: 1rem;
  text-align: center;
  font-family: 'Roboto', sans-serif;

  h2 {
    font-size: 1.75rem;
    margin-bottom: 1rem;
    color: #27ae60;
  }

  p {
    font-size: 1rem;
    line-height: 1.5;
  }
`;
