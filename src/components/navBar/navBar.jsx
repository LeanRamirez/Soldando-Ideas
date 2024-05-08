import React, { useState } from "react";
import logo from "../../assets/logo.png";
import style from "./navBar.module.css";

const NavBar = () => {
  const [showMenu, setShowMenu] = useState(false);

  return (
    <nav className={style.nav}>
      <div className={style.logo}>
        <img src={logo} alt="logo"/>
      </div>
      <div className={style.menuToggle} onClick={() => setShowMenu(!showMenu)}>
        <i className={showMenu ? "fas fa-times" : "fas fa-bars"}></i>
      </div>
      <ul className={showMenu ? style.menuActive : style.menu}>
        <li><a href="#inicio">Inicio</a></li>
        <li><a href="#trabajos">Trabajos</a></li>
        <li><a href="#contacto">Contacto</a></li>
      </ul>
    </nav>
  );
}

export default NavBar;

                    
