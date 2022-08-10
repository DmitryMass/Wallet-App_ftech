import React from 'react';
import { Formik, Field, Form } from 'formik';
import InputField from '../../InputField/InputField';

import styles from './edit-modal.m.css';
import { useUpdateCardMutation } from '../../../Store/Slice/apiSlice';
import { editModalValidation } from '../../ValidationScheme/ValidationScheme';

const EditModal = ({ card, setEdit }) => {
  const [updateCard] = useUpdateCardMutation();

  const handleSubmitForm = async (values, { resetForm }) => {
    try {
      await updateCard({ ...card, ...values });
      setEdit(false);
      resetForm();
    } catch (e) {
      alert('Problem with updating');
    }
  };

  return (
    <div>
      <Formik
        initialValues={{
          amount: '',
          currency: 'UAH',
        }}
        onSubmit={handleSubmitForm}
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
            <button type='button' onClick={() => setEdit(false)}>
              Скасувати
            </button>
          </div>
        </Form>
      </Formik>
    </div>
  );
};

export default EditModal;
