import React from 'react';
import Title from '../../Title/Title';

import styles from './balance.m.css';

const Balance = () => {
  return (
    <div className={styles.balance__container}>
      <div className={styles.balance__overall}>
        <Title>Баланс</Title>
        <div>
          <div className={styles.balance__total_ua}>-1286 UAH</div>
          <div className={styles.balance__total_usd}>-500 USD</div>
          <div className={styles.balance__total_usd}>-500 EUR</div>
        </div>
      </div>
      <div className={styles.balance__cash}>
        <Title modificator={'balance'}>Готівка</Title>
        <div>-1000 UAH</div>
        <div>-1000 USD</div>
        <div>-1000 EUR</div>
      </div>
    </div>
  );
};

export default Balance;
