import React, {useEffect} from 'react'
import Cookies from 'js-cookie';
import { useNavigate } from 'react-router-dom';
import style from "./Home.module.css"
import NavbarSuperior from '../components/NavbarSuperio.jsx';

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
    </div>
  )
}

export default Home;
