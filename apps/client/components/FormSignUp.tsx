import {Form, Stack, InputGroup, FormControl} from 'react-bootstrap';

export function FormSignUp() {
  return (

    <Form>
      <Stack gap={3} className="col-12  mx-auto">
      <Form.Group className="text-center fs-3 fw-bolder mt-3">
          <Form.Label>Registrate</Form.Label>
        </Form.Group>
        <InputGroup className="mb-2">
            <InputGroup.Text  className="col-5 col-sm-4"  id="inputGroup-name">Nombre:</InputGroup.Text>
            <FormControl aria-label="Default" aria-describedby="inputGroup-sizing-default"/>
        </InputGroup>

        <InputGroup className="mb-2">
            <InputGroup.Text  className="col-5 col-sm-4"  id="inputGroup-last-name">Apellido:</InputGroup.Text>
            <FormControl aria-label="input-name" aria-describedby="inputGroup-last-name"/>
        </InputGroup>

        <InputGroup className="mb-2">
            <InputGroup.Text className="col-5 col-sm-4" id="inputGroup-last-name">Correo:</InputGroup.Text>
            <FormControl aria-label="input-name" aria-describedby="inputGroup-last-name"/>
        </InputGroup>

        <InputGroup className="mb-1">
            <InputGroup.Text  className="col-5 col-sm-4"  id="inputGroup-last-name">Contraseña:</InputGroup.Text>
            <FormControl aria-label="input-name" aria-describedby="inputGroup-last-name" type="password"/>
        </InputGroup>

        <Form.Group className="text-center fs-0 fw-bolder mt-3">
          <Form.Label>Ya tienes cuenta?  <a href="#signup">Entra</a></Form.Label>
        </Form.Group>
      </Stack>

    </Form>
  );
}

export default FormSignUp;