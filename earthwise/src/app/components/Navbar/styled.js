// components/Navbar/styled.js

import styled from 'styled-components';

export const Nav = styled.nav`
  display: flex;
  justify-content: center
  align-items: center;
  flex-flow: column nowrap;
  gap: 30px;
  max-width: 1200px;
  margin: 0 auto;
  padding: 1rem;
  font-family: 'Roboto', sans-serif;

  @media (max-width: 1200px) {
    padding-left: 2rem;
    padding-right: 2rem;
  }
`;

export const Logo = styled.div`
  a {
    display: flex;
    justify-content: center;
    align-content: center;
    font-size: 2rem;
    font-family: 'Playfair Display', serif;
  }

  img {
    max-height: 40px;
    margin: 0 10px;
  }
`;

export const NavMenu = styled.ul`
  display: flex;
  align-self: center;
  list-style: none;
  margin: 0;
  padding: 0;
  //font-family: 'Lora', serif;
  gap: 30px;
  text-align: center;

  li {
    //
  }

  a {
    color: #333;
    text-decoration: none;
    font-weight: 500;
    transition: color 0.3s ease;

    &:hover {
      color: #27ae60;
    }
  }
`;
