import React, { useState } from "react";
import { Row, Col } from "react-bootstrap";
import Button from "react-bootstrap/Button";
// import { ButtonGreen, ButtonRed } from './buttons/Button';
import Modal from "react-bootstrap/Modal";
import InputGroup from "react-bootstrap/InputGroup";
import Form from "react-bootstrap/Form";

const ChangePassword = ({ open, handleClose }) => {
	// const [passwordType, setPasswordType] = useState("password");
	// const [passwordInput, setPasswordInput] = useState("");
	const [showPassword, setShowPassword] = useState(false);

	const [passwordType, setPasswordType] = useState([
		{
			name: "password",
			input: "",
			show: false,
			name: "nova sehna",
		},
		{
			name: "password",
			input: "",
			show: false,
			name: "Repetir nova senha",
		},
	]);
	const handlePasswordChange = (evnt, i) => {
		// setPasswordInput(evnt.target.value);
		let temp = passwordType;
		temp[i].input = evnt.target.value;
		setPasswordType(temp);
	};
	const togglePassword = () => {
		if (passwordType === "password") {
			setPasswordType("text");
			return;
		}
		setPasswordType("password");
	};

	const hideShowPassword = (i) => {
		setShowPassword(!showPassword);
		let temp = passwordType;
		temp[i].show = !passwordType[i].show;
		console.log(passwordType);
		setPasswordType(temp);
	};
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
									<i class='bi bi-lock-fill'></i>
								</InputGroup.Text>
								<Form.Control
									className='border-0 ps-0 shadow-none'
									placeholder='Sua senha atual'
									type={"text"}
								/>
							</InputGroup>
						</Col>

						{passwordType.map((val, i) => {
							return (
								<Col md={10} className='mx-auto my-2'>
									<p className='fw-bold my-1'>{val.name}</p>
									<InputGroup className='mb-3 border rounded'>
										<InputGroup.Text
											className='border-0'
											style={{
												backgroundColor: "#F4F6F8",
											}}>
											<i class='bi bi-lock-fill'></i>
										</InputGroup.Text>

										<Form.Control
											className='border-0 ps-0 shadow-none'
											placeholder='Nova Senha'
											type={
												val.show ? "text" : "password"
											}
											onChange={(e) =>
												handlePasswordChange(e, i)
											}
											name='password'
										/>
										<InputGroup.Text
											className=' border-0'
											style={{
												backgroundColor: "#F4F6F8",
											}}>
											{val.show ? (
												<i
													className='bi bi-eye-slash-fill'
													onClick={() =>
														hideShowPassword(i)
													}></i>
											) : (
												<i
													class='bi bi-eye-fill'
													onClick={() =>
														hideShowPassword(i)
													}></i>
											)}
										</InputGroup.Text>
									</InputGroup>
								</Col>
							);
						})}

						{/* 
                        <Col md={10} className='mx-auto my-2'>
                            <p className='fw-bold my-1'>Repetir nova senha</p>
                            <InputGroup className="mb-3 border rounded" >
                                <InputGroup.Text
                                    className='bg-white border-0'
                                    style={{ backgroundColor: '#F4F6F8' }}>
                                    <i class="bi bi-lock-fill" ></i>
                                </InputGroup.Text>
                                <Form.Control
                                    className='border-0 shadow-none'
                                    placeholder='Repetir nova senha'
                                    type={showPassword ? "text" : "password"}
                                    onChange={handlePasswordChange}
                                    name="password"
                                />
                                <InputGroup.Text
                                    className='bg-white border-0'
                                    style={{ backgroundColor: '#F4F6F8' }}>
                                    {showPassword ?
                                        <i className="bi bi-eye-slash-fill" onClick={hideShowPassword} ></i> : <i class="bi bi-eye-fill" onClick={hideShowPassword}></i>
                                    }


                                </InputGroup.Text>
                            </InputGroup>
                        </Col> */}

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
