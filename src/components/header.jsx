import { Link } from 'gatsby';
import React from 'react';
import cn from 'classnames';

import * as styles from './header.module.css';

const Header = ({ siteTitle }) => (
  <header
    className={cn(
      styles.header,
      'bg-blue-400 text-white p-4 font-semibold mb-4 text-xl'
    )}
  >
    <h1>
      <Link to="/">{siteTitle}</Link>
    </h1>
  </header>
);

export default Header;
