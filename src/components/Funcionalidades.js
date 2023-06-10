import React from 'react'
import styles from './Funcionalidades.module.css'
import pigzImage from '../images/Grupo 3535.svg'
import imgMarket from '../images/storefront_black_24dp.svg'
import imgTel from '../images/smartphone_black_24dp.svg'
import imgManagement from '../images/Grupo 3545.svg'
import imgPrinter from '../images/print_black_24dp.svg'
import BoxFuncionalidade from './BoxFuncionalidade'

const Funcionalidades = () => {
  return (
    <div className={styles.container}>
        
        <img src={pigzImage} alt="" />

        <h1>Você tem um novo Pigzdido!</h1>

        <BoxFuncionalidade img={imgMarket} titulo={'Marketplace'} descricao={'Pra sua loja vender mais'} />
        <BoxFuncionalidade img={imgTel} titulo={'É fácil e rápido'} descricao={'Fazer um pedido no pigz'} />
        <BoxFuncionalidade img={imgManagement} titulo={'Pigz Gestão'} descricao={'Você no controle, sempre'} />
        <BoxFuncionalidade img={imgPrinter} titulo={'Vias de impressão'} descricao={'Personalizáveis'} />

        <h1>Tudo que você precisa por apenas R$199/mês</h1>

        <p>Tenha todas as funcionalidades Pigz sem taxa de adesão, sem comissão por cada venda, sem letrinhas miúdas.</p>
    </div>
  )
}

export default Funcionalidades