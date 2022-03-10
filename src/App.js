import './App.css';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import About from './pages/about';
import Menu from './pages/menu';
import Contact from './pages/contact';
import Footer from './components/Footer';
import Dropdown from './components/Dropdown';
import { Route, Routes } from "react-router-dom";
import React, { useState, useEffect } from 'react';

function App() {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const hideMenu = () => {
      if (window.innerWidth > 768 && isOpen) {
        setIsOpen(false);
      }
    };

    window.addEventListener('resize', hideMenu);

    return () => {
      window.removeEventListener('resize', hideMenu);
    };
  });

  return (
    <>
      <Navbar toggle={toggle} />
      <Dropdown isOpen={isOpen} toggle={toggle} />
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/menu' element={<Menu/>} />
        <Route path='/about' element={<About/>} />
        <Route path='/contact' element={<Contact />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
