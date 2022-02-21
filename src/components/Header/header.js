import React from 'react'
import { Container, Navbar ,Nav, ListGroup, Row , Col } from 'react-bootstrap'
import Logo from '../../Images/Logo/logo.png'
import { IoMdPlanet } from "@react-icons/all-files/io/IoMdPlanet";
import { HiUserCircle } from "@react-icons/all-files/hi/HiUserCircle";
import { RiKey2Fill } from "@react-icons/all-files/ri/RiKey2Fill";
import { FaUser } from "@react-icons/all-files/fa/FaUser";

export default function Header() {
  return (
    <>
    <header id='navHeader'>
    <Container>
        <div className='menuBar'>
        <Row>
         <Col md={4} >
            <Navbar.Brand href="#"><img className="logodiv" src={Logo} alt="logo"/></Navbar.Brand>
         </Col>
         <Col md={8}>
    <Navbar expand="lg">
    <Navbar.Toggle aria-controls="navbarScroll" />
    <Navbar.Collapse id="navbarScroll" className="justify-content-end">
      <Nav
        className=""
        style={{ maxHeight: '100px' }}
        navbarScroll
      >
<ListGroup>
  <ListGroup.Item><Nav.Link href="/"><IoMdPlanet/> Dashboard</Nav.Link></ListGroup.Item>
  <ListGroup.Item><Nav.Link href="/"><HiUserCircle/> Register</Nav.Link></ListGroup.Item>
  <ListGroup.Item><Nav.Link href="/"><RiKey2Fill/> Login</Nav.Link></ListGroup.Item>
  <ListGroup.Item><Nav.Link href="/"><FaUser/> Profile</Nav.Link></ListGroup.Item>
</ListGroup>
        
        
     </Nav>
    </Navbar.Collapse>
  
</Navbar>
</Col>
</Row>
</div>
    </Container>
    </header>
    </>
  )
}
