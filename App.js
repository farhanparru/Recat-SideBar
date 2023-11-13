import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; 
import { DogData } from './ProductSection/ProductData';
import LoginExam from './HeaderSection/LoginExam'
import Head from './HeaderSection/Head';
import Dog from './ProductSection/Dog';
import ViewProduct from './ProductSection/ViewProduct';
import { createContext } from 'react';
import { useState } from 'react';
import Cat from './ProductSection/Cat';
import Cart from './ProductSection/Cart';
import Bennar from './ProductSection/Bennar';
import Signup from './HeaderSection/Signup';
import Payment from './ProductSection/Payment';
import Catgeroy from './ProductSection/Catgeroy';
import Footer from './HeaderSection/Footer';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import CartB from './ProductSection/CartB';
import SideBar from './AdminPage/SideBar';
import 'bootstrap-icons/font/bootstrap-icons.css'
import Home from './AdminPage/Home';

export const Data=createContext()

function App() {
const [product,setproduct]=useState(DogData)
  const[cart,setcart]=useState([])
  const [userData,setUserData]=useState([])


  return (  
    <div>
   
    <Data.Provider  value={{product,setproduct,cart,setcart,userData,setUserData,}}>
      {/* <Head/> */}
        <Routes> 
          {/* <Route path='/Main' element={<Bennar/>}/>
          <Route path="/Signup" element={<Signup/>} />
          <Route path='/Login' element={<LoginExam/>}/>
          <Route path="/Dog" element={<Dog />} />
          <Route path="/ViewProduct/:id" element={<ViewProduct />} />
          <Route path="/Cat" element={<Cat/>}/>
          <Route path='/cart'  element={<Cart/>}/> 
          <Route path='/HomeImg' element={<Bennar/>}/>
          <Route path='/Payment' element={<Payment/>}/>
          <Route path='/All Catgeroy' element={<Catgeroy/>}/>   */}
        </Routes> 
        {/* <Footer/> */}
        
       
      </Data.Provider>
      <ToastContainer/>




      <div className='container-fluid bg-secondary min-vh-100'>
      <div className='row'>
       <div className='col-2 bg-white vh-100'>
       <SideBar/>
       </div>
       <div className='col'>
       <Home/>
       </div>
      
      </div>
     
    </div>
    </div>

  );
}

export default App;
