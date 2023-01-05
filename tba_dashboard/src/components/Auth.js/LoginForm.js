import React from "react";
import { Button, Col, Form, InputGroup, Row } from "react-bootstrap";

const LoginForm = ({
	formValues,
	handleForm,
	ProLogin,
	hidePassword,
	hidePwd,
}) => {
	return (
		<div>
			<Row>
				<Col md={12} className='mt-4'>
					<Form>
						<Form.Label className='fs-5'>Email</Form.Label>
						<InputGroup className='mb-4'>
							<InputGroup.Text id='basic-addon1' className='p-2'>
								<i
									class='bi bi-person-fill'
									style={{ color: "#CED4DB" }}></i>
							</InputGroup.Text>
							<Form.Control
								type='text'
								name='email'
								placeholder='Email'
								onChange={handleForm}
								value={formValues.email}
								className='ps-0'
								aria-describedby='basic-addon1'
							/>
						</InputGroup>
						<Form.Label className='fs-5'>Senha</Form.Label>
						<InputGroup className='mb-4'>
							<InputGroup.Text id='basic-addon1' className='p-2'>
								<i
									class='bi bi-lock-fill'
									style={{ color: "#CED4DB" }}></i>
							</InputGroup.Text>
							<Form.Control
								placeholder='Sua senha'
								className='eye-logo ps-0'
								aria-describedby='basic-addon1'
								name='password'
								type={hidePassword ? "text" : "password"}
								defaultValue={formValues.password}
								onChange={handleForm}
							/>
							<InputGroup.Text id='basic-addon1' className='p-2'>
								{hidePassword && (
									<i
										class='bi bi-eye-slash-fill'
										style={{ color: "#CED4DB" }}
										onClick={hidePwd}></i>
								)}

								{!hidePassword && (
									<i
										class='bi bi-eye-fill'
										style={{ color: "#CED4DB" }}
										onClick={hidePwd}></i>
								)}
							</InputGroup.Text>
						</InputGroup>
						<Form.Group
							className='mb-4'
							controlId='formBasicCheckbox'>
							<Form.Check type='checkbox' label='Lembrar' />
						</Form.Group>
					</Form>
				</Col>
				<Col className='d-flex mt-5 justify-content-center'>
					<Button
						className='login-btn px-5 py-2 fw-bold fs-4'
						type='submit'
						onClick={ProLogin}>
						Submit
					</Button>
				</Col>
			</Row>
		</div>
	);
};

export default LoginForm;
