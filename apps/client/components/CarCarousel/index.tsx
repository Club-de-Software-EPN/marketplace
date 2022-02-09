import styles from './index.module.css';
import { Container, Row, Image, Button, Nav, Col, Navbar, Carousel, Tabs, Tab, Card, } from 'react-bootstrap';

const CarCarousel = () =>
  <Row>
    <Card className="text-center">
      <Card >
        <img style={{ height: '35rem' }} src="http://localhost:4200/ciber.jpeg/" />
      </Card>
      <Card.Body>
        <Card.Title>Special title treatment</Card.Title>
        <Card.Text>
          With supporting text below as a natural lead-in to additional content.
        </Card.Text>
         <Button variant="dark"> AÑADIR AL CARRITO</Button>{''}
        <>
        </>
      </Card.Body>
    </Card>
  </Row>
  ;
export default CarCarousel;