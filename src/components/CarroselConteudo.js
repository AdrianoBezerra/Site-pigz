import React from 'react'
import styles from './CarroselConteudo.module.css'

const CarroselConteudo = (props) => {
  return (
    <div className={styles.container}>
        <h3>{props.title}</h3>
        <div className={styles.caixa}>
            <p>{props.descricao}</p>
            <img src={props.imagem} alt="" />
        </div>
    </div>
  )
}

export default CarroselConteudo