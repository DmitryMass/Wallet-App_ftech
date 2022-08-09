import React from 'react';

import Button from '../../Button';
import Title from '../../Title/Title';

import styles from './my-cards.m.css';

const MyCards = () => {
  return (
    <div>
      <Title modificator={'balance'}>Мої картки</Title>
      <ul>
        <li>
          <span>Mono</span> <span>287.5 UAH</span>
          <Button modificator={'edit'}>Редагувати</Button>
        </li>
        <li>
          <span>Privat</span> <span>1000 USD</span>
          <Button modificator={'edit'}>Редагувати</Button>
        </li>
      </ul>
    </div>
  );
};

export default MyCards;
