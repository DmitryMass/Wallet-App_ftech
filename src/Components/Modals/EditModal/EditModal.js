import React from 'react';
import { Formik, Field, Form } from 'formik';
import InputField from '../../InputField/InputField';

import styles from './edit-modal.m.css';
import { editModalValidation } from '../../ValidationScheme/ValidationScheme';
import PropTypes from 'prop-types';

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
            <div className={styles.edit__amount}>
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
                className='form__select'
              >
                <option value='UAH'>UAH</option>
                <option value='USD'>USD</option>
                <option value='EUR'>EUR</option>
              </Field>
            </div>
            <div className={styles.edit__btnGroup}>
              <button className='button button__success' type='submit'>
                Зберегти
              </button>
              <button
                className='button button__form'
                type='button'
                onClick={setEdit}
              >
                Скасувати
              </button>
            </div>
          </Form>
        </Formik>
      </div>
    </div>
  );
};

EditModal.propTypes = {
  setEdit: PropTypes.func.isRequired,
  handleSubmitModalForm: PropTypes.func.isRequired,
};

export default EditModal;
