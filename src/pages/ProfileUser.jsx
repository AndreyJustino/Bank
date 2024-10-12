import React, { useEffect } from 'react'
import Cookies from 'js-cookie'
import { useNavigate } from 'react-router-dom'

function ProfileUser() {
    const navigate = useNavigate()

    useEffect(() => {
        const auth = Cookies.get("auth")

        if(!auth){
            return navigate("/login")
        }
    }, [])

  return (
    <div>ProfileUser</div>
  )
}

export default ProfileUser