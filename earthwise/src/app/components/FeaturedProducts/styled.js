// components/FeaturedProducts/styled.js

import styled from 'styled-components';

export const Container = styled.section`
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem 1rem;
  font-family: 'Roboto', sans-serif;
  text-align: center;

  @media (max-width: 1200px) {
    padding-left: 2rem;
    padding-right: 2rem;
  }

  h2 {
    font-size: 2.25rem;
    margin-bottom: 1.5rem;
  }
`;

export const Products = styled.div`
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  gap: 2rem;
`;

export const Product = styled.div`
  flex: 0 1 30%;
  padding: 1rem;
  transition: transform 0.3s ease;

  &:hover {
    transform: translateY(-0.5rem);
  }

  a {
    text-decoration: none;
    color: inherit;
  }
`;

export const ProductImage = styled.div`
  img {
    max-width: 100%;
    height: 200px;
    display: block;
    margin: 0 auto;
    margin-bottom: 1rem;
    border-radius: 0.5rem;
  }
`;

export const ProductTitle = styled.h3`
  font-size: 1.25rem;
  margin-bottom: 0.5rem;
`;

export const ProductPrice = styled.p`
  font-size: 1rem;
  font-weight: bold;
`;
