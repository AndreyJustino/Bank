import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logoInter.png";

function Login() {
  function login() {
    console.log("login");
  }

  return (
    <div className="containerForm">
      <section className="sectionForm">
        <div className="molduraPessoaInterRL"></div>

        <form onSubmit={login} autoComplete="off" className="formRL">
          <div className="molduraLogoInterRL">
            <img src={logo} alt="logo inter" />
          </div>
          <div className="blocoRL">
            <label htmlFor="email">E-mail:</label>
            <input type="email" placeholder="Digite seu e-mail" required />
          </div>

          <div className="blocoRL">
            <label htmlFor="password">Senha:</label>
            <input
              type="password"
              id="password"
              placeholder="Digite sua senha"
              required
            />
          </div>
          <p className="paragrafoRL">
            Não tem conta?{" "}
            <Link to="/register" className="linkRL">
              Clique aqui
            </Link>
          </p>
          <button type="submit" className="buttonRL">
            Login
          </button>
        </form>
      </section>
    </div>
  );
}

export default Login;
