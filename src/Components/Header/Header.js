import React from 'react';
import { Link } from 'react-router-dom';

import styles from './header.m.css';

const Header = () => {
  return (
    <header className={styles.header}>
      <div className='container'>
        <Link to='/'>Jimmy-Co Wallet</Link>
      </div>
    </header>
  );
};

export default Header;
