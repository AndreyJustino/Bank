import React from "react";
import style from "./Balance.module.css";

function Balance() {
  return (
    <div className={style.containerBalanceComponents}>
      <p>Saldo em conta</p>
      <p>R$ xxxx</p>
    </div>
  );
}

export default Balance;
