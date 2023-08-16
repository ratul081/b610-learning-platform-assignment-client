import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../../Pages/Share/Header/Header';
import Footer from '../../Pages/Share/Footer/Footer';

const Main = () => {
  return (
    <div>
      <div className='lg:mx-5'>
        <Header></Header>
        <Outlet></Outlet>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default Main;