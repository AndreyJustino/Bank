import React, { useEffect } from 'react'
import Cookies from 'js-cookie'
import { useNavigate } from 'react-router-dom'
import HeaderPix from '../components/HeaderPix'
import style from "./ProfileUser.module.css"

function ProfileUser() {
    const navigate = useNavigate()

    useEffect(() => {
        const auth = Cookies.get("auth")

        if(!auth){
            return navigate("/login")
        }
    }, [])

  return (
    <div className="container">
        <HeaderPix titulo={"Perfil"} link={"/"}/>
        <section>

        </section>
    </div>
  )
}

export default ProfileUser