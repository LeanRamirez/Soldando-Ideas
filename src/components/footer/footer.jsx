import React from "react";
import style from "./footer.module.css";

const Footer = () => {
    return (
        <footer className={style.footer}>
            <div className={style.container}>
                <div className={style.column}>
                    <h4>Contacto</h4>
                    <p>Dirección: 123 Calle Principal, Ciudad</p>
                    <p>Teléfonos: Leandro: +54 9 11 3364-8270 - Mariano: +54 9 115757-0742</p>
                    <p>Email: soldandoideas@hotmail.com</p>
                </div>
                <div className={style.column}>
                    <h4>Enlaces</h4>
                    <ul>
                        <li><a href="#inicio">INICIO</a></li>
                        <li><a href="#trabajos">QUE HACEMOS</a></li>
                        <li><a  href="#contacto">CONTACTO</a></li>
                    </ul>
                </div>
                <div className={style.column}>
                    <h4>Síguenos</h4>
                    <ul>
                        <li><a href="#">Facebook</a></li>
                        <li><a href="#">Twitter</a></li>
                        <li><a href="#">Instagram</a></li>
                    </ul>
                </div>
            </div>
            <div className={style.bottom}>
                <p>&copy; {new Date().getFullYear()} Tu Empresa. Todos los derechos reservados.</p>
            </div>
        </footer>
    );
}

export default Footer;