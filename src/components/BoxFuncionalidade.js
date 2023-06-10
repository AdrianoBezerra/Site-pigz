import React from 'react'
import styles from './BoxFuncionalidade.module.css'

const BoxFuncionalidade = (props) => {
  return (
    <div className={styles.container}>
        <img src={props.img} alt=""></img>
        <h4 className={styles.h4}>{props.titulo}</h4>
        <p>{props.descricao}</p>
    </div>
  )
}

export default BoxFuncionalidade