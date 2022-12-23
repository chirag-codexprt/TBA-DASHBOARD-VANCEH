import React from "react";
import Card from "react-bootstrap/Card";
import { Row, Col } from "react-bootstrap";
import Barchart1 from "./CHARTS/Barchart1";
import Linechart from "./CHARTS/Linechart";
import Linechart1 from "./CHARTS/Linechart1";
import Barchart from "./CHARTS/Barchart";
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import InputGroup from 'react-bootstrap/InputGroup';
import Button from 'react-bootstrap/Button';
import Table from "react-bootstrap/Table";
import Container from 'react-bootstrap/Container';
import NavbarCom from './NavbarCom'
import Sidebar from '../components/Sidebar'

const Insights = () => {

  const NAVBAR = () =>{
    return(
      <Navbar expand="lg">
      <Container fluid>
        <Navbar.Brand className='fw-bolder' href="#">
          <p className="fw-bolder">Visitas ao site</p>
          <p className=" fs-color">11 dez - 17 dez</p>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          {/* searchbar */}
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <InputGroup>
            </InputGroup>
          </Nav>
          {/* button */}
          <Button className="fs-color btnn m-1 border-0" style={{background:'#FBFBFB'}} >Ano</Button>
          <Button className="fs-color btnn m-1 border-0" style={{background:'#FBFBFB'}} >Mês</Button>
          <Button className="fs-color btnn m-1 border-0" style={{background:'#FBFBFB'}} >Semana</Button>
          <div className="vr" />
          <Button className="fs-color btnn m-1 " variant="light ">
            <i className="bi bi-calendar-fill fs-color"></i>
          </Button>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    )
  }

  const TABLE = () =>{
    return(
      <Table className="p-3 table-fit text-wrap tbl-color-text" responsive>
      <thead>
        <tr>
          <th className="tbl-head-color ">Nome </th>
          <th className="tbl-head-color ">CPF/CNPJ</th>
          <th className="tbl-head-color ">Email </th>
          <th className="tbl-head-color ">Data</th>
          <th className="tbl-head-color text-center">Hora </th>
          <th className="tbl-head-color text-center">Status </th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td className='fw-bold'>Ana Júlia Garcia</td>
          <td >000.000.000-00</td>
          <td >anajulia@vanceh.com </td>
          <td >13 dez 2022</td>
          <td className="text-center">13:04 </td>
          <td className="text-end">
            <Button variant="warning" size="lg">
              Pendente
            </Button>
          </td>
        </tr>
        <tr>
          <td className='fw-bold'>Ana Júlia Garcia</td>
          <td>000.000.000-00</td>
          <td>anajulia@vanceh.com </td>
          <td>13 dez 2022</td>
          <td className="text-center">13:04 </td>
          <td className="text-end">
            <Button variant="success" size="lg">
              Pendente
            </Button>
          </td>
        </tr>
        <tr>
          <td className='fw-bold'>Ana Júlia Garcia</td>
          <td>000.000.000-00</td>
          <td>anajulia@vanceh.com </td>
          <td>13 dez 2022</td>
          <td className="text-center">13:04 </td>
          <td className="text-end">
            <Button variant="success" size="lg">
              Pendente
            </Button>
          </td>
        </tr>
        <tr>
          <td className='fw-bold'>Ana Júlia Garcia</td>
          <td>000.000.000-00</td>
          <td>anajulia@vanceh.com </td>
          <td>13 dez 2022</td>
          <td className="text-center">13:04 </td>
          <td className="text-end">
            <Button variant="success" size="lg">
              Pendente
            </Button>
          </td>
        </tr>
      </tbody>
    </Table>
    )
  }
 
  return (
    <>
    <NavbarCom/>
    <Row style={{marginTop:'6.9%'}}>
      <Col md={2}>
        <Sidebar/>
      </Col>
      {/* <h2>Insights</h2> */}
      <Col md={10} style={{backgroundColor:'#DCDFE5'}}>
        <h2 className="mt-3 mx-5">Insigths</h2>
        <Card className="p-4 m-5 my-3" style={{ backgroundColor: "#FBFBFB" }}>
          <Row>
            {/* Dates and Button */}
            {/* <div className="d-flex justify-content-between">
              <div className="">
                <p className="fw-bolder">Visitas ao site</p>
                <p className=" fs-color">11 dez - 17 dez</p>
              </div>
              <div className="d-flex  flex-wrap">
                <Button className="fs-color btnn m-1" variant="light ">Ano</Button>
                <Button className="fs-color btnn m-1" variant="light ">Mês</Button>
                <Button className="fs-color btnn m-1" variant="light ">Semana</Button>
                <div className="vr" />
                <Button className="fs-color btnn m-1 " variant="light ">
                  <i className="bi bi-calendar-fill fs-color"></i>
                </Button>
              </div>
            </div> */}
            {/* navbar */}
            <NAVBAR/>
          </Row>
          {/* charts */}
          <Row className="my-3">
            {/* first card */}
            <Col md={6} className="">
              <Card>
                <Row className="p-3">
                  <Col xs={12} sm={12} md={6} className="text-center">
                    <img src="/assets/img/eye.png" />
                    <p className="m-2 fs-color">Total de visitas</p>
                    <p className="fs-color-fill m-2 ">149</p>
                  </Col>
                  {/* linechart left */}
                  <Col
                    xs={12}
                    sm={12}
                    md={6}
                    className="p-3 justify-content-center align-items-center d-flex"
                  >
                    <Linechart />
                  </Col>
                </Row>
              </Card>
            </Col>
            {/* second card */}
            <Col md={6}>
              {/* barchart right */}
              <Card className="p-3">
                <Barchart1 />
              </Card>
            </Col>
          </Row>
          <Row className="my-3">
            {/* third card */}
            <Col md={6}>
              <Card>
                <Row className="p-3 ">
                  <Col xs={12} sm={12} md={6} className="text-center  ">
                    <img src="/assets/img/file.png" />
                    <p className="m-2fs-color">Total de contatos</p>
                    <p className="m-2 fs-color-fill">17</p>
                  </Col>
                  {/* linechart left */}
                  <Col
                    xs={12}
                    sm={12}
                    md={6}
                    className="p-3 justify-content-center align-items-center   d-flex"
                  >
                    <Linechart1 />
                  </Col>
                </Row>
              </Card>
            </Col>
            {/* fourth card */}
            <Col md={6}>
              {/* barchart right */}
              <Card className="p-3">
                <Barchart />
              </Card>
            </Col>
          </Row>
          {/* tabels */}
          <TABLE/>
          <div className="text-end mx-2"><Button className="px-5 py-2" style={{backgroundColor: '#C4CCD2', border: 'none'}} >Ver tudo</Button></div>
        </Card>
      </Col>
      </Row>
    </>
  );
};

export default Insights;
