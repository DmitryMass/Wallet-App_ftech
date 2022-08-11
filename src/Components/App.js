import React, { Suspense } from 'react';
import Header from './Header/Header';
import Footer from './Footer/Footer';
import WalletInfo from './WalletInfo/WalletInfo';
import { Routes, Route } from 'react-router-dom';
import '../Utils/i18n';

// Route - так же не обязателен в данном проекте, поставил для будущий доработок
const App = () => {
  return (
    <Suspense fallback={'Loading...'}>
      <div className='app'>
        <div className='wrapper'>
          <Header />
          <Routes>
            <Route path='/' element={<WalletInfo />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </Suspense>
  );
};

export default App;
