import styles from './index.module.css';
import {Container, Row,Image, Button, Nav, Col, Navbar, Carousel, Tabs, Tab, Card, } from 'react-bootstrap';

const InformationCourse = () => (
  <Row>
    <Tabs
      defaultActiveKey="profile"
      id="uncontrolled-tab-example"
      className="mb-3"
    >
      <Tab eventKey="info" title="Informacion General">
        En tu curso de Universidad de Programación 2021 aprenderás los
        Fundamentos de Programación y mucho más, absolutamente desde cero, en
        los 3 lenguajes de programación más populares al día de hoy: Python,
        Java y JavaScript. Actualmente no basta con saber un lenguaje de
        programación, la industria demanda conocer varios lenguajes de
        programación a profundidad y de manera profesional. En este curso
        aprenderás absolutamente desde cero cada uno de los lenguajes de
        programación más populares al día de hoy. Python, Java y JavaScript. Una
        vez que conozcas y estudies cada lenguaje, podrás compararlos,
        diferenciarlos y entender a detalle la sintaxis básica, intermedia y
        hasta avanzada en cada uno de estos lenguajes. Con ello estarás listo
        para decidir en qué lenguaje profundizar, y todo te será más sencillo de
        aprender después de estudiar este curso, ya que tendrás las bases de
        cada lenguaje de programación.
      </Tab>
      <Tab eventKey="contenidos" title="Contenidos"></Tab>
      <Tab eventKey="temario" title="Temario"></Tab>
      <Tab eventKey="horarios" title="Horarios"></Tab>
    </Tabs>
  </Row>
);
export default InformationCourse;