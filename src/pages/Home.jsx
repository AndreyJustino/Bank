import React, {useEffect} from 'react'
import Cookies from 'js-cookie';
import { useNavigate } from 'react-router-dom';
import style from "./Home.module.css"
import NavbarSuperior from '../components/NavbarSuperio.jsx';
import SaldoArea from '../components/SaldoArea.jsx';
import Atalhos from '../components/Atalhos.jsx';
import Promocao from '../components/Promocao.jsx';
import NavbarInferior from '../components/NavbarInferior.jsx';

function Home() {

  const navigate = useNavigate()

  useEffect(() =>{
    const auth = Cookies.get("auth")

    if(!auth){
      return navigate("/login")
    }
  },[])
  
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
