import React from "react";
import { Button, Col, Form, InputGroup, Row } from "react-bootstrap";

const RegisterForm = () => {
	return (
		<div>
			<Row>
				<Col md={12} className='mt-3'>
					<Form>
						<Form.Label className='fs-6'>
							Link para criação
						</Form.Label>
						<InputGroup className='mb-3'>
							<InputGroup.Text id='basic-addon1' className='p-2'>
								<i
									class='bi bi-link-45deg'
									style={{ color: "#CED4DB" }}></i>
							</InputGroup.Text>
							<Form.Control
								placeholder='Link que você recebeu'
								className='ps-0'
								aria-describedby='basic-addon1'
							/>
						</InputGroup>
						<Form.Label className='fs-6'>Seu cargo</Form.Label>
						<InputGroup className='mb-3'>
							<InputGroup.Text id='basic-addon1' className='p-2'>
								<i
									class='bi bi-bag-dash-fill'
									style={{ color: "#CED4DB" }}></i>
							</InputGroup.Text>
							<Form.Control
								placeholder='Marketing'
								className='ps-0'
								aria-describedby='basic-addon1'
							/>
						</InputGroup>
						<Form.Label className='fs-6'>Nome</Form.Label>
						<InputGroup className='mb-3'>
							<InputGroup.Text id='basic-addon1' className='p-2'>
								<i
									class='bi bi-person-fill'
									style={{ color: "#CED4DB" }}></i>
							</InputGroup.Text>
							<Form.Control
								placeholder='Seu primeiro e último nome'
								className='ps-0'
								aria-describedby='basic-addon1'
							/>
						</InputGroup>
						<Form.Label className='fs-6'>Senha</Form.Label>
						<InputGroup className='mb-3'>
							<InputGroup.Text id='basic-addon1' className='p-2'>
								<i
									class='bi bi-lock-fill'
									style={{ color: "#CED4DB" }}></i>
							</InputGroup.Text>
							<Form.Control
								placeholder='Sua senha'
								className='eye-logo ps-0'
								aria-describedby='basic-addon1'
							/>
							<InputGroup.Text id='basic-addon1' className='p-2'>
								<i
									class='bi bi-eye-slash-fill'
									style={{ color: "#CED4DB" }}></i>
							</InputGroup.Text>
						</InputGroup>
						<Form.Label className='fs-6'>Repetir senha</Form.Label>
						<InputGroup className='mb-3'>
							<InputGroup.Text id='basic-addon1' className='p-2'>
								<i
									class='bi bi-lock-fill'
									style={{ color: "#CED4DB" }}></i>
							</InputGroup.Text>
							<Form.Control
								placeholder='Sua senha'
								className='eye-logo ps-0'
								aria-describedby='basic-addon1'
							/>
							<InputGroup.Text id='basic-addon1' className='p-2'>
								<i
									class='bi bi-eye-slash-fill'
									style={{ color: "#CED4DB" }}></i>
							</InputGroup.Text>
						</InputGroup>
					</Form>
				</Col>
				<Col className='d-flex mt-1 justify-content-center'>
					<Button
						className='login-btn px-5 py-2 fw-bold fs-4'
						onClick={""}
						type='submit'>
						Criar conta
					</Button>
				</Col>
			</Row>
		</div>
	);
};

export default RegisterForm;
