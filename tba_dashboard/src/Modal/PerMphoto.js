import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { Row, Col } from "react-bootstrap";
import InputGroup from 'react-bootstrap/InputGroup';
import Form from 'react-bootstrap/Form';
const PerMphoto = ({shows,onHides}) => {

    return (
        <>
            <Modal show={shows} onHide={onHides} backdrop="static" keyboard={false} centered>
                <Modal.Body>
                    <Row>
                    <Col className='fw-bolder fs-3 ms-3'>Alterar foto</Col>
                    <Col className='d-flex justify-content-end'><Button onClick={onHides} className='border-0 text-dark p-0 mx-4 fs-4 bg-white'>x</Button></Col>
                    </Row>
                    <Row className='text-center'>
                        <Col md={12} className='my-3'>
                            <img src='/assets/img/madam2.png' />
                        </Col>
                        <Col sm={8} md={8} style={{ color: '#B5B6B7' }} className='my-1  mx-auto'>
                            {/* <InputGroup className="mb-3 border-0 rounded" >
                                <InputGroup.Text
                                    className='bg-white border-0'
                                    style={{ backgroundColor: '#F4F6F8' }}>
                                    <i className="bi bi-image fs-color" ></i>
                                </InputGroup.Text>
                                <Form.Control
                                    className='border-0 shadow-none'
                                    placeholder='Selecionar da galeria'
                                    type='file' />
                            </InputGroup> */}
                            <span><i className="bi bi-image px-2 "></i>&nbsp;Selecionar da galeria</span>
                        </Col>
                        <div><hr className='w-50 mx-auto' style={{ color: '#B5B6B7' }} /></div>
                        <Col sm={8} md={8}  style={{ color: '#B5B6B7' }} className='mb-4 mx-auto'>
                            {/* <InputGroup className="mb-3 border-0 rounded items-center" >
                                <InputGroup.Text
                                    className='bg-white border-0'
                                    style={{ backgroundColor: '#F4F6F8' }}>
                                    <i className="bi bi-camera-fill fs-color " ></i>
                                </InputGroup.Text>
                                <Form.Control disabled
                                    className='border-0 shadow-none'
                                    placeholder=' Abrir a câmera'
                                    type={"text"} />
                            </InputGroup> */}

                            <span><i className="bi bi-camera-fill"></i>&nbsp;Abrir a câmera</span>
                        </Col>
                        <Col className='mx-auto' sm={6}>
                            <Button className='fw-bolder fs-6 w-100' style={{ backgroundColor: '#1C3D59' }}>Atualizar</Button>
                        </Col>
                    </Row>
                </Modal.Body>
            </Modal>
        </>
    )
}

export default PerMphoto