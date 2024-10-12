import React from "react";
import style from "./Atalhos.module.css"

function Atalhos() {
    return (
      <div className={style.atalhos}>
        <button><span className="material-icons">favorite</span>Seguro de vida</button>
        <button><span className="material-icons">trending_up</span>Invest</button>
        <button><span className="material-icons">phone_iphone</span>Recargas</button>
        <button><span className="material-icons">update</span>Antecipar FGTS</button>
        <button><span className="material-icons">savings</span>Meu Porquinho</button>
      </div>
    );
  }

  export default Atalhos;