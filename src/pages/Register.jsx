import React, { useState } from "react";
import logo from "../assets/logoInter.png";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Register() {
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [cpf, setCpf] = useState();
  const [dateBirth, setDateBirth] = useState();
  const [mobileNumber, setMobileNumber] = useState();
  const [password, setPassword] = useState();

  async function cadastrar(e) {
    e.preventDefault();
    
    const navigate = useNavigate()

    try{
      await axios.post("https://api-bank-0pr4.onrender.com/postUser",{
        name,
        email,
        password,
        cpf,
        data_nascimento: dateBirth,
        telefone: mobileNumber
      },{
        headers: {
          'Content-Type': 'application/json',
        }
      }).then(response => {
        if(response.data.status == 201){
          toast.success('Cadastro realizado com sucesso!')
          return navigate("/login")
        }
      })
    }catch(error){

      if(error.status == 409){
        return toast.error('Email já cadastrado')
      }
      
      if(error.status == 400){
        return toast.error('Preencha todos os campos')
      }
    }

  }

  return (
    <div className="containerForm">
      <section className="sectionForm">
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
        <div className="molduraPessoaInterRL"></div>

        <form autoComplete="off" onSubmit={cadastrar} className="formRL">
          <div className="molduraLogoInterRL">
            <img src={logo} alt="Logo inter" />
          </div>
          <div className="blocoRL">
            <label htmlFor="name">Nome:</label>
            <input
              required
              type="text"
              id="name"
              name="name"
              placeholder="Nome completo..."
              onChange={(e) => {
                setName(e.target.value);
              }}
            />
          </div>
          <div className="blocoRL">
            <label htmlFor="email">E-mail:</label>
            <input
              required
              type="email"
              id="email"
              name="email"
              placeholder="E-mail..."
              onChange={(e) => {
                setEmail(e.target.value);
              }}
            />
          </div>
          <div className="blocoRL">
            <label htmlFor="cpf">CPF:</label>
            <input
              required
              type="text"
              id="cpf"
              name="cpf"
              placeholder="xxx.xxx.xxx-xx"
              pattern="^\d{3}\.\d{3}\.\d{3}-\d{2}$"
              onChange={(e) => {
                setCpf(e.target.value);
              }}
            />
          </div>
          <div className="blocoRL">
            <label htmlFor="nascimento">Data de nascimento:</label>
            <input 
              required 
              type="date" 
              id="nascimento" 
              name="nascimento"
              onChange={(e) => {
                setDateBirth(e.target.value);
              }}
            />
          </div>
          <div className="blocoRL">
            <label htmlFor="telefone">Telefone:</label>
            <input
              required
              type="tel"
              id="telefone"
              name="telefone"
              placeholder="(XX) XXXXX-XXXX"
              pattern="^\(\d{2}\)\s9\d{4}-\d{4}$"
              onChange={(e) => {
                setMobileNumber(e.target.value);
              }}
            />
          </div>
          <div className="blocoRL">
            <label htmlFor="password">Senha:</label>
            <input
              required
              type="password"
              id="password"
              name="senha"
              placeholder="Senha..."
              onChange={(e) => {
                setPassword(e.target.value);
              }}
            />
          </div>
          <p className="paragrafoRL">
            Ja tem conta?{" "}
            <Link to="/login" className="linkRL">
              Clique aqui.
            </Link>
          </p>
          <button type="submit" className="buttonRL">
            Cadastrar
          </button>
        </form>
      </section>
    </div>
  );
}

export default Register;
