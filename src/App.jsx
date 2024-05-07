import React from 'react';
// import { useEffect } from 'react';
import { Routes, Route } from "react-router-dom";
// import scroll from "./components/scroll/scroll.js"

import './App.css'

import Inicio from './components/inicio/inicio'
import NavBar from './components/navBar/navBar'
import Trabajos from './components/trabajos/trabajos'
import Contacto from './components/contacto/contacto'
import Footer from './components/footer/footer'


function App() {

  return (
    <div>
      <NavBar/>
        
          <Inicio/>
          <Trabajos/>
         <Contacto/>
        
        <Footer/>
      
    </div>
  )
}

export default App;
        
