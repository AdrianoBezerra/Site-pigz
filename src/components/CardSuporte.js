import React from 'react'
import styles from './CardSuporte.module.css'

const CardSuporte = (props) => {
  return (
    <div className={styles.container}>
        <div className={styles.containerCard}>

            <h1>{props.title}</h1>

            <h3>{props.subtitle}</h3>

            <p>{props.p1}</p>
            <p>{props.p2}</p>
            <p>{props.p3}</p>
            <p>{props.p4}</p>
            <p>{props.p5}</p>

            <div className={styles.containerPrice}>{props.price}</div>
            
            <button>{props.button}</button>
        </div>
    </div>
  )
}

export default CardSuporte