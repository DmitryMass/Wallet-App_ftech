import React from 'react';

const LoadAndError = ({ load, error }) => {
  if (load) {
    return <div>Loading...</div>;
  }
  if (error) {
    return <div>Error</div>;
  }
};

export default LoadAndError;
