import React from 'react';
import { Formik, Field, Form } from 'formik';
import InputField from '../../InputField/InputField';

import styles from './edit-modal.m.css';
import { editModalValidation } from '../../ValidationScheme/ValidationScheme';

const EditModal = ({ setEdit, handleSubmitModalForm }) => {
  return (
    <div className={styles.edit__modal} onClick={setEdit}>
      <div
        className={styles.edit__content}
        onClick={(e) => e.stopPropagation()}
      >
        <Formik
          initialValues={{
            amount: '',
            currency: 'UAH',
          }}
          onSubmit={handleSubmitModalForm}
          validationSchema={editModalValidation}
        >
          <Form>
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
            <div>
              <button type='submit' className={styles.edit__save}>
                Зберегти
              </button>
              <button type='button' onClick={setEdit}>
                Скасувати
              </button>
            </div>
          </Form>
        </Formik>
      </div>
    </div>
  );
};

export default EditModal;
