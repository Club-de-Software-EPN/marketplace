import { Image,Navbar, Container, Nav, Col, NavDropdown, Form, FormControl,Button } from 'react-bootstrap';
import styles from './index.module.css'
import Search from './Search';


const SearchBar=()=>(
  <>
  <Navbar bg="light" expand="lg">
      <Container fluid>
          <Col sm={3}>
            <h1 className={styles.h1}>Busqueda</h1>
          </Col>
          <Col sm={9}>
           <Search/>
          </Col>
        </Container>
  </Navbar>
  </>
);

  export default SearchBar;

