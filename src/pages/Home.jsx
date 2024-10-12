import React from 'react'
import style from "./Home.module.css"
import NavbarSuperior from '../components/NavbarSuperio.jsx';
import SaldoArea from '../components/SaldoArea.jsx';
import Atalhos from '../components/Atalhos.jsx';
import Promocao from '../components/Promocao.jsx';
import NavbarInferior from '../components/NavbarInferior.jsx';

function Home() {
  return (
    <div className={style.headerHome}>
      <NavbarSuperior />
      <SaldoArea />
      <Atalhos />
      <Promocao />
      <NavbarInferior />
    </div>
  )
}

export default Home;
