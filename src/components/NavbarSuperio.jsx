import React from "react";
import style from "./NavbarSuperio.jsx"

function NavbarSuperior() {
    return (
      <div className="naveb-superior">
        <h1>Inter</h1>
        <div className='menu'>
          <button><span className="material-icons">attach_money</span>R$</button>
          <button><span className="material-icons">public</span>US$</button>
          <button><span className="material-icons">loop</span>Loop</button>
        </div>
      </div>
  
    );
  }

  export default NavbarSuperior;