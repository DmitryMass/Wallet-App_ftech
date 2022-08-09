import React from 'react';
import Button from '../../Button';

import styles from './card-item.m.css';

const CardItem = ({
  card: { id, bank, cvv, currency, amount, date, cardNumber, scheme },
}) => {
  return (
    <div className={styles.card__wrapper}>
      <div className={styles.card__card}>
        <div className={styles.card__name}>
          <h5>{bank}</h5>
          <span>{scheme}</span>
        </div>
        <div>
          <span>{amount}</span> <span>{currency}</span>
        </div>
        <div>
          <span>{cardNumber}</span>
          <button>copy</button>
        </div>
        <div>{date}</div>
      </div>
      <Button modificator={'reversal'}>Видалити</Button>
    </div>
  );
};

export default CardItem;
