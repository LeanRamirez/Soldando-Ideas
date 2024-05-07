import React from "react";
import style from "./inicio.module.css";
import img from "../../assets/img2.png";


const Inicio=()=>{
    return(
        <div id="inicio" className={style.container}>
            <div>
                <img src={img} alt="img" />
            </div>
            <div className={style.parrafo}>
                <h1>SOLDANDO IDEAS</h1>
                <h2>Somos una empresa con basta experiencia en el rubro,<br/> siempre brindando la mejor solución posible.<br/>
                    Poseemos una amplia variedad de modelos de productos que nos identifican y nos permiten cumplir con la expectativa y satisfacción de nuestros clientes.
                    Brindamos un servicio personalizado cumpliendo con todos los requerimientos para la satisfaccióndel cliente
                </h2>
                <a href="contacto" to="/contacto">
                    <button>CONOZCA MAS</button>
                </a>
            </div>
            
        </div>
    )   
}
export default Inicio;
                

