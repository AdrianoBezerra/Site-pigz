import React from 'react'
import Button from './Button'
import styles from './Form.module.css'

const FormPagThree = () => {
  return (
    <div className={styles.containerForm}>
        <h2>Me conta um pouco sobre a sua loja</h2>

        <div className={styles.containerEntrada} id={styles.containerEntrada}>
            <label htmlFor="nome-da-loja">Nome da Loja</label>
            <input type="text" name="nome-da-loja" id="nome-da-loja" placeholder="Restaurante"></input>
        </div>

        <div className={styles.containerEntrada}>
            <label htmlFor="cnpj"> CNPJ da Loja</label>
            <input type="text" name="cnpj" id="cnpj" placeholder="00.000.000/0000-00"></input>
        </div>

        <div className={styles.selectGrupo}>
            <div className={styles.selectGrupo3}>
                <label htmlFor="tipo-de-loja">Tipo de Loja</label>
                <select name="tipo-de-loja" id="tipo-de-loja">
                    <option value="" disabled selected hidden>Selecione</option>
                    <option value="rotisseria">Rotisseria</option>
                    <option value="pizzaria">Pizzaria</option>
                    <option value="hamburgueria">Hamburgueria</option>
                </select>
            </div>
        </div>

        <div className={styles.containerButton}>
            <Button text={'Concluir'} />
        </div>
    </div>
  )
}

export default FormPagThree