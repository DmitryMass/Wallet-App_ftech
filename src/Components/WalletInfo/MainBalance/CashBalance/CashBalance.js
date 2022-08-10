import React from 'react';
import Button from '../../../Button';
import Title from '../../../Title/Title';

import styles from './cash-balance.m.css';

const CashBalance = () => {
  return (
    <div className={styles.cash__wrapper}>
      <Title modificator={'balance'}>Готівка</Title>
      <div className={styles.cash__balance}>
        <div className={styles.cash__item}>
          <span>- 1000 UAH</span>
          <Button modificator={'edit'}>Редагувати</Button>
        </div>
        <div className={styles.cash__item}>
          <span>- 1000 USD</span>
          <Button modificator={'edit'}>Редагувати</Button>
        </div>
        <div className={styles.cash__item}>
          <span>- 1000 EUR</span>
          <Button modificator={'edit'}>Редагувати</Button>
        </div>
      </div>
    </div>
  );
};

export default CashBalance;
