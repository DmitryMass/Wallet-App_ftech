import React from 'react';

import styles from './header.m.css';

const Header = () => {
  return (
    <header className={styles.header}>
      <div className='container'>
        <div className={styles.header__logo}>Jimmy-Co Wallet</div>
      </div>
    </header>
  );
};

export default Header;
