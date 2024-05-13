import React, { useState } from "react";
import style from "./contacto.module.css";

const Contacto = () => {
    const [formData, setFormData] = useState({
        nombre: "",
        telefono: "",
        consulta: ""
    });
    const [errors, setErrors] = useState({});

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = (event) => {
        event.preventDefault();

        const newErrors = {};
        const nombreRegex = /^[^\d]+$/;
        const telefonoRegex = /^\d{10}$/;

        if (!formData.nombre.trim()) {
            newErrors.nombre = "El nombre es requerido";
        } else if (!nombreRegex.test(formData.nombre.trim())) {
            newErrors.nombre = "El nombre no puede contener números";
        }

        if (!telefonoRegex.test(formData.telefono)) {
            newErrors.telefono = "Teléfono debe tener 10 dígitos";
        }

        
        setErrors(newErrors);

        if (Object.keys(newErrors).length === 0) {
            const subject = "Consulta";
            const body = `Nombre: ${formData.nombre} Teléfono: ${formData.telefono} Consulta: ${formData.consulta}`;
            const mailtoLink = `mailto:${formData.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

            window.open(mailtoLink, "_blank");

            setFormData({
                nombre:"",
                telefono:"",
                consulta:""
            })
        }
    };

    return (
        <div id="contacto" className={style.contact}>
            <h2>CONTACTO</h2>
            <form className={style.form} onSubmit={handleSubmit}>
                <div className={style.contactForm}>
                    
                    <div className={`mb-3 ${style.formItem}`}>
                        <label className="form-label" htmlFor="nombre">Nombre: </label>
                        <input 
                            className={`form-control ${style.input}`} 
                            type="text"
                            name="nombre"
                            value={formData.nombre}
                            onChange={handleInputChange}
                            />
                            {errors.nombre && <span className={style.errors}>{errors.nombre}</span>}
                    </div>
                    
                    <div className={`mb-3 ${style.formItem}`}>
                        <label className="form-label" htmlFor="telefono">Telefono: </label>
                        <input 
                            className={`form-control ${style.input}`} 
                            type="tel" 
                            name="telefono"
                            inputMode="numeric"
                            value={formData.telefono}
                            onChange={handleInputChange}
                            />
                            {errors.telefono && <span className={style.errors}>{errors.telefono}</span>}
                    </div>
                    
                    <div className={`mb-3 ${style.formItem}`}>
                        <label className="form-label" htmlFor="consulta">Consulta: </label>
                        <textarea 
                            className={`form-control ${style.inputArea}`} 
                            type="text"
                            name="consulta"
                            value={formData.consulta}
                            onChange={handleInputChange}
                            />
                    </div>
                    <div className={style.button}>
                        <button type="submit">ENVIAR CONSULTA</button>
                    </div>
                </div>
            </form>
        </div>
    );
}

export default Contacto;

