import React from 'react'
import style from "./Register.module.css"
import logo from "../assets/logoInter.png"
import foto from "../assets/fotoFormPessoaCadastro.png"
import { Link } from 'react-router-dom'

function Register() {
  function cadastrar(){
    console.log("pegando cadastro")
  }

  return (
    <div className={style.containerRegister}>
      <section className={style.sectionRegister}>
        <div className={style.molduraPessoaInter}>
          {/* <img src={foto} alt="Logo" /> */}
        </div>
        <form autoComplete='off' onSubmit={cadastrar} className={style.formRegister}>
          <div className={style.molduraLogoInter}>
            <img src={logo} alt="Logo inter" />
          </div>
          <div className={style.blocoRegister}>
            <label htmlFor="name">Nome:</label>
            <input type="text" id="name" name="name" placeholder="Nome completo..." />
          </div>
          <div className={style.blocoRegister}>
            <label htmlFor="email">E-mail:</label>
            <input type="email" id="email" name="email" placeholder="E-mail..."/>
          </div>
          <div className={style.blocoRegister}>
            <label htmlFor="email">E-mail:</label>
            <input type="email" id="email" name="email" placeholder="E-mail..."/>
          </div>
          <div className={style.blocoRegister}>
            <label htmlFor="nascimento">Data de nascimento:</label>
            <input type="date" id="nascimento" name="nascimento" />
          </div>
          <div className={style.blocoRegister}>
            <label htmlFor="telefone">Telefone:</label>
            <input type="tel" id="telefone" name="telefone" placeholder="Telefone..."/>
          </div>
          <div className={style.blocoRegister}>
            <label htmlFor="password">Senha:</label>
            <input type="password" id="password" name="senha" placeholder="Senha..."/>
          </div>
          <p className={style.paragrafoLoginRegister}>Ja tem conta? <Link to="/login" className={style.linkRegister}>Clique aqui.</Link></p>
          <button type="submit" className={style.buttonRegister}>Cadastrar</button>
        </form>
      </section>

    </div>
  )
}

export default Register