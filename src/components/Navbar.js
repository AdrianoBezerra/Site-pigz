import React from 'react'
import logo from '../images/Pigz-Gestao-Logo.svg'
import styles from './Navbar.module.css'

const Navbar = () => {
  return (
    <div className={styles.header}>
      <nav className={styles.nav}>
        <img src={logo} alt="pigz"></img>
        <button className={styles.btn}>Já sou parceiro</button>
      </nav>
    </div>
  )
}

export default Navbar