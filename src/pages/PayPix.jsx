import React, { useEffect, useState } from "react";
import style from "./PayPix.module.css";
import HeaderPix from "../components/HeaderPix";
import Balance from "../components/Balance";
import iconCoins from "../assets/icon/iconCoins.png";
import iconCalendar from "../assets/icon/iconsCalendar.png";
import { useNavigate } from "react-router-dom";

function PayPix() {
  const [data, setData] = useState();
  const navigate = useNavigate();

  useEffect(() => {
    const date = new Date();
    const today = {
      day: date.getDate(),
      month: date.getMonth() + 1,
      year: date.getFullYear(),
    };

    setData(`${today.day}/${today.month}/${today.year}`);
  }, []);

  return (
    <div className="container">
      <HeaderPix titulo={"Revisão"} link={"/pagesendpix"} />
      <section className={style.sectionPayPix}>
        <Balance />

        <div className={style.boxDataPayPix}>
          <img src={iconCoins} alt="" />

          <p>R$ 0,01</p>
          <p>andrey@mail.com</p>
        </div>
      </section>

      <section className={style.sectionPayPix2}>
        <h2>Data de Pagamento</h2>

        <div className={style.boxDatePayPix}>
          <img src={iconCalendar} alt="" />
          <div>
            <h3>Agora</h3>
            <p>{data}</p>
          </div>
        </div>
      </section>

      <div className={style.containerPayPixButton}>
        <button
          onClick={() => {
            navigate("/");
          }}
        >
          Pagar R$ 0,01
        </button>
      </div>
    </div>
  );
}

export default PayPix;
