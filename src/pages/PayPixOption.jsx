import React from "react";
import style from "./PayPixOption.module.css";
import iconCamera from "../assets/icon/iconsCamera.png";
import iconCopia from "../assets/icon/iconsCopiar.png";
import iconMuseus from "../assets/icon/iconsMuseu.png";
import CardFavoritePay from "../components/CardFavoritePay";
import HeaderPix from "../components/HeaderPix";

function PayPixOption() {
  return (
    <div className={style.containerPayPix}>
      <HeaderPix titulo={"Pagar com pix"} link={"/"} />

      <section className={style.sectionPayOption}>
        <div className={style.boxQuestionPayOption}>
          <h2>Para quem você quer pagar?</h2>
          <button>Colar chave</button>
        </div>

        <input
          type="text"
          placeholder="Digite o e-mail ou o telefone"
          className={style.inputPayOption}
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
          <h1>Favoritos</h1>
          <p>Acessar todos</p>
        </div>

        <CardFavoritePay
          email={"xxxxxx@mail.com"}
          nome={"xxxxxx"}
          telefone={"xx xxxxx-xxxx"}
        />
        <CardFavoritePay
          email={"xxxxxx@mail.com"}
          nome={"xxxxxx"}
          telefone={"xx xxxxx-xxxx"}
        />
      </section>
    </div>
  );
}

export default PayPixOption;
