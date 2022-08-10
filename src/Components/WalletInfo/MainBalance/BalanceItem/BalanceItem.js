import React from 'react';

const BalanceItem = ({ children, modificator }) => {
  return <div className={modificator}>{children}</div>;
};

export default BalanceItem;
