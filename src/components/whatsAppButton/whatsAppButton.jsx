import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import style from "./whatsAppButton.module.css";

const WhatsAppButton = () => {
  const phoneNumber = "1133648270";

  const handleWhatsAppClick = () => {
    window.open(`https://wa.me/${phoneNumber}`, "_blank");
  };

  return (
    <button className={style.whatsappBtn} onClick={handleWhatsAppClick}>
      <FontAwesomeIcon className={style.button} icon={faWhatsapp} />
    </button>
  );
};

export default WhatsAppButton;
            