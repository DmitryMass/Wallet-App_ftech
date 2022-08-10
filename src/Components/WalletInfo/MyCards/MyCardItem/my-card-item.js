import React from 'react';
import Button from '../../../Button';

import styles from './my-card-item.m.css';

const MyCardItem = ({ card }) => {
  const { amount, currency, scheme } = card;

  return (
    <li className={styles.card__item}>
      <span>{scheme}</span>
      <span>
        {amount} {currency}
      </span>
      <Button modificator={'edit'}>Редагувати</Button>
    </li>
  );
};

export default MyCardItem;
