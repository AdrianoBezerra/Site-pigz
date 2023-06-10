import React from 'react'
import styles from './Footer.module.css'
import logoPigz from '../images/pigz-logotipo-colorido.svg'
import logoAppStore from '../images/selo-app-store.svg'
import logoGoogleplay from '../images/selo-google-play.svg'
import logoContato from '../images/icone-fale-conosco.svg'
import logoOrange from '../images/logo-orange-horizontal-branco.svg'
import iconFacebook from '../images/facebook-with-circle.svg'
import iconInstagram from '../images/instagram-with-circle.svg'
import iconLinkedin from '../images/linkedin-with-circle.svg'
import iconYoutube from '../images/youtube-with-circle.svg'


const Footer = () => {
  return (
    <div className={styles.container}>
        <div className={styles.containerFooter}>

            <img src={logoPigz} alt=""></img>
            <p>Tudo que você precisa.</p>
            <h5>Baixe o APP</h5>

                <div className={styles.containerApp}>
                    <img src={logoAppStore}></img>
                    <img src={logoGoogleplay} alt=""></img>
                </div>

            <h5>Pigz</h5>
            <h6>Sobre o Pigz</h6>
            <h6>Portal do Parceiro</h6>
            <h6>Quero ser um Pigz Partner</h6>

                <div className={styles.containerContato}>
                    <img src={logoContato} alt=""></img>
                    <h5>Fale conosco</h5>
                </div>

            <h6>falecom@pigz.com.br</h6>
            <h6>(00) 0000-0000</h6>
            <h5>Pigz nas redes</h5>

                <div className={styles.containerSocial}>
                    <img src={iconFacebook} alt=""></img>
                    <img src={iconInstagram} alt=""></img>
                    <img src={iconLinkedin} alt=""></img>
                    <img src={iconYoutube} alt=""></img>
                </div>

                <div className={styles.containerLista}>
                    <div className={styles.hr}></div>
                </div>

                <div className={styles.containerTermo}>
                    <p>Nossos termos</p>
                    <p>Privacidade</p>
                    <p>Ajuda</p>
                </div>

                <div className={styles.containerFinal}>
                    <div className={styles.p}>© Copyright 2021 • Pigz • Todos os direitos reservados Orange Labs Tecnologia LTDA. CNPJ 34.895.008/0001-85</div>
                    <img src={logoOrange} alt=""></img>
                </div>

        </div>

        <div className={styles.orangeLista}></div>

    </div>
  )
}

export default Footer