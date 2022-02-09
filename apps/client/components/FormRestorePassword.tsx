import { Stack, FormControl, Button, InputGroup, Form } from 'react-bootstrap';

export function FormRestorePassword() {
  return (
    <Form>
      <Stack gap={4} className="col-12 col-md-10 mx-auto">

        <Form.Group className="text-center fs-3 fw-bolder mt-3">
          <Form.Label>¿Has olvidado tu contraseña?</Form.Label>
        </Form.Group>

        <Form.Group className="text-center fs-3 fw-bolder mt-3">
          <Form.Label>Puedes recuperarla con tu correo electrónico</Form.Label>
        </Form.Group>

        <Form.Group>
          <InputGroup className="mb-3">
            <FormControl
              placeholder="Correo Electrónico"
              type="email"
              aria-label="email input"
              aria-describedby="basic-addon"
            />
            <Button id="button-addon" style={{ background: '#5C0F8B' }}>
              Enviar
            </Button>
          </InputGroup>
        </Form.Group>

        <Form.Group className="text-center fs-0 fw-bolder mt-3">
          <Form.Label>Ya tienes cuenta? <a href="#login">Entra</a> o <a href="#signup">Registrate</a></Form.Label>
        </Form.Group>

      </Stack>
    </Form>
  );
}

export default FormRestorePassword;
