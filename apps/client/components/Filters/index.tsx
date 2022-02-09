import React from 'react';
import styles from './index.module.css'
import { DropdownButton,Dropdown, Container, Col,Row} from 'react-bootstrap';
import {StyledContainer, StyledDropdownButton} from './styles';
const Filters = () => {
  return (


    <StyledContainer fluid>
      <Row>
        <Col sm={3} >
          <StyledDropdownButton classname = {styles.but} bd="blue" variant="secondary"title="ESPECIALIDAD">
            <Dropdown.Item href="#/action-1">Inteligencia Artificial</Dropdown.Item>
            <Dropdown.Item href="#/action-2">Desarrollo Web</Dropdown.Item>
            <Dropdown.Item href="#/action-3">Ciberseguridad</Dropdown.Item>
            <Dropdown.Item href="#/action-3">Desarrollo de Juegos</Dropdown.Item>
          </StyledDropdownButton>
        </Col>
        <Col sm={3}>
          <StyledDropdownButton variant="secondary" title="TEMA">
            <Dropdown.Item href="#/action-1">Java</Dropdown.Item>
            <Dropdown.Item href="#/action-2">Phyton</Dropdown.Item>
            <Dropdown.Item href="#/action-3">Sistemas Operativos</Dropdown.Item>
            <Dropdown.Item href="#/action-3">WebSockets</Dropdown.Item>
          </StyledDropdownButton>
        </Col>
        <Col sm={3}>
          <StyledDropdownButton variant="secondary" title="NIVEL">
            <Dropdown.Item href="#/action-1">Avanzado</Dropdown.Item>
            <Dropdown.Item href="#/action-2">Intermedio</Dropdown.Item>
            <Dropdown.Item href="#/action-3">Basico</Dropdown.Item>
          </StyledDropdownButton>
        </Col>
        <Col sm={3}>
          <StyledDropdownButton variant="secondary" title="PRECIO">
            <Dropdown.Item href="#/action-1">$10</Dropdown.Item>
            <Dropdown.Item href="#/action-2">$10-15</Dropdown.Item>
            <Dropdown.Item href="#/action-3">$15-20</Dropdown.Item>
          </StyledDropdownButton>
        </Col>
      </Row>
    </StyledContainer>

  );
};

export default Filters;
