import React from 'react';
import Title from '../../../Title/Title';

import styles from './cash-balance.m.css';

const CashBalance = () => {
  return (
    <div className={styles.cash__wrapper}>
      <Title modificator={'balance'}>Готівка</Title>
      <div className={styles.cash__balance}>
        <div className={styles.cash__item}>- 1000 UAH</div>
        <div className={styles.cash__item}>- 1000 USD</div>
        <div className={styles.cash__item}>- 1000 EUR</div>
      </div>
    </div>
  );
};

export default CashBalance;
