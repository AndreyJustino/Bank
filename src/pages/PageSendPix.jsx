import React, { useEffect, useState } from "react";
import style from "./PageSendPix.module.css";
import HeaderPix from "../components/HeaderPix";
import Balance from "../components/Balance";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Cookies from "js-cookie";

function PageSendPix() {
  const [inputValue, setInputValue] = useState("0");
  const [balance, setBalance] = useState(0)
  const [idAccount, setIdAccount] = useState()
  const [typeAccount, setTypeAccount] = useState()
  const navigate = useNavigate();

  useEffect(() => {
    const auth = Cookies.get("auth");

    if (!auth) {
      return navigate("/login");
    }

     async function req(emailUser){

       const responseGetUser = await axios.get(
         `https://api-bank-0pr4.onrender.com/getUser/${emailUser}`,
         {
           headers: {
             "Content-Type": "application/json",
           },
         }
       );
   
       const idUser = responseGetUser.data.user.id
   
       const responseGetAccount = await axios.get(
         `https://api-bank-0pr4.onrender.com/getAccounts/${idUser}`
       );

        setBalance(responseGetAccount.data.account.balance)
        setIdAccount(responseGetAccount.data.account.id) 
        setTypeAccount(responseGetAccount.data.account.type)
        
    }

    req(Cookies.get("email"))

  }, [])

  async function createTransiction(value, dados){
    try{
      // account_id, date_transactions, value, type
      const date = new Date()

      const day = String(date.getDate()).padStart(2, '0');
      const month = String(date.getMonth() + 1).padStart(2, '0');
      const year = date.getFullYear(); 

      const dataFormatada = `${year}-${month}-${day}`;

      navigate("/paypix", {state: {
        idAccount: idAccount,
        date_transactions: dataFormatada,
        value: value,
        type: typeAccount,
        balance: balance
      }});

    }catch(error){
      console.log(error)
    }
  } 

  return (
    <div className="container">
      <HeaderPix link={"/paypixoption"} titulo={"Valor a pagar"} />

      <section className={style.sectionPageSendPix}>
        <Balance balance={balance}/>

        <div className={style.valuePageSendPix}>
          <div>
            <p>R$</p>

            <input
              type="text"
              required
              value={inputValue}
              onChange={(e) => {
                const value = e.target.value;
                if (/^\d*([,]\d{0,2})?$/.test(value)) {
                  setInputValue(value);
                } else {
                  setInputValue("0");
                }
              }}
            />
          </div>

          <p className={style.textPageSend}>Pagar para</p>
          <p>
            {
              Cookies.get("keyPix")
            }
          </p>
        </div>
        <button
          className={style.buttonPageSend}
          onClick={() => {
            createTransiction(parseFloat(inputValue), Cookies.get("email"))
          }}
        >
          Continuar
        </button>
      </section>
    </div>
  );
}

export default PageSendPix;
