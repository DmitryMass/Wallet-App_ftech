import React from 'react';
import Header from './Header/Header';
import Footer from './Footer/Footer';
import WalletInfo from './WalletInfo/WalletInfo';
import { Routes, Route } from 'react-router-dom';

const App = () => {
  return (
    <div className='app'>
      <div className='wrapper'>
        <Header />
        <Routes>
          <Route path='/' element={<WalletInfo />} />
        </Routes>
      </div>
      <Footer />
    </div>
  );
};

export default App;
