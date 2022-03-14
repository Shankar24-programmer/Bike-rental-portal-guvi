import React from 'react'
import Page1 from './components/Page1'
import Home from './components/Home'
import Login from './components/Login'
import Signup from './components/Signup'
import Cart from './components/Cart'
import bootstrap from '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
      <Route exact path="/" element={<Page1/>}/>
      <Route path="/home" element={<Home/>}/>
      <Route path="/login" element={<Login/>}/>
      <Route path="/signup" element={<Signup/>}/>
      <Route path="/cart" element={<Cart/>}/>

      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
