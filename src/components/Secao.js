import React from 'react'
import burger from '../images/burguer_2.png'
import styles from './Secao.module.css'
import Form from './Form'


const Secao = () => {
  return (
    <div className={styles.backgroud}>
        <div className={styles.backgroud1}>
          <h1>Pigz: tudo que você precisa pra vender ainda mais!</h1>
          <div className={styles.img}>
            <img src={burger} alt="burger"></img>
          </div>
        </div>
        <div className={styles.containerTexto}>
          <p>Temos uma equipe ansiosa para cadastrar seus produtos no Pigz Marketplace e deixar sua loja prontinha para iniciar as vendas.</p>
        </div>
        <div className={styles.containerForm}>
          <Form />       
        </div>
    </div>
  )
}

export default Secao