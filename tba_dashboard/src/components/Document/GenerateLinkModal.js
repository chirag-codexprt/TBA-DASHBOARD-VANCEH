import React from "react";
import { Button, Col, Form, InputGroup, Modal, Row } from "react-bootstrap";

const GenerateLinkModal = ({ open, handleClose }) => {
	return (
		<div>
			<Modal
				className='d-flex mt-5 align-items-center'
				show={open}
				onHide={handleClose}>
				<Row className='p-3 px-4'>
					<Col md={10}>
						<h3>Link para solicitação de documentos</h3>
					</Col>
					<Col>
						<Button
							onClick={handleClose}
							className='bg-white border text-dark'>
							X
						</Button>
					</Col>
				</Row>
				<Row className='flex-column px-4'>
					<Col>
						<h6>De quais documentos você precisa?</h6>
					</Col>
					<Col className='mt-2 ps-4'>
						<Form className='d-flex align-items-center'>
							<Form.Check
								className='chack-item fs-5 border-0'
								type='switch'
								id='custom-switch'
							/>
							<label>CPF/CNPJ</label>
						</Form>
					</Col>
					<Col className='mt-2 ps-4'>
						<Form className='d-flex align-items-center'>
							<Form.Check
								className='fs-5 border-0'
								type='switch'
								id='custom-switch'
								checked
							/>
							<label>Contrato social</label>
						</Form>
					</Col>
					<Col className='mt-2 ps-4'>
						<Form className='d-flex align-items-center'>
							<Form.Check
								className='fs-5 border-0'
								type='switch'
								id='custom-switch'
								checked
							/>
							<label>Comprovante de residência</label>
						</Form>
					</Col>
					<Col className='mt-3'>
						<h6>Link para compartilhar com o cliente</h6>
					</Col>
					<Col className='p-2'>
						<InputGroup className='border-0 rounded mb-3'>
							<Form.Control
								className='border-0 p-3'
								value='tbaconsulting.com.br/87A6DH7C'
							/>
							<InputGroup.Text
								id='basic-addon2'
								className='border-0 c-point'
								style={{ color: "#85A6A2" }}>
								Copiar
							</InputGroup.Text>
						</InputGroup>
					</Col>
					<Col className='my-3 w-100 d-flex justify-content-center'>
						<Button style={{ background: "#1C3D59" }}>
							Encaminhar
						</Button>
					</Col>
				</Row>
			</Modal>
		</div>
	);
};

export default GenerateLinkModal;
