import React from 'react'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import logo from './files/xlri.png'; 
import amba from './files/amba.png'; 
import aac from './files/aac.png'; 

const Header = () => {
  return (
   <>
    <Navbar>
    <Container>
        <Navbar.Brand> <a href="/"><img src= {logo} alt="" style={{height: '40px'}} /></a> </Navbar.Brand>
        <Navbar.Toggle />
        <h2 style={{paddingLeft: '300px', color: 'blue'}}>Xavier Online Learning (XOL)</h2>
        <Navbar.Collapse className="justify-content-end">
          <Navbar.Text>
          </Navbar.Text>
          <Navbar.Brand> <a href="/"><img src= {aac} alt="" style={{height: '40px'}} /></a> </Navbar.Brand>
          <Navbar.Brand> <a href="/"><img src= {amba} alt="" style={{height: '40px'}} /></a> </Navbar.Brand>
        </Navbar.Collapse>
      </Container>
      </Navbar>
      </>
  )
}

export default Header