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
                <h1 className={style.parrafoTitle}>SOLDAMOS TUS IDEAS PARA HACER REALIDAD TUS PROYECTOS</h1>
                <h2 className={style.parrafoBody}>Somos una empresa con basta experiencia en el rubro, siempre brindando la mejor solución posible a tus necesidades. <br />
                    Poseemos una amplia variedad de modelos de productos que nos identifican y nos permiten cumplir con la expectativa y satisfacción de nuestros clientes. <br />
                    Brindamos un servicio personalizado para cada uno de tus requisitos.
                </h2>
                <a href="#contacto" >
                    <button>CONOCENOS</button>
                </a>
            </div>
            
        </div>
    )   
}
export default Inicio;
                

