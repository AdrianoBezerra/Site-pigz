import React from 'react'
import Button from './Button'
import styles from './Form.module.css'

const FormPagTwo = (props) => {
  return (
    <div className={styles.containerForm}>
        <h2>Onde fica a sua loja?</h2>

        <div className={styles.containerEntrada} id={styles.containerEntrada}>
            <label htmlFor="cep">CEP</label>
            <input type="text" name="cep" id="cep" placeholder="00000-000"></input>
        </div>

        <div className={styles.selectGrupo}>
            <div>
                <label htmlFor="estado"> Estado</label>
                    <select name="estado" id="estado" placeholder="UF">
                        <option value="" disabled selected hidden>UF</option>
                        <option value="sp">SP</option>
                        <option value="rj">RJ</option>
                        <option value="rr">RR</option>
                    </select>
                    
            </div>

            <div className={styles.selectGrupo2}>
                <label htmlFor="cidade"> Cidade</label>
                    <select name="cidade" id="cidade" placeholder="UF">
                        <option value="" disabled selected hidden>Selecione</option>
                        <option value="saopaulo">São Paulo</option>
                        <option value="riodejaneiro">Rio de Janeiro</option>
                        <option value="boavista">Boa Vista</option>
                    </select>
            </div>
        </div>

        <div className={styles.containerEntrada}>
            <label htmlFor="endereco">Endereço</label>
            <input type="text" name="endereco" id="endereco" placeholder="Rua Mercúrio"></input>
        </div>

        <div className={styles.containerEndereco}>
            <div>
                <label htmlFor="numero">Número</label>
                <input type="number" name="numero" id="numero" placeholder="55"></input>
            </div>
            <div className={styles.containerEnderecoConteudo}>
                <label htmlFor="complemento">Complemento</label>
                <input type="text" name="complemento" id="complemento" placeholder="Sala 1"></input>
            </div>
        </div>

        <div className={styles.containerButton}>
            <Button event={props.event} text={'Próximo'} />
        </div>
    </div>
  )
}

export default FormPagTwo