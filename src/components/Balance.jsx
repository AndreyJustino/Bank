import React from "react";
import style from "./Balance.module.css";

function Balance({balance}) {
  return (
    <div className={style.containerBalanceComponents}>
      <p>Saldo em conta</p>
      <p>R$ {balance}</p>
    </div>
  );
}

export default Balance;
