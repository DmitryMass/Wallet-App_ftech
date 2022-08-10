import React from 'react';
import MainBalance from './MainBalance';
import MyCards from './MyCards/MyCards';

import styles from './wallet-info.m.css';
import CardsMenu from '../CardsMenu/CardsMenu';

const WalletInfo = () => {
  return (
    <main className={styles.wallet__main}>
      <div className={`container ${styles.wallet__info}`}>
        <div>
          <MainBalance />
          <MyCards />
        </div>
        <CardsMenu />
      </div>
    </main>
  );
};

export default WalletInfo;
