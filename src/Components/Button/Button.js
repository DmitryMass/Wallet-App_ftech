import React from 'react';

import PropTypes from 'prop-types';

const Button = ({ children, modificator, handleClick }) => {
  return (
    <button onClick={handleClick} className={`button button__${modificator}`}>
      {children}
    </button>
  );
};

Button.propTypes = {
  children: PropTypes.string.isRequired,
  modificator: PropTypes.string,
  handleClick: PropTypes.func,
};

export default Button;
