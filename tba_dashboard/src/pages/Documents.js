import React, { useState } from 'react'
import { Card, Row, Col } from 'react-bootstrap'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { InputGroup } from 'react-bootstrap';
import Table from 'react-bootstrap/Table';
import Modal from 'react-bootstrap/Modal';
import NavbarCom from '../components/NavbarCom';
import Sidebar from '../components/Sidebar';


const Documents = () => {

    const [modalshow, setModalShow] = useState(false);

    const handleClose = () => setModalShow(false);

    const [rowdata, setRowData] = useState([
        {
            state: true,
            class: 'row-height',
            name: '',
            code: '',
            email: '',
            Date: '',
            time: '',
        },
        {
            state: true,
            class: 'row-height',
            name: '',
            code: '',
            email: '',
            Date: '',
            time: '',
            openbtn: true
        },
        {
            state: false,
            class: '',
            name: '',
            code: '',
            email: '',
            Date: '',
            time: '',
        },
        {
            state: false,
            class: '',
            name: '',
            code: '',
            email: '',
            Date: '',
            time: '',
        },
    ])

    const [m, setM] = useState(true)

    function openRow(i) {
        let temp = rowdata
        temp[i].state = true
        temp[i].class = 'row-height'
        setRowData(temp)
        setM(!m)
    }
    function closeRow(i) {
        let temp = rowdata
        temp[i].state = false
        temp[i].class = ''
        setRowData(temp)
        setM(!m)
    }

    const NAVBAR = () => {
        return (
            <Navbar className='my-2' expand="lg">
                <Navbar.Brand className='fw-bolder' href="#">Documentos</Navbar.Brand>
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll">
                    <Nav
                        className="me-auto my-2 my-lg-0" style={{ maxHeight: '100px' }} navbarScroll >
                        <InputGroup className='rounded-2'>
                            <InputGroup.Text id="basic-addon1" className='border-0' style={{ background: '#F4F4F4' }}><i className="bi bi-search"></i></InputGroup.Text>
                            <Form.Control type="Search" placeholder="Procurar...." aria-label="Search" aria-describedby="basic-addon1" className="border-0" />
                        </InputGroup>
                    </Nav>
                    <Button className="fs-color btnn mx-1 border-0 bg-white">Concluídos</Button>
                    <Button className="fs-color btnn mx-1 border-0 bg-white">Pendentes</Button>
                    <Button className="fs-color btnn mx-1 border-0 bg-white">Todas</Button>
                </Navbar.Collapse>
            </Navbar>
        )
    }

    const Modals = () => {
        return (
            <Modal className='d-flex mt-5 align-items-center' show={modalshow} onHide={handleClose}>
                <Row className='p-3 px-4'>
                    <Col md={10}><h3>Link para solicitação de  documentos</h3></Col>
                    <Col><Button onClick={handleClose} className='bg-white border text-dark'>X</Button></Col>
                </Row>
                <Row className='flex-column px-4'>
                    <Col><h6>De quais documentos você precisa?</h6></Col>
                    <Col className='mt-2 ps-4'>
                        <Form className='d-flex align-items-center'>
                            <Form.Check className='chack-item fs-5 border-0' type="switch" id="custom-switch" />
                            <label>CPF/CNPJ</label>
                        </Form>
                    </Col>
                    <Col className='mt-2 ps-4'>
                        <Form className='d-flex align-items-center'>
                            <Form.Check className='fs-5 border-0' type="switch" id="custom-switch" checked />
                            <label>Contrato social</label>
                        </Form>
                    </Col>
                    <Col className='mt-2 ps-4'>
                        <Form className='d-flex align-items-center'>
                            <Form.Check className='fs-5 border-0' type="switch" id="custom-switch" checked />
                            <label>Comprovante de residência</label>
                        </Form>
                    </Col>
                    <Col className='mt-3'><h6>Link para compartilhar com o cliente</h6></Col>
                    <Col className='p-2'>
                        <InputGroup className="border-0 rounded mb-3">
                            <Form.Control className='border-0 p-3' value="tbaconsulting.com.br/87A6DH7C" />
                            <InputGroup.Text id="basic-addon2" className='border-0 c-point' style={{ color: '#85A6A2' }}>Copiar</InputGroup.Text>
                        </InputGroup>
                    </Col>
                    <Col className='my-3 w-100 d-flex justify-content-center'>
                        <Button style={{ background: '#1C3D59' }}>Encaminhar</Button>
                    </Col>
                </Row>
            </Modal>
        )
    }

    const TABLE = () => {
        return (
            <Table>
                <thead>
                    <tr>
                        <th>Nome</th>
                        <th>CPF/CNPJ</th>
                        <th>Email</th>
                        <th>Data</th>
                        <th>Hora</th>
                        <th>Status</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        rowdata.map((val, i) => {
                            return (
                                <tr className={val.class} style={{ position: 'relative' }}>
                                    <td>Ana Júlia Garcia</td>
                                    <td>000.000.000-00</td>
                                    <td>anajulia@vanceh.com</td>
                                    <td>13 dez 2022</td>
                                    <td>13:04</td>
                                    <td>
                                        {val.state && (<Button onClick={() => closeRow(i)} variant='warning'>Pendente</Button>)}
                                        {!val.state && (<Button onClick={() => openRow(i)} variant='success'>Concluído</Button>)}
                                    </td>
                                    {val.state && (
                                        <Row className='position-absolute' style={{ left: '0', bottom: '0', width: '100%' }}>
                                            <Col>
                                                <Col style={{ color: '#B5B6B7' }}>CPF/CNPJ</Col>
                                                <Col>
                                                    <Button className='w-100 p-0' variant="outline-success">
                                                        <i class="bi bi-check-lg fs-1"></i>
                                                        <h6 style={{ color: '#C4CCD2', fontSize: '11px' }} >Já aprovada, visualizar?</h6>
                                                    </Button>
                                                </Col>
                                            </Col>
                                            {!val.openbtn && (
                                                <Col>
                                                    <Col style={{ color: '#B5B6B7' }}>Contrato social</Col>
                                                    <Col>
                                                        <Button className='w-100 p-0 ms-0' variant="outline-warning">
                                                            <i class="bi bi-clock-fill fs-1"></i>
                                                            <h6 style={{ color: '#C4CCD2', fontSize: '11px' }} >Aguardando análise, visualizar?</h6>
                                                        </Button>
                                                    </Col>
                                                </Col>
                                            )}
                                            <Col>
                                                <Col style={{ color: '#B5B6B7' }}>Comprovante de residência</Col>
                                                <Col>
                                                    <Button className='w-100 p-0' variant="outline-secondary">
                                                        <label style={{ rotate: '45deg' }}><i class="bi bi-paperclip fs-1"></i></label>
                                                        <h6 style={{ color: '#C4CCD2', fontSize: '11px' }}>Arraste e solte aqui ou importe dos seus arquivos</h6>
                                                    </Button>
                                                </Col>
                                            </Col>
                                            {val.openbtn && (
                                                <Col className='d-flex align-items-center justify-content-end'>
                                                    <div className='mt-3' style={{ color: '#C4CCD2' }}>
                                                        ou<Button onClick={() => setModalShow(true)} className='border-0 ms-4' style={{ background: '#C4CCD2' }}>Gerar novo link</Button>
                                                    </div>
                                                </Col>
                                            )}
                                            <Row>
                                                <Col className='d-flex justify-content-center mt-2 ms-4' style={{ color: '#C4CCD2', fontSize: '12px' }}>Responsável por esse cliente: Renata Vasconcelos</Col>
                                            </Row>
                                        </Row>
                                    )}
                                </tr>
                            )
                        })
                    }
                </tbody>
            </Table>
        )
    }

    return (
        <>
            <NavbarCom />
            <Row style={{marginTop:'6.9%'}}>
                <Col md={2} >
                    <Sidebar />
                </Col>
                <Col md={10} style={{background:'#DCDFE5'}}>
                    <h2 className='mt-3 ms-5'>Documentos</h2>
                    <Card className='m-5 my-3 p-3 px-4'>
                        <NAVBAR />
                        <TABLE />
                        <Modals />
                    </Card>
                </Col>
            </Row>

        </>
    )
}

export default Documents