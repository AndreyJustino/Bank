import React, { useEffect, useState } from "react";
import style from "./PayPixOption.module.css";
import iconCamera from "../assets/icon/iconsCamera.png";
import iconCopia from "../assets/icon/iconsCopiar.png";
import iconMuseus from "../assets/icon/iconsMuseu.png";
import CardHistorical from "../components/CardHistorical";
import HeaderPix from "../components/HeaderPix";
import { useNavigate } from "react-router-dom";
import Cookies from "js-cookie";

function PayPixOption() {
  const [keyPix, setKeyPix] = useState()
  const navigate = useNavigate()

  useEffect(() => {
    const auth = Cookies.get("auth")

    if(!auth){
      navigate("/register")
    }
  }, [])

  async function sendPix() {
    Cookies.set("keyPix", keyPix)
    navigate("/pagesendpix")
  }

  return (
    <div className="container">
      <HeaderPix titulo={"Pagar com pix"} link={"/"} />

      <section className={style.sectionPayOption}>
        <div className={style.boxQuestionPayOption}>
          <h2>Para quem você quer pagar?</h2>
          <button>Colar chave</button>
        </div>

        <input
          type="email"
          required
          placeholder="Digite o e-mail"
          className={style.inputPayOption}
          onChange={(e) => {
            setKeyPix(e.target.value)
          }}
          onKeyDown={(event) => {
            const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/

            if(regex.test(keyPix) && event.key == "Enter"){
              sendPix()
            }
          }}
        />

        <div className={style.containerButtonPayOption}>
          <h2>Outros pagamentos</h2>
          <div className={style.boxButtonPayOption}>
            <button>
              <img src={iconCamera} alt="icon camera" />
              <p>Leitor de Chave e QR Code</p>
            </button>
            <button>
              <img src={iconCopia} alt="icon copia e cola" />
              <p>Pix Copia e Cola</p>
            </button>
            <button>
              <img src={iconMuseus} alt="icon museu" />
              <p>Agência e conta</p>
            </button>
          </div>
        </div>
      </section>
      <section className={style.sectionFavoritePayOption}>
        <div className={style.textFavoritePay}>
          <h1>Historico de transações</h1>
          <p>Acessar todos</p>
        </div>

        <CardHistorical
          data={"12/12/2021"}
          valor={"R$ XX,XX"}
          id={"XXXXXXXXXXX"}
        />

        <CardHistorical
          data={"12/12/2021"}
          valor={"R$ XX,XX"}
          id={"XXXXXXXXXXX"}
        />
        
      </section>
    </div>
  );
}

export default PayPixOption;
