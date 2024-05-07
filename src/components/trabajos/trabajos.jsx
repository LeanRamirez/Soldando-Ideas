import React from "react";

import style from "../trabajos/trabajos.module.css"

import img1 from "../../assets/img1.png";
import img3 from "../../assets/img3.png";
import img4 from "../../assets/img4.png";
import img5 from "../../assets/img5.png";
import img6 from "../../assets/img6.png";
import img7 from "../../assets/img7.jpg";

const Trabajos=()=>{
    return(
         <div id="trabajos" className={style.container}>
            <div className={style.info}>
                <h1>¿QUE HACEMOS?</h1>
                <p>
                    Armado, ventas y colocación de rejas, puertas, portones, escaleras, etc.<br/>
                    Brindamos garantia de trabajo, materiales de primera calidad y asesoramiendo personalizado por su propios dueños.
                </p>
            </div>
            <div className={style.containerImg}>
                <div className={style.imagenContainer}>
                    <img src={img1} alt="img1"/>
                    <p>Portico vidrio repartido</p>
                </div>
                <div className={style.imagenContainer}>
                    <img src={img7} alt="img3"/>
                    <p>Escalera de hierro y madera</p>
                </div>
                <div className={style.imagenContainer}>
                    <img src={img5} alt="img3"/>
                    <p>Pergola con madera y chapa translucida</p>
                </div>
                <div className={style.imagenContainer}>
                    <img src={img3} alt="img3"/>
                    <p>Baranda con chapa decorativa</p>
                </div>
                <div className={style.imagenContainer}>
                    <img src={img4} alt="img3"/>
                    <p>Frente de parrillas a medida</p>
                </div>
                <div className={style.imagenContainer}>
                    <img src={img6} alt="img7" />
                    <p>Fogoneros a medida</p>
                </div>
            </div>
         </div>
    )
}

export default Trabajos;

