import { Row} from 'react-bootstrap'
import { FrontPag } from '../components/FrontPag'
import { FormSignIn } from '../components/FormSignIn'

export function SignIn() {
  return (
    <Row className="mx-0 my-0">
      <FrontPag />
      <FormSignIn />  
    </Row>
  );
}

export default SignIn;