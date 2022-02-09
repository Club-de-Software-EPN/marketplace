import styles from './index.module.css';
import {Container, Row,Image, Button, Nav, Col, Navbar, Tabs, Tab, Card, } from 'react-bootstrap';

const Header= () =>
<Row>
<Card className={styles.texto}>
  <Card.Img className={styles.imagen}  src="/fondoH.png" alt="Card image" />
  <Card.ImgOverlay>
    <Card.Text> <button type="button" className={styles.letras}>LEARNING SOFTWARE DEVELOPMENT</button></Card.Text>
    <button type="button" className={styles.letras1}>KNOW MORE</button>
  </Card.ImgOverlay>
</Card>
</Row>
;
export default Header;
