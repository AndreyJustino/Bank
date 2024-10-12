import React from "react";
import style from "./NavbarInferior.module.css"

function NavbarInferior() {
    return (
        <div className={style.navebar_inferior}>
            <button><span className="material-icons">home</span>Início</button>
            <button><span className="material-icons">trending_up</span>Invest</button>
            <button><span className="material-icons">shopping_bag</span>Shop</button>
            <button><span className="material-icons">menu</span>Todos</button>
        </div>
    );
}

export default NavbarInferior;