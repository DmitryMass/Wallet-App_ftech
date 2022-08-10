import React from 'react';
import { useGetAllCardsQuery } from '../../Store/Slice/apiSlice';

import Button from '../Button';
import CardItem from './CardItem/CardItem';

import { nanoid } from 'nanoid';
import styles from './cards-menu.m.css';
import AddCardModal from '../Modals/AddCardModal/AddCardModal';
import { useState } from 'react';

const CardsMenu = () => {
  const [modal, setModal] = useState(false);
  const { data = [], isLoading, isError } = useGetAllCardsQuery();

  if (isLoading) {
    return <div>Loading...</div>;
  }
  if (isError) {
    return <div>Sorry error...</div>;
  }
  return (
    <div>
      <nav className={styles.cards__navigate}>
        <Button
          handleClick={() => setModal((prev) => !prev)}
          modificator={'success'}
        >
          Додати картку
        </Button>
        <Button modificator={'success'}>Додати готівку</Button>
      </nav>
      <div>
        {data.length === 0 ? (
          <div>На данний час у вас немає банківських карт</div>
        ) : (
          data.map((card) => <CardItem key={nanoid()} card={card} />)
        )}
      </div>
      {modal ? <AddCardModal setModal={setModal} /> : null}
    </div>
  );
};

export default CardsMenu;
