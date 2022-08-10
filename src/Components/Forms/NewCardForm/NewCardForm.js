import React from 'react';
import { Formik, Field, Form } from 'formik';

import InputField from '../../InputField/InputField';
import { newCardValidation } from '../../ValidationScheme/ValidationScheme';
import luhnCheck from '../../ValidationScheme/LuhnValidator';
import { useLazyGetCardSchemeQuery } from '../../../Store/Slice/checkerSliceApi';

import styles from './new-card-form.m.css';
import { useAddNewCardMutation } from '../../../Store/Slice/apiSlice';

const NewCardForm = ({ setModal }) => {
  const [getCardScheme] = useLazyGetCardSchemeQuery();
  const [addNewCard] = useAddNewCardMutation();

  const handleSubmit = async (values, { resetForm }) => {
    const checkNum = Number(
      values.cardNumber.toString().split('').slice(0, 8).join('')
    );
    try {
      if (!luhnCheck(values.cardNumber.toString())) {
        throw new Error();
      }
      const { data } = await getCardScheme(checkNum);
      await addNewCard({
        ...values,
        scheme: data.scheme,
        type: data.type,
      });
      setModal(false);
    } catch (e) {
      alert('Wrond Card Number');
    }
    resetForm();
  };

  return (
    <div className={styles.form__wrapper}>
      <Formik
        initialValues={{
          cardNumber: '',
          date: '',
          cvv: '',
          amount: '',
          currency: 'UAH',
          bank: '',
        }}
        onSubmit={handleSubmit}
        validationSchema={newCardValidation}
      >
        <Form>
          <Field
            id='bank'
            name='bank'
            component={InputField}
            placeholder='Mono, privat etc'
          />
          <Field
            id='cardNumber'
            name='cardNumber'
            type='number'
            component={InputField}
            placeholder='Type your card number'
          />

          <div>
            <Field
              id='date'
              name='date'
              component={InputField}
              placeholder='MM/YY'
            />
            <Field
              id='cvv'
              name='cvv'
              type='number'
              component={InputField}
              placeholder='Type card cvv'
            />
          </div>
          <div className={styles.form__amount}>
            <Field
              id='amount'
              name='amount'
              type='number'
              component={InputField}
              placeholder='Amount money'
            />
            <Field
              className='form__select'
              component='select'
              id='currency'
              name='currency'
              type='select'
            >
              <option value='UAH'>UAH</option>
              <option value='USD'>USD</option>
              <option value='EUR'>EUR</option>
            </Field>
          </div>
          <div className={styles.form__btnGroup}>
            <button className='button button__success' type='submit'>
              Додати картку
            </button>
            <button
              className={`button button__form ${styles.form__btnCancel}`}
              onClick={() => setModal(false)}
              type='button'
            >
              Скасувати
            </button>
          </div>
        </Form>
      </Formik>
    </div>
  );
};

export default NewCardForm;
