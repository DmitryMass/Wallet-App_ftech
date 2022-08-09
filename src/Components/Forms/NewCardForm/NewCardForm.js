import React, { useState } from 'react';
import { Formik, Field, Form } from 'formik';

import InputField from '../../InputField/InputField';
import { newCardValidation } from '../../ValidationScheme/ValidationScheme';
import {
  getCardScheme,
  useGetCardSchemeQuery,
} from '../../../Store/Slice/checkerSliceApi';

import styles from './new-card-form.m.css';
import { useAddNewCardMutation } from '../../../Store/Slice/apiSlice';
import { useDispatch, useSelector } from 'react-redux';

const NewCardForm = () => {
  // const dispatch = useDispatch();
  // const data = dispatch(getCardScheme(5355));
  // console.log(data);
  const [checker, setChecker] = useState('');
  const { data = {}, isError } = useGetCardSchemeQuery(checker);
  // const [addNewCard] = useAddNewCardMutation();
  const handleSubmit = async (values, { resetForm }) => {
    const checkNum = Number(
      values.cardNumber.toString().split('').slice(0, 6).join('')
    );
    // const data = dispatch(getCardScheme(checkNum)).then((data) =>
    //   console.log(data)
    // );
    setChecker(checkNum);
    try {
      const newData = await data;
      await addNewCard({ ...values, scheme: newData.scheme });
    } catch (e) {
      alert(`Sorry ${e.message}`);
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
              type='number'
              component={InputField}
              placeholder='Type expire date'
            />
            <Field
              id='cvv'
              name='cvv'
              type='number'
              component={InputField}
              placeholder='Type card cvv'
            />
          </div>
          <div>
            <Field
              id='amount'
              name='amount'
              type='number'
              component={InputField}
              placeholder='Amount money'
            />
            <Field
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
          <button type='submit'>Submit</button>
        </Form>
      </Formik>
    </div>
  );
};

export default NewCardForm;
