// components/Navbar/index.js

import React from 'react';
import Link from 'next/link';
import * as S from './styled';

const Navbar = () => {
  return (
    <S.Nav>
      <S.Logo>
        <Link href="/" legacyBehavior>
          <a>Earthwise<img src="earthwise-logo.png" alt="EarthwiseTrends logo" />Trends</a>
        </Link>
      </S.Logo>
      <S.NavMenu>
        <li>
          <Link href="/products" legacyBehavior>
            <a>Products</a>
          </Link>
        </li>
        <li>
          <Link href="/about" legacyBehavior>
            <a>About Us</a>
          </Link>
        </li>
        <li>
          <Link href="/contact" legacyBehavior>
            <a>Contact</a>
          </Link>
        </li>
      </S.NavMenu>
    </S.Nav>
  );
};

export default Navbar;
