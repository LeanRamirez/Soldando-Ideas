import React from "react";
import style from "./navBar.module.css";

import logo from "../../assets/logo.png";

const NavBar =()=>{
  return(
    <nav className="navbar navbar-expand-md navbar-dark">
      <div className={`container-fluid ${style.container}`}>
          <a className="navbar-brand">
            <img className={style.logo} src={logo} alt="logo"/>
          </a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarToggler" aria-controls="navbarToggler" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className={`collapse navbar-collapse ${style.menu}`} id="navbarToggler">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a className="nav-link" aria-current="page" href="#inicio">INICIO</a>
            </li> 
            <li className="nav-item">
              <a className="nav-link" href="#trabajos">TRABAJO</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" aria-disabled="true" href="#contacto">CONTACTO</a>
            </li>
          </ul>
        </div>
      </div>
</nav>
  )
}

export default NavBar;


