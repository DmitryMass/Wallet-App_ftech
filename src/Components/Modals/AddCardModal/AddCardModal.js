import React from 'react';
import NewCardForm from '../../Forms/NewCardForm/NewCardForm';
import Title from '../../Title/Title';

import styles from './add-card-modal.m.css';

const AddCardModal = ({ setModal }) => {
  return (
    <div className={styles.modal} onClick={() => setModal(false)}>
      <div
        className={styles.modal__content}
        onClick={(e) => e.stopPropagation()}
      >
        <Title>Додавання картки</Title>
        <NewCardForm />
      </div>
    </div>
  );
};

export default AddCardModal;
