import React from "react";
import style from "./CardFavorite.module.css";
import iconNext from "../assets/icon/iconsNext.png";

function CardHistorical({ valor, data, id }) {
  return (
    <div className={style.cardFavorite}>
      <div>
        <h1>{valor}</h1>
        <p>{data}</p>
        <p>{id}</p>
      </div>
      <img src={iconNext} alt="icon next" />
    </div>
  );
}

export default CardHistorical;
