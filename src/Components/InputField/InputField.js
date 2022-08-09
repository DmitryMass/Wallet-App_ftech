import React from 'react';

import styles from './input-field.m.css';

const InputField = ({
  field: { onChange, onBlur, name, value },
  form,
  type,
  id,
}) => {
  const error = form.errors[name] && form.touched[name];
  return (
    <div>
      {error && <div className='error'>{form.errors[name]}</div>}
      <input
        className={error ? styles.input__error : 'input'}
        id={id}
        name={name}
        type={type ? type : 'text'}
        value={value}
        onChange={onChange}
        onBlur={onBlur}
      />
    </div>
  );
};

export default InputField;
