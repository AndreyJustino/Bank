import React from 'react'
import style from "./CardFavorite.module.css"
import iconNext from "../assets/icon/iconsNext.png"

function CardFavoritePay({nome,email, telefone}) {
  return (
    <div className={style.cardFavorite}>
        <div>
            <h1>{nome}</h1>
            <p>{email}</p>
            <p>{telefone}</p>
        </div>
        <img src={iconNext} alt="icon next" />

    </div>
  )
}

export default CardFavoritePay