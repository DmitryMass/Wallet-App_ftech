import React from 'react';
import PropTypes from 'prop-types';

const LoadAndError = ({ load, error }) => {
  if (load) {
    return <div>Loading...</div>;
  }
  if (error) {
    return <div>Error</div>;
  }
};

LoadAndError.propTypes = {
  load: PropTypes.bool,
  error: PropTypes.bool,
};

export default LoadAndError;
