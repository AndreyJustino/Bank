import React from "react";
import style from "./CardHistorical.module.css";
import iconNext from "../assets/icon/iconsNext.png";

function CardHistorical({ valor, data, id }) {
  const date = new Date(data)
  const formattedDate = date.toLocaleDateString('pt-BR');
  
  return (
    <div className={style.cardFavorite}>
      <div>
        <h1>R$ {valor}</h1>
        <p>{formattedDate}</p>
        <p>{id}</p>
      </div>
      <img src={iconNext} alt="icon next" />
    </div>
  );
}

export default CardHistorical;
