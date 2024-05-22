import React from "react";
import style from "./navBar.module.css";
import logo from "../../assets/logo.png";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope, faPhone } from "@fortawesome/free-solid-svg-icons";

const NavBar =()=>{

  return(
    <>
    <nav className={`navbar navbar-expand-md ${style.navbar}`}>
      <div className={`container-fluid ${style.container}`}>
        <div className={style.brand}>
            <div className={style.containerLogo}>
            <a className="navbar-brand">
              <img className={style.logo} src={logo} alt="logo"/>
            </a>
            <button className="navbar-toggler" 
            type="button" 
            data-bs-toggle="collapse" 
            data-bs-target="#navbarToggler" 
            aria-controls="navbarToggler" 
            aria-expanded="false" 
            aria-label="Toggle navigation" 
            >
              <span className="navbar-toggler-icon">
              </span>
            </button>
            </div>
            <div className={style.nameTitle}>
              <p> SOLDANDO IDEAS</p>
            </div>
        </div>
        <div className={style.containerMenu}>
          <div className={style.socialMenu}>
              <div className={style.socialContainer}>
              <a href="https://www.instagram.com/soldandoideas_herreria/" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon className={style.icon} icon={faInstagram}/>
            </a>
            <a href="https://www.instagram.com/soldandoideas_herreria/" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon className={style.icon} icon={faEnvelope}/>
            </a>
            <a href="https://www.instagram.com/soldandoideas_herreria/" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon className={style.icon} icon={faPhone}/>
            </a>
              </div>
            </div>
            
            <div className={`collapse navbar-collapse ${style.menu}`} id="navbarToggler">
            <ul className="navbar-nav">
              <li className="nav-item">
                <a className="nav-link" 
                aria-current="page" 
                href="#inicio">INICIO</a>
              </li> 
              <li className="nav-item">
                <a className="nav-link" href="#trabajos">TRABAJOS</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" aria-disabled="true" href="#contacto">CONTACTO</a>
              </li>
            </ul>
          </div>

        </div>
      
      </div>
</nav>
    </>
    
  )
}

export default NavBar;


