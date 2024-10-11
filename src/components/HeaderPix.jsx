import React from "react";
import { Link } from "react-router-dom";
import iconBack from "../assets/icon/iconBack.png";
import style from "./HeaderPix.module.css";

function HeaderPix({ titulo, link }) {
  return (
    <header className={style.headerPayPixComponents}>
      <Link to={link}>
        <img src={iconBack} alt="icon" />
      </Link>
      <h1>{titulo}</h1>
    </header>
  );
}

export default HeaderPix;
