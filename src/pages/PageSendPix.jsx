import React, { useState } from 'react'
import style from './PageSendPix.module.css'
import HeaderPix from '../components/HeaderPix'

function PageSendPix() {
  const [inputValue, setInputValue] = useState('0');

  console.log(parseFloat(inputValue))

  return (
    <div className={style.containerPageSendPix}>
      <HeaderPix link={"/paypixoption"} titulo={"Valor a pagar"}/>

      <section className={style.sectionPageSendPix}>
        
        <div className={style.balancePageSendPix}>
          <p>Saldo em conta</p>
          <p>R$ xxxx</p>
        </div>

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
        <button className={style.buttonPageSend}>Continuar</button>
      </section>
    </div>
  )
}

export default PageSendPix