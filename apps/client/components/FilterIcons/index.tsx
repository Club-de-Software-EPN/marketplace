import React from 'react';
import  './index.module.css'
import { Col, Row, Container} from 'react-bootstrap';
import {StyledImage,StyledTitle} from './styles';

const FilterIcons = () => {
  return (
    <Container fluid >
      <Row>

        <Col sm={4}>
              <StyledImage src="/logo.png"/>
              <StyledTitle>NEW</StyledTitle>
              <StyledTitle>COURSES</StyledTitle>
        </Col>

        <Col sm={4}>
          <StyledImage src="/logo.png" />
          <StyledTitle>SUSCRIBED</StyledTitle>
          <StyledTitle>COURSES</StyledTitle>
        </Col>

        <Col sm={4}>
          <StyledImage src="/logo.png"/>
          <StyledTitle>MOST</StyledTitle>
          <StyledTitle>POPULAR</StyledTitle>
        </Col>

      </Row>
    </Container>

  );
};
export default FilterIcons;
