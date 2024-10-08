import React from 'react'
import logo from "../assets/logoInter.png"
import { Link } from 'react-router-dom'

function Register() {
  function cadastrar(){
    console.log("pegando cadastro")
  }

  return (
    <div className="containerForm">
      <section className="sectionForm">
        
        <div className="molduraPessoaInterRL">
        </div>
        
        <form autoComplete='off' onSubmit={cadastrar} className="formRL">
          <div className="molduraLogoInterRL">
            <img src={logo} alt="Logo inter" />
          </div>
          <div className="blocoRL">
            <label htmlFor="name">Nome:</label>
            <input type="text" id="name" name="name" placeholder="Nome completo..." />
          </div>
          <div className="blocoRL">
            <label htmlFor="email">E-mail:</label>
            <input type="email" id="email" name="email" placeholder="E-mail..."/>
          </div>
          <div className="blocoRL">
            <label htmlFor="email">E-mail:</label>
            <input type="email" id="email" name="email" placeholder="E-mail..."/>
          </div>
          <div className="blocoRL">
            <label htmlFor="nascimento">Data de nascimento:</label>
            <input type="date" id="nascimento" name="nascimento" />
          </div>
          <div className="blocoRL">
            <label htmlFor="telefone">Telefone:</label>
            <input type="tel" id="telefone" name="telefone" placeholder="Telefone..."/>
          </div>
          <div className="blocoRL">
            <label htmlFor="password">Senha:</label>
            <input type="password" id="password" name="senha" placeholder="Senha..."/>
          </div>
          <p className="paragrafoRL">Ja tem conta? <Link to="/login" className="linkRL">Clique aqui.</Link></p>
          <button type="submit" className="buttonRL">Cadastrar</button>
        </form>
      </section>

    </div>
  )
}

export default Register