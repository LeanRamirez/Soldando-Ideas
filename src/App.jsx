import React from 'react';

import './App.css'

import Inicio from './components/inicio/inicio'
import NavBar from './components/navBar/navBar'
import Trabajos from './components/trabajos/trabajos'
import Contacto from './components/contacto/contacto'
import Footer from './components/footer/footer'
import WhatsAppButton from './components/whatsAppButton/whatsAppButton';




function App() {

  return (
    <div>
          <NavBar/>
          <Inicio/>
          <Trabajos/>
          <Contacto/>
          <Footer/>
          <WhatsAppButton/>
    </div>
  )
}
      
export default App;
        
