import React from 'react';

import styles from './input-field.m.css';

const InputField = ({
  field: { onChange, onBlur, name, value },
  form,
  type,
  id,
  placeholder,
}) => {
  const error = form.errors[name] && form.touched[name];

  return (
    <div className={styles.input__wrapper}>
      {error && <div className={styles.error}>{form.errors[name]}</div>}
      <input
        className={error ? styles.input__error : styles.input}
        id={id}
        name={name}
        type={type ? type : 'text'}
        value={value}
        onChange={onChange}
        onBlur={onBlur}
        placeholder={placeholder}
      />
    </div>
  );
};

export default InputField;
