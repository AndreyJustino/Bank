import React from "react";
import style from "./SaldoArea.module.css"

function SaldoArea() {
    return (
      <div className="saldo-area">
        <h2>R$ ***</h2>
        <div className="Opcoes-saldo">
          <button><span className="material-icons">qr_code_scanner</span>Pix</button>
          <button><span className="material-icons">payment</span>Pagar</button>
          <button><span className="material-icons">credit_card</span>Cartões</button>
        </div>
      </div>
    );
  }

  export default SaldoArea;