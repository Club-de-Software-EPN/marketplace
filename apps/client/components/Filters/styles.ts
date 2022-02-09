import styled from 'styled-components';
import { Container, Image , DropdownButton,Dropdown} from 'react-bootstrap';

export const HeaderTitle=styled.h1`
color:red;
font-size: 1.5rem;
font-weigth:bold;
align-self:center
`;

export const StyledImage=styled(Image)`

    border-radius:50%;

    max-width: 50%;
    max-height: 50%;
    align-items:center;
    display:block;
    margin:auto;

 `;

export const StyledContainer=styled(Container)`
  min-height: 200px;
  padding-top: 20px;
 `;

export const StyledDropdownButton=styled(DropdownButton)`
  width: 600px;
 `;
