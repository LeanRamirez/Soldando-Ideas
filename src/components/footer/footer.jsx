import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarkerAlt, faPhone, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';
import logoTransp from "../../assets/logoTransp.png";
import style from "./footer.module.css";
import logoSem from "../../assets/logoSem1.png"

const Footer = () => {

    const direccion ="https://www.google.com/maps/@-34.4652218,-58.6423515,20z"
    return (
        <footer className={style.footer}>
            <div className={style.container}>
                <div className={style.logoContainer}>
                <img className={style.logo} src={logoTransp} alt="logo"/>
                <h3 className={style.brand}>SOLDANDO IDEAS</h3>
                </div>
                <div className={style.column}>
                    <h2>Contacto</h2>
                    <p><FontAwesomeIcon className={style.icon} icon={faMapMarkerAlt}/> Dirección: Cuba 1071, El talar, Tigre, Buenos Aires.</p>
                    <p><FontAwesomeIcon className={style.icon} icon={faPhone}/>Teléfonos: Leandro: +54 9 11 3364-8270 - Mariano: +54 9 115757-0742</p>
                    <p><FontAwesomeIcon className={style.icon} icon={faEnvelope}/>Email: soldandoideas@hotmail.com</p>
                    <a href={direccion} target="_blank" rel="noopener noreferrer">
                    <FontAwesomeIcon className={style.icon} icon={faMapMarkerAlt}/>Ver ubicación</a>
                </div>
                <div className={style.instagram}>
                    <h2 className={style.follow}>Seguinos</h2>
                    <ul className={style.linkUl}>
                        <li><a href="https://www.instagram.com/soldandoideas_herreria/" target="_blank" rel="noopener noreferrer">
                            <FontAwesomeIcon className={style.icon} icon={faInstagram}/>Instagram</a></li>
                    </ul>
                </div>
                <div className={style.column}>
                    <h2>Enlaces</h2>
                    <ul className={style.linkUl}>
                        <li><a className={style.links} href="#inicio">INICIO</a></li>
                        <li><a className={style.links} href="#trabajos">QUE HACEMOS</a></li>
                        <li><a  className={style.links} href="#contacto">CONTACTO</a></li>
                    </ul>
                </div>
                
            </div>
            <div className={style.bottom}>
                <p>&copy; {new Date().getFullYear()} 
                    <img className={style.logoSem} src={logoSem} alt="" />
                    Desarrollo web
                </p>
            </div>
        </footer>
    );
}

export default Footer;