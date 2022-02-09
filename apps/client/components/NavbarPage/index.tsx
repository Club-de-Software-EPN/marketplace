import styles from "./index.module.css";
import React from 'react';
import {Container, Row,Image, Button, Nav, Col, Navbar, Carousel, Tabs, Tab, Card, } from 'react-bootstrap';
const mainContainer = {
  background: "#5227CC"
}
const lyrics = {
  color: "#ffffff"
}

const NavbarPage = () => (
  <Navbar style = {mainContainer}>
    <Container>
      <Navbar.Brand  href="#home"><Image style={{ width: '3rem' }} src="http://localhost:4200/LogoClub.png"></Image>
      </Navbar.Brand>
      <Nav className="me-auto">
        <Nav.Link style = {lyrics} href="/Inicio">Inicio</Nav.Link>
        <Nav.Link style = {lyrics} href="/Cursos">Cursos</Nav.Link>
        <Nav.Link style = {lyrics} href="/Contactanos">Contactanos</Nav.Link>
      </Nav>
    </Container>
  </Navbar>
);

export default NavbarPage;