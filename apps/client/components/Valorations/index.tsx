import styles from './index.module.css';
import { AiFillStar,AiOutlineComment,AiOutlineUser } from "react-icons/ai";
import {Row, Button, Col,  Card, ProgressBar,Carousel} from 'react-bootstrap';
const lyrics = {
  color: "#5227CC"
}
const buttonS = {
  background: "#5227CC"
}
const barProg = {
  color: "#5227CC"
}

const Valorations = () => (
  <Row>
    <Col sm={4} md={4}>
      <h2 style={lyrics}>Valoraciones</h2>
      <Row>
        <AiOutlineUser style={{ fontSize: '80px' }}></AiOutlineUser>
        <ProgressBar animated now={65} style={barProg} />
      </Row>
      <Row>
        <AiFillStar style={{ fontSize: '80px' }}></AiFillStar>
        <ProgressBar animated now={75} />
      </Row>
      <Row>
        <AiOutlineComment style={{ fontSize: '80px' }}></AiOutlineComment>
        <ProgressBar animated now={85} />
      </Row>
    </Col>
    <Col>
    <Row className="text-center">
    <h2 style={lyrics}> OTROS EQUIPOS</h2>
    </Row>
    <Row>
    <Col sm={4} md={4}>
      <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src="https://via.placeholder.com/100x80" />
        <Card.Body>
          <Card.Title>Card Title</Card.Title>
          <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the cars content.
          </Card.Text>
          <Button style={buttonS} variant="primary">AÑADIR AL CARRITO</Button>
        </Card.Body>
      </Card>
    </Col>
    <Col sm={4} md={4}>
      <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src="https://via.placeholder.com/100x80" />
        <Card.Body>
          <Card.Title>Card Title</Card.Title>
          <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the cars content.
          </Card.Text>
          <Button style={buttonS} variant="primary">AÑADIR AL CARRITO</Button>
        </Card.Body>
      </Card>
    </Col>
    <Col sm={4} md={4}>
      <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src="https://via.placeholder.com/100x80" />
        <Card.Body>
          <Card.Title>Card Title</Card.Title>
          <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the cars content.
          </Card.Text>
          <Button style={buttonS}variant="primary">AÑADIR AL CARRITO</Button>
        </Card.Body>
      </Card>
    </Col>
    </Row>
    </Col>
  </Row>
);
export default Valorations;