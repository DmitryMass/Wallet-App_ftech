import React from 'react';
import { Formik, Field, Form } from 'formik';

import styles from './new-card-form.m.css';
import InputField from '../../InputField/InputField';

const NewCardForm = () => {
  const handleSubmit = (values, action) => {
    console.log({ ...values }, action);
  };
  return (
    <div className={styles.form__wrapper}>
      <Formik
        initialValues={{
          cardNumber: '',
          expDate: '',
          cvv: '',
          amount: '',
          currency: 'UAH',
        }}
        onSubmit={handleSubmit}
      >
        <Form>
          <Field
            id='cardNumber'
            name='cardNumber'
            type='number'
            component={InputField}
          />
          <div>
            <Field
              id='expDate'
              name='expDate'
              type='number'
              component={InputField}
            />
            <Field id='cvv' name='cvv' type='number' component={InputField} />
          </div>
          <div>
            <Field
              id='amount'
              name='amount'
              type='number'
              component={InputField}
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
