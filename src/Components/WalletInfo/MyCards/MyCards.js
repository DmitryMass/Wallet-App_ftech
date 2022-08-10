import React from 'react';

import { nanoid } from 'nanoid';
import { useGetAllCardsQuery } from '../../../Store/Slice/apiSlice';

import Button from '../../Button';
import Title from '../../Title/Title';

import styles from './my-cards.m.css';
import MyCardItem from './MyCardItem/my-card-item';
import LoadAndError from '../../LoadingAndError/load-n-error';

const MyCards = () => {
  const { data = [], isLoading, isError } = useGetAllCardsQuery();

  return (
    <div className={styles.cards__wrapper}>
      <Title modificator={'balance'}>Мої картки</Title>
      {isLoading || isError ? (
        <LoadAndError load={isLoading} error={isError} />
      ) : (
        <ul>
          {data.map((el) => (
            <MyCardItem key={nanoid()} card={el} />
          ))}
        </ul>
      )}
    </div>
  );
};

export default MyCards;
