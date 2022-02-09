import styled from 'styled-components';
import { Container, Image } from 'react-bootstrap';

export const StyledTitle=styled.p`
color: #54595E;
font-size: 1rem;
text-align:center;
line-height: 15px;
margin:auto;
`;

export const StyledImage=styled(Image)`

    border-radius:50%;
    background-color:#5C0F8B;
    max-width: 50%;
    max-height: 50%;
    align-items:center;
    display:block;
    margin:auto;

 `;

export const StyledContainer=styled(Container)`
  min-height: 100px;
 `;
