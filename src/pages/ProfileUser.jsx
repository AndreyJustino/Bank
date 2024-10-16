import React, { useEffect, useState } from "react";
import Cookies from "js-cookie";
import { useNavigate } from "react-router-dom";
import HeaderPix from "../components/HeaderPix";
import style from "./ProfileUser.module.css";
import axios from "axios";
import { formatCPF, formatMobileNumber } from "../middleware/format.js";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function ProfileUser() {
  const navigate = useNavigate();

  const [id, setId] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [cpf, setCpf] = useState("");
  const [dateBirth, setDateBirth] = useState("");
  const [mobileNumber, setMobileNumber] = useState("");
  const [password, setPassword] = useState("");
  const [scrollBlock, setScrollBlock] = useState(false);
  const [render, setRender] = useState(false);

  const [emailDelete, setEmailDelete] = useState();
  const [passwordDelete, setPasswordDelete] = useState();

  useEffect(() => {
    const auth = Cookies.get("auth");

    if (!auth) {
      return navigate("/login");
    }

    const emailLogin = Cookies.get("email");

    const getData = async () => {
      try {
        const response = await axios.get(
          `https://api-bank-0pr4.onrender.com/getUser/${emailLogin}`,
          {
            headers: {
              "Content-Type": "application/json",
            },
          }
        );

        setId(response.data.user.id);
        setName(response.data.user.name);
        setEmail(response.data.user.email);
        setCpf(formatCPF(response.data.user.cpf));
        setDateBirth(response.data.user.date_birth);
        setMobileNumber(formatMobileNumber(response.data.user.number_phone));
      } catch (error) {
        if (error.status == 404) {
          Cookies.set("auth", false);
          Cookies.set("email", "");
          return navigate("/register");
        }
      }
    };

    getData();
  }, []);

  function atualizar(e) {
    e.preventDefault();

    try {
      axios
        .put(
          `https://api-bank-0pr4.onrender.com/putUser/${id}`,
          {
            name: name,
            email: email,
            cpf: cpf,
            date_birth: dateBirth,
            number_phone: mobileNumber,
            password: password,
          },
          {
            headers: {
              "Content-Type": "application/json",
            },
          }
        )
        .then((response) => {
          toast.success(response.data.message);
          Cookies.set("email", email);
        });
    } catch (error) {
      toast.error(error.message);
    }
  }

  useEffect(() => {
    if (scrollBlock) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [scrollBlock]);

  async function deleteAccount(e) {
    e.preventDefault();

    try {
      const data = await axios.delete(
        `https://api-bank-0pr4.onrender.com/deleteAccounts/${id}`,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      const response = await axios.delete(
        "https://api-bank-0pr4.onrender.com/deleteUser",
        {
          headers: {
            "Content-Type": "application/json",
          },
          data: {
            email: emailDelete,
            password: passwordDelete,
          },
        }
      );

      toast.success(response.data.message);

      Cookies.remove("email");
      Cookies.remove("auth");

      setTimeout(() => {
        navigate("/register");
      }, 3000);
    } catch (error) {
      console.log(error.response);
      toast.error(error.response.data.message);
    }
  }

  return (
    <div className="container" id="profileUser">
      {render ? <div className={style.overlay}></div> : null}

      <HeaderPix titulo={"Perfil"} link={"/"} />
      <section className={style.sectionProfile}>
        <form
          autoComplete="off"
          onSubmit={atualizar}
          className="formRL"
          id={style.formProfile}
        >
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
            limit={1}
          />

          <div className="blocoRL">
            <label htmlFor="name">Nome:</label>
            <input
              required
              type="text"
              id="name"
              name="name"
              value={name}
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
              value={email}
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
              value={cpf}
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
              value={dateBirth}
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
              value={mobileNumber}
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
              value={password}
              placeholder="Senha..."
              onChange={(e) => {
                setPassword(e.target.value);
              }}
            />
          </div>

          <button type="submit" className="buttonRL">
            Atualizar dados
          </button>
          <button
            type="button"
            className="buttonRL"
            id={style.buttonDeleteUser}
            onClick={() => {
              Cookies.remove("email")
              Cookies.remove("auth")
              navigate("/login")
            }}
          >
            Sair da conta
          </button>
          <button
            type="button"
            className="buttonRL"
            id={style.buttonDeleteUser}
            onClick={() => {
              setRender(true);
              window.location.href = "#profileUser";
              setScrollBlock(true);
            }}
          >
            Deletar conta
          </button>
        </form>

        {render ? (
          <form
            onSubmit={deleteAccount}
            autoComplete="off"
            className="formRL"
            id={style.formDelete}
          >
            <div className="blocoRL">
              <label htmlFor="email">E-mail:</label>
              <input
                type="email"
                placeholder="Digite seu e-mail"
                required
                onChange={(e) => {
                  setEmailDelete(e.target.value);
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
                  setPasswordDelete(e.target.value);
                }}
              />
            </div>

            <button type="submit" className="buttonRL">
              Deletar
            </button>
            <button
              type="button"
              className="buttonRL"
              onClick={() => {
                setRender(false);
                setScrollBlock(false);
              }}
            >
              Cancelar
            </button>
          </form>
        ) : null}
      </section>
    </div>
  );
}

export default ProfileUser;
