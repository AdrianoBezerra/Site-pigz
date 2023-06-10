import React from 'react'
import { useState } from 'react'
import FormPagOne from './FormPagOne'
import styles from './Form.module.css'
import FormPagTwo from './FormPagTwo'
import FormPagThree from './FormPagThree'

const Form = () => {

    const [tela, setTela] = useState ('pagOne')

    const GoToStepTwo = () => {
        setTela('pagTwo')
    }
    const GoToStepThree = () => {
        setTela('pagThree')
    }

  return (
    <div className={styles.container}>
        {tela === 'pagOne' && <FormPagOne event={GoToStepTwo}/>}
        {tela === 'pagTwo' && <FormPagTwo event={GoToStepThree}/>}
        {tela === 'pagThree' && <FormPagThree/>}
    </div>
  )
}

export default Form