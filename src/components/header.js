import React from 'react'
import "../styles/header.css"
import "../styles/index.css"
import Button from 'react-bootstrap/Button'

const Header = () => {
  return(
      <header className='banner-image h80'>
        <div className='masthead-subheading'>Alavanque os negócios da sua empresa</div>
        <div className='text-uppercase masthead-heading'>Negócio Fechado CRM</div>
        <div className="masthead-sub-subheading">Transforme seu processo de vendas em uma máquina de geração de receita</div>
        <div className="masthead-sub-subheading">Cadastre-se agora - é rápido, fácil e seguro</div>
        <br></br>
        <div className='div-button'>
        <Button variant="dark" href='register' className='text-uppercase button-register'>Quero começar agora</Button>
        </div>
      </header>
  )
}

export default Header