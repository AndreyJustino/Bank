import React, { useEffect, useState } from "react";
import style from "./PayPix.module.css";
import HeaderPix from "../components/HeaderPix";
import Balance from "../components/Balance";
import iconCoins from "../assets/icon/iconCoins.png";
import iconCalendar from "../assets/icon/iconsCalendar.png";
import { useLocation, useNavigate } from "react-router-dom";
import Cookies from "js-cookie";
import axios from "axios"
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function PayPix() {
  const [data, setData] = useState();
  const [balanceValue, setBalanceValue] = useState()
  const [valueTransactions, setValueTransactions] = useState()
  const navigate = useNavigate();
  const location = useLocation()

  async function sendPix(){
    try{
      const { idAccount, date_transactions, value, type, balance } = location.state || {};
  
      const responsePostTransaction = await axios.post("https://api-bank-0pr4.onrender.com/postTransaction",{
            type : type,
            account_id: idAccount,
            date_transactions: date_transactions,
            value: value
        },{
          headers: {
            "Content-Type": "application/json",  
          }
        })

      const responseUpdate = await axios.put(`https://api-bank-0pr4.onrender.com/putAccount/${idAccount}`,{
        balance: balance - value,
        type: type
      },{
        headers: {
          "Content-Type": "application/json",  
        }
      })
      
      const responseGetUser = await axios.get(
        `https://api-bank-0pr4.onrender.com/getUser/${Cookies.get("keyPix")}`,
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

      const responseUpdateAccount = await axios.put(`https://api-bank-0pr4.onrender.com/putAccount/${responseGetAccount.data.account.id}`,{
        balance: balance + value,
        type: type
      },{
        headers: {
          "Content-Type": "application/json",  
        }
      })

      toast.success("Pix enviado com sucesso!")

      setTimeout(() => {
        navigate("/")
      }, 2000)

    }catch(error){
      console.log(error.response)
    }
  }

  useEffect(() => {

    const auth = Cookies.get("auth");

    if (!auth) {
      return navigate("/login");
    }

    const { date_transactions, value, type, balance } = location.state || {};
    
    const [ano, mes, dia] = date_transactions.split("-");
    const dataFormatada = `${dia}/${mes}/${ano}`;

    setBalanceValue(balance)
    setData(dataFormatada);
    setValueTransactions(value)
  }, []);

  return (
    <div className="container">
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
      <HeaderPix titulo={"Revisão"} link={"/pagesendpix"} />
      <section className={style.sectionPayPix}>
        <Balance balance={balanceValue}/>

        <div className={style.boxDataPayPix}>
          <img src={iconCoins} alt="" />

          <p>R$ {valueTransactions}</p>
          <p>{Cookies.get("keyPix")}</p>
        </div>
      </section>

      <section className={style.sectionPayPix2}>
        <h2>Data de Pagamento</h2>

        <div className={style.boxDatePayPix}>
          <img src={iconCalendar} alt="" />
          <div>
            <h3>Agora</h3>
            <p>{data}</p>
          </div>
        </div>
      </section>

      <div className={style.containerPayPixButton}>
        <button
          onClick={() => {
            sendPix()
          }}
        >
          Pagar R$ {valueTransactions}
        </button>
      </div>
    </div>
  );
}

export default PayPix;
