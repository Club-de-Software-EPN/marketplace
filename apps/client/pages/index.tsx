import Header from '@components/Header';
import NavbarPage from '@components/NavbarPage';
import CarCarousel from '@components/CarCarousel';
import InformationCourse from '@components/InformationCourse';
import Valorations from '@components/Valorations';
import Comments from '@components/Comments';
import {Container, Row,Image, Button, Nav, Col, Navbar, Carousel, Tabs, Tab, Card, } from 'react-bootstrap';

export function Index() {
  return (
    <Container>
      <NavbarPage/>
      <Header/>
      <CarCarousel/>
      <InformationCourse/>
      <Valorations/>
      <Comments/>
    </Container>
  );
}

export default Index;
