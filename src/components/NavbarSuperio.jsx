import React from "react";
import style from "./NavbarSuperior.module.css"

function NavbarSuperior() {
    return (
      <div className={style.naveb_superior}>
        <h1>Inter</h1>
        <div className={style.menu}>
          <button><span className="material-icons">attach_money</span>R$</button>
          <button><span className="material-icons">public</span>US$</button>
          <button><span className="material-icons">loop</span>Loop</button>
        </div>
      </div>
  
    );
  }

  export default NavbarSuperior;