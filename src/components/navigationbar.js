import React from "react"
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import "../styles/navbar.css"

const Navigationbar = () => {
  return(
    <Navbar bg="dark" variant="dark" fixed="top" expand="lg" className="mainNav">
        <Container>
          <Navbar.Brand href="/" className='text-uppercase navbar-brand'>
            <img src="favicon.png" alt="Logomarca da Negócio Fechado CRM. É composta por um aperto de mãos e uma moeda dourada" styles="width:32px; height: 32px;"></img>
            Negócio Fechado
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
            <Nav className="mr-auto text-uppercase">
                <Nav.Link href="plans">Planos</Nav.Link>
                <Nav.Link href="#aprenda">Aprenda</Nav.Link>
                <Nav.Link href="register">Criar Conta</Nav.Link>
                <Nav.Link href="login">Iniciar Sessão</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
  )
}

export default Navigationbar;