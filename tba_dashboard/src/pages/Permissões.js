import React, { useState } from 'react';
import Card from "react-bootstrap/Card";
import { Row, Col } from "react-bootstrap";
import InputGroup from 'react-bootstrap/InputGroup';
import Button from 'react-bootstrap/Button';
import Table from "react-bootstrap/Table";
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Pagination from 'react-bootstrap/Pagination';
import Modal from 'react-bootstrap/Modal';
import Sidebar from '../components/Sidebar';
import NavbarCom from '../components/NavbarCom';

const Permissões = () => {
    let active = 2;
    let items = [];
    for (let number = 1; number <= 3; number++) {
        items.push(
            <Pagination.Item key={number} style={{ color: 'red' }} active={number === active}>
                {number}
            </Pagination.Item>,
        );
    }
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const NAVBAR = () => {
        return (
            <Navbar expand="lg">
                <Navbar.Brand className='fw-bolder' href="#">Permissões</Navbar.Brand>
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll">
                    <Nav className="me-auto my-2 my-lg-0" style={{ maxHeight: '100px' }} navbarScroll>
                        <InputGroup className='rounded-2'>
                            <InputGroup.Text id="basic-addon1" className='border-0' style={{ background: 'white' }}><i className="bi bi-search"></i></InputGroup.Text>
                            <Form.Control type="Search" placeholder="Procurar...." aria-label="Search" aria-describedby="basic-addon1" className="border-0 ps-0" />
                        </InputGroup>
                    </Nav>
                    <Button className="fs-color btnn mx-1 border-0 bg-white">Pendentes</Button>
                    <Button className="fs-color btnn mx-1 border-0 bg-white">Respondidas</Button>
                    <Button className="fs-color mx-1 border-0 fw-bold text-white" style={{background:'#85A6A2'}}>Todas</Button>
                </Navbar.Collapse>
            </Navbar>
        )
    }

    const MODAL = () => {
        return (
            <>
                <Modal size='sm' show={show} onHide={handleClose}>
                    <h6 className='m-0 d-flex justify-content-end'><Button onClick={handleClose} className='bg-white mx-3 border-0 text-dark p-0 px-2'>x</Button></h6>
                    <Row className='px-3'>
                        <Col md={4}>
                            <img src='/assets/img/madam.png'></img>
                        </Col>
                        <Col><label className='mt-2' style={{ fontSize: '14px' }}>Autorizar Ana Júlia Garcia a ter acesso aos Insights da empresa?</label></Col>
                    </Row>
                    <Row className='px-3 mb-3'>
                        <Col md={12} className='d-flex justify-content-center'>
                            <hr className='w-25' />
                        </Col>
                        <Col><Button variant='danger' className='w-100 px-0 fw-bold' style={{ fontSize: '14px' }}><img style={{ marginTop: '-5px' }} src='/assets/img/X.png'></img> Não autorizar</Button></Col>
                        <Col><Button variant='success' className='w-100 px-0 fw-bold' style={{ fontSize: '14px' }}><img src='/assets/img/Right.png'></img> Autorizar</Button></Col>
                    </Row>
                </Modal>
            </>
        )
    }

    const TABLE = () => {
        return (
            <Table className="p-3 table-fit text-wrap tbl-color-text" responsive>
                <thead>
                    <tr>
                        <th className='tbl-head-color'>Nome </th>
                        <th className='tbl-head-color'>Email </th>
                        <th className='tbl-head-color'>Função </th>
                        <th className='tbl-head-color'>Insights</th>
                        <th className='tbl-head-color'>Contatos pendentes </th>
                        <th className='tbl-head-color'>Contatos respondidos </th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td className='fw-bold'>Ana Júlia Garcia</td>
                        <td >anajulia@vanceh.com</td>
                        <td >Marketing </td>
                        <td >
                            <Button variant=" success" size='lg' className="p-0 fw-bolder text-success  border-0" onClick={handleShow}>
                                <i className="bi bi-check"></i>Autorizar
                            </Button>
                        </td>

                        <td >
                            <Button variant="danger" size='lg' className="p-0 fw-bolder text-danger button-red">
                                <i className="bi bi-x"></i>Remover
                            </Button>
                        </td>
                        <td >

                            <Button variant=" success" size='lg' className="p-0 button-green  fw-bolder text-success  border-0 ">
                                <i className="bi bi-check"></i>Autorizar
                            </Button>
                        </td>
                    </tr>

                </tbody>
            </Table>
        )
    }

    return (
        <>
            <NavbarCom />
            <Row style={{ marginTop: '6.9%' }}>
                <Col md={2}>
                    <Sidebar />
                </Col>
                <Col md={10} style={{ background: '#DCDFE5' }}>
                    <h2 className='mt-3 ms-5'>Permissões</h2>
                    <Card className="p-3 m-5 my-3">
                        <Row>
                            <Col className='m-2'>
                                <NAVBAR />
                            </Col>
                            {/* table */}
                            <Col md={12} className='m-2' >
                                <TABLE/>
                            </Col>
                            {/* pagination */}
                            <Col className='d-flex justify-content-center me-auto m-2' md={12}>
                                <Pagination>
                                    <Pagination.Prev />
                                    {items}
                                    {/* <Pagination.Ellipsis /> */}
                                    <Pagination.Next />
                                </Pagination>
                            </Col>
                        </Row>
                        <MODAL />
                    </Card>
                </Col>
            </Row>
        </>
    )
}

export default Permissões
