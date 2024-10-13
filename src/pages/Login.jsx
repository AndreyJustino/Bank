import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logoInter.png";
import Cookies from "js-cookie";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";

function Login() {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const navigate = useNavigate();

  async function login(e) {
    e.preventDefault();
    try {
      await axios
        .post(
          `https://api-bank-0pr4.onrender.com/loginUser`,
          {
            email: email,
            password: password,
          },
          {
            headers: {
              "Content-Type": "application/json",
            },
          }
        )
        .then((response) => {
          if (response.data.status == 200) {
            Cookies.set("auth", response.data.login);
            Cookies.set("email", email)
            toast.success("Login Autorizado");
            return navigate("/");
          }
        });
    } catch (error) {
      if (error.status == 404) {
        return toast.error("E-mail não cadastrado!");
      }

      if (error.status == 401) {
        return toast.error("Senha incorreta!");
      }
    }
  }

  return (
    <div className="containerForm">
      <section className="sectionForm">
        <div className="molduraPessoaInterRL"></div>
        <ToastContainer
          position="top-center"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="light"
        />
        <form onSubmit={login} autoComplete="off" className="formRL">
          <div className="molduraLogoInterRL">
            <img src={logo} alt="logo inter" />
          </div>
          <div className="blocoRL">
            <label htmlFor="email">E-mail:</label>
            <input
              type="email"
              placeholder="Digite seu e-mail"
              required
              onChange={(e) => {
                setEmail(e.target.value);
              }}
            />
          </div>

          <div className="blocoRL">
            <label htmlFor="password">Senha:</label>
            <input
              type="password"
              id="password"
              placeholder="Digite sua senha"
              required
              onChange={(e) => {
                setPassword(e.target.value);
              }}
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
