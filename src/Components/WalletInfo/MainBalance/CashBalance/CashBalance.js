import React from 'react';
import { nanoid } from 'nanoid';

import LoadAndError from '../../../LoadingAndError/load-n-error';
import Title from '../../../Title/Title';

import styles from './cash-balance.m.css';
import CashItem from './CashItem/CashItem';
import { useGetAllCashQuery } from '../../../../Store/Slice/cashSlice';

const CashBalance = () => {
  const { data = [], isLoading, isError } = useGetAllCashQuery();
  return (
    <div className={styles.cash__wrapper}>
      <Title modificator={'balance'}>Готівка</Title>
      {isLoading || isError ? (
        <LoadAndError />
      ) : (
        <ul className={styles.cash__balance}>
          {data.length === 0 ? (
            <div>Your cash empty</div>
          ) : (
            data.map((cash) => <CashItem key={nanoid()} cash={cash} />)
          )}
        </ul>
      )}
    </div>
  );
};

export default CashBalance;
