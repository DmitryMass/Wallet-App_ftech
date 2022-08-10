import React from 'react';
import LoadAndError from '../../LoadingAndError/load-n-error';

import Title from '../../Title/Title';
import useCalculateAmount from '../../useCalculateAmount/useCalculateAmount';

import styles from './balance.m.css';
import BalanceItem from './BalanceItem/BalanceItem';
import CashBalance from './CashBalance/CashBalance';

const Balance = () => {
  const { balanceUAH, balanceUSD, balanceEUR, isLoading, isError } =
    useCalculateAmount();

  return (
    <div className={styles.balance__container}>
      <div className={styles.balance__overall}>
        <Title modificator={'balance'}>Баланс</Title>
        {isLoading || isError ? (
          <LoadAndError load={isLoading} error={isError} />
        ) : (
          <div className={styles.balance__total}>
            <BalanceItem modificator={styles.balance__total_ua}>
              - {new Intl.NumberFormat().format(balanceUAH)} UAH
            </BalanceItem>
            <BalanceItem modificator={styles.balance__total_usd}>
              - {new Intl.NumberFormat().format(balanceUSD)} USD
            </BalanceItem>
            <BalanceItem modificator={styles.balance__total_eur}>
              - {new Intl.NumberFormat().format(balanceEUR)} EUR
            </BalanceItem>
          </div>
        )}
      </div>
      <CashBalance />
    </div>
  );
};

export default Balance;
