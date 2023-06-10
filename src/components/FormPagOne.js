import React from 'react'
import Button from './Button'
import styles from './Form.module.css'
import brasil from '../images/bandeira-brasil.svg'
import arrow from '../images/arrow-down.svg'

const FormPagOne = (props) => {
  return (
    <div className={styles.containerForm}>

        <h2>Quero vender no Pigz</h2>

        <p>Dê o primeiro passo para aumentar suas vendas</p>

        <div className={styles.containerEntrada}>
            <label htmlFor="nome">Nome</label>
            <input type="text" name="nome" id="nome" placeholder="Adriano Bezerra" />
            <label htmlFor="email">E-mail</label>
            <input type="text" name="email" id="email" placeholder="adrianobezerra@gmail.com"/>
        </div>
        
        <label htmlFor="telefone">Telefone</label>
        <div className={styles.containerPais}>
            <div className={styles.containerTelefone}>
                <img src={brasil} alt="brasil"></img>
                <h1>+55</h1>
                <img src={arrow} alt="arrow"></img>
            </div>
            <input type="tel" name="telefone" id="telefone" placeholder="(00) 00000-0000"/>
        </div>
        
        <p>Ao continuar, aceito que a Pigz entre em contato comigo por telefone, e-mail ou WhatsApp.</p>

        <div className={styles.containerButton}>
            <Button event={props.event} text={'Continuar'} />
        </div>
        
    </div>
  )
}

export default FormPagOne