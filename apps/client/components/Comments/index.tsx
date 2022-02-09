import styles from './index.module.css';
import {Container, Card, } from 'react-bootstrap';
const lyrics = {
  color: "#5227CC"
}

const Comments = () => (
  <Container>
    <h1 style={lyrics}>Comentarios</h1>
    <div>
      <Card style={{ width: 'realtive' }}>
        <Card.Body>
          <Card.Title>User</Card.Title>
          <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card content.
          </Card.Text>
          <Card.Link href="#">Like</Card.Link>
          <Card.Link href="#">Answer</Card.Link>
        </Card.Body>
      </Card>
      <Card style={{ width: 'realtive' }}>
        <Card.Body>
          <Card.Title>User</Card.Title>
          <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card content.
          </Card.Text>
          <Card.Link href="">Like</Card.Link>
          <Card.Link href="">Answer</Card.Link>
        </Card.Body>
      </Card>
    </div>
  </Container>
);
export default Comments;