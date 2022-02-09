
import {
  Container,
  Image,
  Button,
  Form,
  FormControl,
  InputGroup,
} from 'react-bootstrap';
import Line from '../components/Line';

const icons = {
  width: '25px',
  backgroundColor: '',
};

const buttonWidth = {
  width: '100%',
};



export function FormSignIn() {
  return (
    <Container
      className="col-12 col-md-10 col-lg-4 text-center"
      style={{ height: '100vh' }}
    >
      <Container className="pt-5 position-relative top-50 start-50 translate-middle">
        <h1>Bienvenido</h1>
        <Line />
        <Form>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Button variant="Ligth btn-outline-dark" style = {buttonWidth}>
              <Image
                src="https://pngimg.com/uploads/google/google_PNG19630.png"
                style={icons}
              />
                Sign in with Google 
            </Button>
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Control type="email" placeholder="Correo Electrónico" />
          </Form.Group>

          <InputGroup className="mb-3">
            <FormControl
              placeholder="Contraseña"
              type="password"
              aria-label="Password input"
              aria-describedby="basic-addon"
            />
            <Button id="button-addon" style={{ background: '#5C0F8B'}}>
              Mostrar
            </Button>
          </InputGroup>
            <Button style={{ background: '#5C0F8B', width: '100%' }}>
              Inicio Sesión
            </Button>
        </Form>
      </Container>
    </Container>
  );
}

export default FormSignIn;
