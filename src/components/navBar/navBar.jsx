import React from "react"
import logo from "../../assets/logo.png";
import style from "./navBar.module.css";
const NavBar=()=>{
    return(
        <nav className={style.container}>
            <div>
                <img className={style.logo} src={logo} alt="logo"></img>
            </div>
            <div className={style.menu}>
                <ul>
                    <li><a href="/">INICIO</a></li>
                    <li><a href="sobre nosotros">QUIENES SOMOS</a></li>
                    <li><a href="servicios">QUE HACEMOS</a></li>
                    <li><a href="contacto">CONTACTO</a></li>
                </ul>
            </div>
        </nav>
    )
}
export default NavBar;

                    
