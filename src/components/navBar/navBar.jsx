import React from "react"
import logo from "../../assets/logo.png";
import style from "./navBar.module.css";
import { NavLink } from "react-router-dom";
const NavBar=()=>{
    return(
        <nav id="navBar" className={style.container}>
            <div>
                <img className={style.logo} src={logo} alt="logo"></img>
            </div>
            <div className={style.menu}>
                <ul>
                    <li><a href="#inicio"> INICIO </a></li>
                    <li><a href="#trabajos" > QUE HACEMOS </a></li>
                    <li><a href="#contacto" > CONTACTO </a></li>
                </ul>
            </div>
        </nav>
    )
}
export default NavBar;

                    
