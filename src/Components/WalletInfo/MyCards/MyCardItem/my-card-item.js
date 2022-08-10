import React from 'react';
import { useState } from 'react';
import Button from '../../../Button';
import EditModal from '../../../Modals/EditModal/EditModal';

import styles from './my-card-item.m.css';

const MyCardItem = ({ card }) => {
  const [edit, setEdit] = useState(false);
  const hanldeEditTrue = () => setEdit(true);
  const { amount, currency, scheme } = card;

  return (
    <>
      <li className={styles.card__item}>
        <span>{scheme}</span>
        <span>
          {amount} {currency}
        </span>
        <Button handleClick={hanldeEditTrue} modificator={'edit'}>
          Редагувати
        </Button>
      </li>
      {edit ? <EditModal card={card} setEdit={setEdit} /> : null}
    </>
  );
};

export default MyCardItem;
