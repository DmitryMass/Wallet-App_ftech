import React, { useState, useEffect } from 'react';
import Button from '../../Button';
import CopyToClipboard from 'react-copy-to-clipboard';

import mastercard from '../../../Assets/Icons/mastercard.svg';
import visa from '../../../Assets/Icons/visa.svg';
import styles from './card-item.m.css';

const CardItem = ({ card }) => {
  const { id, bank, cvv, currency, amount, date, cardNumber, scheme, type } =
    card;
  const [copy, setCopy] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      if (copy) setCopy(false);
    }, 2000);
  }, [copy]);

  return (
    <div className={styles.card__wrapper}>
      <div className={styles.card__card}>
        <div className={styles.card__name}>
          <h5>{bank}</h5>
          <div className={styles.card__type}>
            {scheme === 'mastercard' ? (
              <div className={styles.card__scheme}>
                <object data={mastercard} type='' />
              </div>
            ) : scheme === 'visa' ? (
              <div className={styles.card__scheme}>
                <object data={visa} type='' />
              </div>
            ) : (
              <span>{scheme}</span>
            )}
            <span>{type}</span>
          </div>
        </div>
        <div>
          <span>{amount}</span> <span>{currency}</span>
        </div>
        <div className={styles.card__number}>
          <span>{cardNumber}</span>
          <div className={styles.card__copy}>
            <CopyToClipboard text={cardNumber} onCopy={() => setCopy(true)}>
              <button className={styles.card__copy_btn}>Copy</button>
            </CopyToClipboard>
            {copy ? <span>Copied</span> : null}
          </div>
        </div>
        <div>{date}</div>
      </div>
      <Button modificator={'reversal'}>Видалити</Button>
    </div>
  );
};

export default CardItem;
