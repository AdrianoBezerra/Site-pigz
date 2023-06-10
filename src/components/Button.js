import React from 'react'
import styles from './Form.module.css'

const Button = (props) => {
  return (
    <div>
        <button onClick={props.event} className={styles.btn}>{props.text}</button>
    </div>
  )
}

export default Button