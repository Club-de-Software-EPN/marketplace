import React from 'react';
import { Row ,Image,Container, Button, Nav, Col, Navbar, Tabs, Tab, Figure,RowProps, Card} from 'react-bootstrap';

const CourseCards= () => {
  return (
    <Container>

      <Row xs={12} >
        <Col>
          <Card style={{ width: '18rem', borderWidth: 'bold', background: '#F3E5F5' }}>
            <Image
              width={'287px'}
              height={'280px'}
              src="/fondo1.png"></Image>
            <Card.Body>
              <Card.Title>CURSO 1. Sobre algo</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up the bulk of
                the card's content.
              </Card.Text>
              <h1 className="btn bg-danger"> 9.99$ </h1>
              <Row>
                <Col>
                  <button type="button" className="btn btn-warning">Programación</button>
                  <button type="button" className="btn btn-info">Popular</button>
                </Col>
              </Row>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card style={{ width: '18rem' , borderWidth: 'bold', background: '#F3E5F5' }}>
            <Image
              width={'287px'}
              height={'280px'}
              src="/fondo1.png"></Image>
            <Card.Body>
              <Card.Title>CURSO 2. Sobre algo</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up the bulk of
                the card's content.
              </Card.Text>
              <h1 className="btn bg-danger"> 9.99$ </h1>
              <Row>
                <Col>
                  <button type="button" className="btn btn-warning">Programación</button>
                  <button type="button" className="btn btn-info">Popular</button>
                </Col>
              </Row>

            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card style={{ width: '18rem' , borderWidth: 'bold', background: '#F3E5F5'}}>
            <Image
              width={'287px'}
              height={'280px'}
              src="/fondo1.png"></Image>
            <Card.Body>
              <Card.Title>CURSO 3. Sobre algo</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up the bulk of
                the card's content.
              </Card.Text>
              <h1 className="btn bg-danger"> 9.99$ </h1>
              <Row>
                <Col>
                  <button type="button" className="btn btn-warning">Programación</button>
                  <button type="button" className="btn btn-info">Popular</button>
                </Col>
              </Row>
            </Card.Body>
          </Card>
        </Col>

        <Col>
          <Card style={{ width: '18rem' , borderWidth: 'bold', background: '#F3E5F5' }}>
            <Image
              width={'287px'}
              height={'280px'}
              src="/fondo1.png"></Image>
            <Card.Body>
              <Card.Title>CURSO 4. Sobre algo</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up the bulk of
                the card's content.
              </Card.Text>
              <h1 className="btn bg-danger"> 9.99$ </h1>
              <Row>
                <Col>
                  <button type="button" className="btn btn-warning">Programación</button>
                  <button type="button" className="btn btn-info">Popular</button>
                </Col>
              </Row>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card style={{ width: '18rem', borderWidth: 'bold', background: '#F3E5F5' }}>
            <Image
              width={'287px'}
              height={'280px'}
              src="/fondo1.png"></Image>
            <Card.Body>
              <Card.Title>CURSO 5. Sobre algo</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up the bulk of
                the card's content.
              </Card.Text>
              <h1 className="btn bg-danger"> 9.99$ </h1>
              <Row>
                <Col>
                  <button type="button" className="btn btn-warning">Programación</button>
                  <button type="button" className="btn btn-info">Popular</button>
                </Col>
              </Row>

            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card style={{ width: '18rem', borderWidth: 'bold', background: '#F3E5F5' }}>
            <Image
              width={'287px'}
              height={'280px'}
              src="/fondo1.png"></Image>
            <Card.Body>
              <Card.Title>CURSO 6. Sobre algo</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up the bulk of
                the card's content.
              </Card.Text>
              <h1 className="btn bg-danger"> 9.99$ </h1>
              <Row>
                <Col>
                  <button type="button" className="btn btn-warning">Programación</button>
                  <button type="button" className="btn btn-info">Popular</button>
                </Col>
              </Row>
            </Card.Body>
          </Card>
        </Col>

        <Col>
          <Card style={{ width: '18rem' , borderWidth: 'bold', background: '#F3E5F5'}}>
            <Image
              width={'287px'}
              height={'280px'}
              src="/fondo1.png"></Image>
            <Card.Body>
              <Card.Title>CURSO 7. Sobre algo</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up the bulk of
                the card's content.
              </Card.Text>
              <h1 className="btn bg-danger"> 9.99$ </h1>
              <Row>
                <Col>
                  <button type="button" className="btn btn-warning">Programación</button>
                  <button type="button" className="btn btn-info">Popular</button>
                </Col>
              </Row>
            </Card.Body>
          </Card>
        </Col>

        <Col>
          <Card style={{ width: '18rem', borderWidth: 'bold', background: '#F3E5F5' }}>
            <Image
              width={'287px'}
              height={'280px'}
              src="/fondo1.png"></Image>
            <Card.Body>
              <Card.Title>CURSO 8. Sobre algo</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up the bulk of
                the card's content.
              </Card.Text>
              <h1 className="btn bg-danger"> 9.99$ </h1>
              <Row>
                <Col>
                  <button type="button" className="btn btn-warning">Programación</button>
                  <button type="button" className="btn btn-info">Popular</button>
                </Col>
              </Row>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};
export default CourseCards;
