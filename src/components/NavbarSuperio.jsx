import React from "react";
import style from "./NavbarSuperior.module.css";
import logo from "./../assets/logoInter.png";

function NavbarSuperior() {
  return (
    <div className={style.navbar_superior}>
      <header className={style.headerNavSuperior}>
        <img src={logo} alt="Logo inter" className={style.logoNavSuperior} />
        <button className={style.perfilButtonNavSuperior}>Perfil</button>
      </header>

      <div className={style.balanceContainerNavSuperior}>
        <div className={style.containerBalanceSetaNavSuperior}>
          <h2 className={style.balancerTextNavSuperior}>R$ 10,10</h2>
          <button className={style.arrowButtonNavSuperior}>
            <span className="material-icons">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="30px"
                viewBox="0 -960 960 960"
                width="30px"
                fill="#ff7f00"
              >
                <path d="m321-80-71-71 329-329-329-329 71-71 400 400L321-80Z" />
              </svg>
            </span>
          </button>
        </div>
        

        <div className={style.buttonGroupNavSuperior}>
          <button className={style.actionButton}>
            <span className="material-icons">pix</span>Pix
          </button>

          <button className={style.actionButton}>
            <span className="material-icons">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="24px"
                viewBox="0 -960 960 960"
                width="34px"
                fill="#fff"
              >
                <path d="M40-200v-560h80v560H40Zm120 0v-560h80v560h-80Zm120 0v-560h40v560h-40Zm120 0v-560h80v560h-80Zm120 0v-560h120v560H520Zm160 0v-560h40v560h-40Zm120 0v-560h120v560H800Z" />
              </svg>
            </span>
            Pagar
          </button>

          <button className={style.actionButton}>
            <span className="material-icons">credit_card</span>Cartões
          </button>
        </div>
      </div>

      <div className={style.containerNavbarSuperior}>
        <div className={style.featuresContainers}>
          <button className={style.featureButton}>
            <span className="material-icons">favorite</span>
            <p>Seguro</p>
          </button>
        </div>
        <div className={style.featuresContainers}>
          <button className={style.featureButton}>
            <span className="material-icons">trending_up</span>
            <p>Investir</p>
          </button>
        </div>
        <div className={style.featuresContainers}>
          <button className={style.featureButton}>
            <span className="material-icons">receipt</span>
            <p>Recarregar</p>
          </button>
        </div>
        <div className={style.featuresContainers}>
          <button className={style.featureButton}>
            <span className="material-icons">update</span>
            <p>Antecipar FGTS</p>
          </button>
        </div>
        <div className={style.featuresContainers}>
          <button className={style.featureButton}>
            <span className="material-icons">savings</span>
            <p>Meu Porquinho</p>
          </button>
        </div>
      </div>
    </div>
  );
}

export default NavbarSuperior;
