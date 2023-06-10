import React from 'react'
import CardSuporte from './CardSuporte'
import styles from './Suporte.module.css'
import IconeWpp from '../images/icon-whatsapp.svg'

const Suporte = () => {
  return (
    <div className={styles.container}>
      <div className={styles.containerConteudo}>
        <h1>E mais: suporte que realmente funciona!</h1>
        <p>Respostas automáticas e robôs? Aqui não. Nossa equipe está sempre disponível pra ajudar você e seus clientes.</p>
      </div>

        <CardSuporte 
        title={'Pigz'}
        subtitle={'Tudo o que você precisa'}
        p1={`Pigz Marketplace`}
        p2={'Página exclusiva'}
        p3={'Pigz Gestão Desktop e Mobile'}
        p4={'Gestão de entregadores'}
        p5={'Vias de impressão personalizáveis'}
        price={'R$199/mês'}
        button={'Vender no Pigz agora'}
        />

        <CardSuporte
        title={'Pagamento On-line'}
        subtitle={'Segurança e agilidade'}
        p1={`Aceite Pix e Cartão de Crédito`}
        p2={'Antecipação Pix automática'}p3={'Não dependa de maquininha de cartão'}
        p4={'Segurança para receber pedidos'}
        p5={'Agilidade para entregar'}
        price={'2,99% por transação'}
        button={'Saiba mais'}
        />

        <div className={styles.contato}>
        Fale com a Pigz <img src={IconeWpp} alt=""/> <span>00</span> 0000-0000
        </div>
    </div>
  )
}

export default Suporte