import { Container, Row } from 'react-bootstrap'
import { FormRestorePassword } from '../components/FormRestorePassword'
import { Logo } from '../components/MyLogo'
import { NameClub } from '../components/NameClub'

const mainContainer = {
  height: "100vh", width: "400vh",  background:"#5C0F8B"
}
const formContainer = {
  height: "60vh", background: "#FFFFFF", width: "80vh"
}
export function RestorePassword() {
  return (
    <Row className="mx-0 my-0">
      <Container className="d-flex justify-content-center flex-wrap" style={mainContainer}>
          <Container className="d-flex justify-content-center  px-0 mx-0 my-0">
            <Logo />
            <NameClub />
          </Container>
          <Container className="d-sm-flex rounded-3 justify-content-center" style = {formContainer}>
                <FormRestorePassword />
          </Container>
      </Container>
    </Row>
  );
}
export default RestorePassword;