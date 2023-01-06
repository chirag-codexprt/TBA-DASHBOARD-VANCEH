import React, { useState } from "react";
import { Row, Col } from "react-bootstrap";
import Button from "react-bootstrap/Button";
// import { ButtonGreen, ButtonRed } from './buttons/Button';
import Modal from "react-bootstrap/Modal";
import InputGroup from "react-bootstrap/InputGroup";
import Form from "react-bootstrap/Form";

const ChangePassword = ({ open, handleClose }, {
	handleRegisterForm,
	registerUser,


}) => {

	const [hidePassword, setHidePassword] = useState(false);
	const [hideConfirmPassword, setHideConfirmPassword] = useState(false);
	const [confirmPassword, setConfirmPassword] = useState("");

	return (
		<>
			<Modal
				show={open}
				onHide={handleClose}
				backdrop='static'
				keyboard={false}
				centered>
				<Modal.Body>
					<Row>
						<Col md={9} className='fw-bolder fs-3 m-3'>
							Alterar senha
						</Col>
						<Col md={2} className='d-flex justify-content-end'>
							<Button
								onClick={handleClose}
								className='border-0 text-dark p-0 mx-4 fs-4 bg-white'>
								x
							</Button>
						</Col>
					</Row>
					<Row className=''>
						<Col md={10} className='mx-auto my-2'>
							<p className='fw-bold my-1'>Senha atual</p>
							<InputGroup className='mb-3 border rounded'>
								<InputGroup.Text
									className='border-0'
									style={{ backgroundColor: "#F4F6F8" }}>
									<i class='bi bi-lock-fill'
										style={{ color: "#CED4DB" }}></i>
								</InputGroup.Text>
								<Form.Control
									className='border-0 ps-0 shadow-none'
									placeholder='Sua senha atual'
									type={"text"}
								/>
							</InputGroup>
						</Col>
						<Col md={10} className='mx-auto my-2'>

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
									name='password'
									type={hidePassword ? "text" : "password"}
									onChange={handleRegisterForm}
									aria-describedby='basic-addon1'
								/>
								<InputGroup.Text id='basic-addon1' className='p-2'>
									{hidePassword && (
										<i
											class='bi bi-eye-slash-fill'
											style={{ color: "#CED4DB" }}
											onClick={() => setHidePassword(!hidePassword)}></i>
									)}

									{!hidePassword && (
										<i
											class='bi bi-eye-fill'
											style={{ color: "#CED4DB" }}
											onClick={() => setHidePassword(!hidePassword)}></i>
									)}
								</InputGroup.Text>
							</InputGroup>
						</Col>
						<Col md={10} className='mx-auto my-2'>

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
									name='confirmPassword'
									type={hideConfirmPassword ? "text" : "password"}
									onChange={(e) =>
										setConfirmPassword(e.target.value)
									}
								/>
								<InputGroup.Text id='basic-addon1' className='p-2'>
									{hideConfirmPassword && (
										<i
											class='bi bi-eye-slash-fill'
											style={{ color: "#CED4DB" }}
											onClick={() => setHideConfirmPassword(!hideConfirmPassword)}></i>
									)}

									{!hideConfirmPassword && (
										<i
											class='bi bi-eye-fill'
											style={{ color: "#CED4DB" }}
											onClick={() => setHideConfirmPassword(!hideConfirmPassword)}></i>
									)}
								</InputGroup.Text>
							</InputGroup>
						</Col>


						<Col md={11} className='mx-auto my-2 text-center'>
							<Button
								className='fw-bolder fs-6 w-50'
								style={{ backgroundColor: "#1C3D59" }}>
								Alterar
							</Button>
						</Col>
					</Row>
				</Modal.Body>
			</Modal>
		</>
	);
};

export default ChangePassword;
