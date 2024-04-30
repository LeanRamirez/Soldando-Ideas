import React from "react";
import style from "./contacto.module.css"

const Contacto = ()=>{
    return(
        <div className={style.contact}>
            <h2>CONTACTO</h2>
            <form className={style.form}>
                <div className={style.contactForm}>
                    <div className={style.formItem}>
                        <label htmlFor="nombre">Nombre: </label>
                        <input className={style.input} type="text" />
                    </div>
                    <div className={style.formItem}>
                        <label htmlFor="telefono">Telefono: </label>
                        <input className={style.input} type="number"/>
                    </div>
                    <div className={style.formItem}>
                        <label htmlFor="email">Email: </label>
                        <input className={style.input} type="email"/>
                    </div>
                    <div className={style.formItem}>
                        <label htmlFor="consulta">Consulta: </label>
                        <input className={style.inputArea} type="text"/>
                    </div>
                    <div>
                        <button>ENVIAR</button>
                    </div>
                </div>
            </form>
        </div>
    )
}

export default Contacto;
