import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { Row, Col } from "react-bootstrap";
import InputGroup from 'react-bootstrap/InputGroup';
import Form from 'react-bootstrap/Form';
import Table from "react-bootstrap/Table";

const NewAccount = ({showNew,newC}) => {
    return (
        <>
            <Modal
                show={showNew}
                onHide={newC}
                backdrop="static"
                keyboard={false}
                centered

            >
                <Modal.Header closeButton className='border-0'>
                    <Modal.Title className='fw-bolder'>Código para nova conta</Modal.Title>
                </Modal.Header>
                <Modal.Body  >
                    <Row>
                        <Col md={12} className='my-2'>
                            <p className='fs-6 fw-bold'>Qual a função da pessoa?</p>
                            <InputGroup className="mb-3 border-0 rounded " style={{ backgroundColor: '#F4F6F8' }} >
                                <InputGroup.Text
                                    className=' border-0'
                                    style={{ backgroundColor: '#F4F6F8' }}
                                >
                                    <i class="bi bi-briefcase-fill"></i>
                                </InputGroup.Text>
                                <Form.Control
                                    style={{ backgroundColor: '#F4F6F8' }}
                                    className='border-0 shadow-none'
                                    placeholder='Nova Senha'
                                />
                            </InputGroup>
                        </Col>
                        <Col md={12}>
                            <p className='fw-bold fs-6'>Autorizações</p>
                            <Table className="p-3 table-fit text-wrap tbl-color-text text-center " responsive>
                                <thead className='small'>
                                    <tr>
                                        <th style={{ color: '#B5B6B7' }}>Insights </th>
                                        <th style={{ color: '#B5B6B7' }}>Contatos </th>
                                        <th style={{ color: '#B5B6B7' }}>Documentos</th>

                                    </tr>
                                </thead>
                                <tbody >
                                    <tr >
                                        <td className='fw-bold'>
                                            <Button
                                                variant=" success"
                                                size='lg'
                                                className="mx-1 button-green  fw-bolder text-success  border-0 ">
                                                <small>
                                                    <i className="bi bi-x"></i>
                                                    Autorizar
                                                </small>
                                            </Button></td>
                                        <td >
                                            <Button
                                                variant="danger"
                                                size='lg'
                                                className="mx-1 fw-bolder text-danger button-red ">
                                                <i className="bi bi-check"></i>
                                                Autorizar
                                            </Button></td>
                                        <td >
                                            <Button
                                                variant="danger"
                                                size='lg'
                                                className="mx-1 fw-bolder text-danger button-red ">
                                                <i className="bi bi-check"></i>
                                                Autorizar
                                            </Button></td>

                                    </tr>
                                </tbody>
                            </Table>
                        </Col>
                        <Col md={12}>
                            <p className='fw-bold fs-6'>Código para criação de conta</p>
                            <InputGroup className="mb-3">

                                <Form.Control placeholder='89C8217J91OAI' className='p-2 border-0 shadow-none' style={{ backgroundColor: '#F4F6F8' }} />
                                <InputGroup.Text className='border-0' style={{ backgroundColor: '#F4F6F8' }}>Copiar</InputGroup.Text>
                            </InputGroup>

                        </Col>
                        {/* button */}
                        <Col className='text-center'>
                            <Button className='fw-bolder fs-6 w-50 border-0' style={{ backgroundColor: '#1C3D59' }}>Gerar código</Button>
                        </Col>
                    </Row>
                </Modal.Body>

            </Modal>

        </>
    )
}

export default NewAccount