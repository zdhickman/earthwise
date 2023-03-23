// components/HeroSection/styled.js

import styled from 'styled-components';

export const Wrapper = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  font-family: 'Roboto', sans-serif;
  margin: 0 auto;
`;
  
export const Container = styled.div`
  max-width: 100%;
  width: 100%;
  padding: 02rem;
  text-align: center;
  min-height: 600px;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  &:after {
    content: '';
    width: 100%;
    height: 100%;
    position: absolute;
    left: 0;
    top: 0;
    background-image: url('./autumn-2.png');
    // opacity: 0.6;
    z-index: -1;
    // filter: blur(1px);
    //border-radius: 10px;
  }
  
  @media (max-width: 1200px) {
  padding-left: 2rem;
  padding-right: 2rem;
  }
  
  .hero-text {
  h1 {
  font-size: 4rem;
  margin-bottom: 1rem;
  -webkit-text-stroke-width: 2px;
  -webkit-text-stroke-color: black;
  text-shadow: 4px 4px black;
  }
  p {
    font-size: 1.25rem;
    margin-bottom: 1rem;
    //text-shadow: 4px 4px black;
  }
  
  .cta-button {
    display: inline-block;
    background-color: #ffffff;
    padding: 0.75rem 1.5rem;
    border-radius: 0.5rem;
    color: #27ae60;
    font-size: 1rem;
    text-decoration: none;
    transition: background-color 0.3s ease;
  
    &:hover {
      background-color: #ecf0f1;
    }
  }
}
`;