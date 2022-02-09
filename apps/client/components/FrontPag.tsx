import {Container, Image} from "react-bootstrap";
import Wabes from "../components/Wabes";
import {Logo} from "../components/MyLogo";
import {NameClub} from "../components/NameClub";

const frontPag = {
  height: '100vh', background:"#5C0F8B"
}

export function FrontPag() {
  return (
  <Container className=" mx-0 my-0 d-none d-lg-flex col-lg-8 p-0">
    <Container  className= "mx-0 my-0 d-flex align-items-center justify-content-center" style={frontPag} >
        <Logo />
        <NameClub />
    </Container>
    <Wabes />
  </Container>
    
  );
}

export default FrontPag;

