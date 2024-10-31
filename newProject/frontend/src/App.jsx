import React from 'react';
import "./App.css";
import{BrowserRouter as Router, Routes,Route} from "react-router-dom";
import Home from './components/Home';
import Login from './components/Login';
import Register from './components/Register';
import Navbar from './components/Navbar';
import { Toaster } from 'react-hot-toast';

const App = () => {
  return (
    <>
    <Router>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />
      </Routes>
      <Toaster />
    </Router>
  
    </>
  )
}

export default App
