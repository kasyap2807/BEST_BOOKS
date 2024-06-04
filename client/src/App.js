import React , { useState } from 'react';

import { Routes, Route} from 'react-router-dom';
import './App.css';


import Mainpage from './Components/Mainpage';
// import Novelproducts from './Components/Novelproducts';
// import Kids from './Components/Kidsprod';
// import Stud from './Components/Studprod';
import Footer from './Components/Footer';
import LoginSignupPage from './Components/login';
import Cart from './Components/Cartpage';
import FormPage from './Components/placeorder1';
import PaymentPage from './Components/placeorder2';
import UserProfile from './Components/UserProfile';
import Products from './Components/Products';

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


function App() {
  
  return (
      <div className='app'>
    <Routes>
          <Route path="/" exact element={<Mainpage/>} />
          <Route path="/novelproducts/*" element={<Products/>}/>
          <Route path="/kids/*" element={<Products/>} />
          <Route path="/students/*" element={<Products/>} />
          <Route path="/login" element={<LoginSignupPage/>} />
          <Route path='/cart' element={<Cart/>}/>
          <Route path='/Payment' element = {<FormPage/>}/>
          <Route path='/Paymentgateway' element = {<PaymentPage/>}/>
          <Route path='/profile' element = {<UserProfile/>}/>
    </Routes>
    <Footer/>
  <ToastContainer />
     </div>
  );
}

export default App;
