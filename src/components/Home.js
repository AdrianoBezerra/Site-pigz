import React from 'react'
import Navbar from './Navbar'
import Secao from './Secao'
import Funcionalidades from './Funcionalidades'
import Carrosel from './Carrosel'
import Suporte from './Suporte'
import Footer from './Footer'

const Home = () => {
  return (
    <div className="home-container">
        <Navbar/>
        <Secao />
        <Funcionalidades />
        <Carrosel />
        <Suporte />
        <Footer />
    </div>
  )
}

export default Home