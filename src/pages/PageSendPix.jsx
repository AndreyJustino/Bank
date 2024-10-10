import React, { useState } from 'react'
import style from './PageSendPix.module.css'
import HeaderPix from '../components/HeaderPix'
import Balance from '../components/Balance';
import { useNavigate } from 'react-router-dom';

function PageSendPix() {
  const [inputValue, setInputValue] = useState('0');

  console.log(parseFloat(inputValue))
  const navigate = useNavigate();

  return (
    <div className={style.containerPageSendPix}>
      <HeaderPix link={"/paypixoption"} titulo={"Valor a pagar"}/>

      <section className={style.sectionPageSendPix}>
        
        <Balance/>

        <div className={style.valuePageSendPix}>
          
          <div>
            <p>R$</p>
            
            <input
              type="text"
              required
              value={inputValue}
              onChange={(e) => {
                const value = e.target.value
                if (/^\d*([,]\d{0,2})?$/.test(value)) {
                  setInputValue(value);
                }
                else{
                  setInputValue('0');
                }
              }}
            />
          </div>

          <p className={style.textPageSend}>Pagar para</p>
          <p>Andrey</p>
        </div>
        <button className={style.buttonPageSend} onClick={() => {
          navigate("/paypix")
        }}>Continuar</button>
      </section>
    </div>
  )
}

export default PageSendPix