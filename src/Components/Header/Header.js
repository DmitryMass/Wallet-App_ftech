import React from 'react';

import styles from './header.m.css';
import i18n from '../../Utils/i18n';

const Header = () => {
  const onChange = (event) => {
    i18n.changeLanguage(event.target.value);
  };

  return (
    <header className={styles.header}>
      <div className='container'>
        <div className={styles.header__logo}>Jimmy-Co Wallet</div>
        <div className={styles.header__btns}>
          <input
            type='button'
            value='en'
            onClick={onChange}
            className={styles.header__lang}
          />
          <input
            type='button'
            value='ua'
            onClick={onChange}
            className={styles.header__lang}
          />
        </div>
      </div>
    </header>
  );
};

export default Header;
