import React, { useState } from "react";
import { Col, Row, Card } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { InputGroup } from "react-bootstrap";
import Table from "react-bootstrap/Table";
import Pagination from "react-bootstrap/Pagination";
import Modal from "react-bootstrap/Modal";
import NavbarCom from "../components/NavbarCom";
import Sidebar from "../components/Sidebar";
import AfterAuth from "../HOC/AfterAuth";

const Contact = () => {
	const [show, setShow] = useState(false);

	const handleClose = () => setShow(false);
	const handleShow = () => setShow(true);

	let all = [
		{
			state: true,
			class: "toggle",
			name: "",
			code: "",
			email: "",
			Date: "",
			time: "",
		},
		{
			state: false,
			class: "",
			name: "",
			code: "",
			email: "",
			Date: "",
			time: "",
		},
		{
			state: false,
			class: "",
			name: "",
			code: "",
			email: "",
			Date: "",
			time: "",
		},
		{
			state: false,
			class: "",
			name: "",
			code: "",
			email: "",
			Date: "",
			time: "",
		},
		{
			state: false,
			class: "",
			name: "",
			code: "",
			email: "",
			Date: "",
			time: "",
		},
		{
			state: false,
			class: "",
			name: "",
			code: "",
			email: "",
			Date: "",
			time: "",
		},
	];
	const [rowdata, setRowData] = useState(all);
	const [panding, setPanding] = useState(false);
	const [responce, setResponce] = useState(false);
	console.log(rowdata);
	const filter = (states) => {
		if (states == false) {
			let temp = [];
			rowdata.map((val) => {
				if (val.state == false) {
					temp.push(val);
				}
			});
			// setRowData(temp)
			setResponce(true);
			setPanding(false);
			setM(!m);
		} else if (states == true) {
			let temp = [];
			rowdata.map((val) => {
				if (val.state == true) {
					temp.push(val);
				}
			});
			// setRowData(temp)
			setPanding(true);
			setResponce(false);
			setM(!m);
		} else {
			setPanding(false);
			setResponce(false);
			setM(!m);
		}
	};

	const [m, setM] = useState(true);
	function openRow(i) {
		let temp = rowdata;
		temp[i].state = true;
		temp[i].class = "toggle";
		setRowData(temp);
		setM(!m);
	}
	function closeRow(i) {
		let temp = rowdata;
		temp[i].state = false;
		temp[i].class = "";
		setRowData(temp);
		setM(!m);
	}

	const NAVBAR = () => {
		return (
			<Navbar className='my-2' expand='lg'>
				<Navbar.Brand className='fw-bolder' href='#'>
					Contatos
				</Navbar.Brand>
				<Navbar.Toggle aria-controls='navbarScroll' />
				<Navbar.Collapse id='navbarScroll'>
					{/* searchbar */}
					<Nav
						className='me-auto my-2 my-lg-0'
						style={{ maxHeight: "100px" }}
						navbarScroll>
						<InputGroup className='rounded-2'>
							<InputGroup.Text
								id='basic-addon1'
								className='border-0'
								style={{ background: "#F4F4F4" }}>
								<i className='bi bi-search'></i>
							</InputGroup.Text>
							<Form.Control
								type='Search'
								placeholder='Procurar....'
								aria-label='Search'
								aria-describedby='basic-addon1'
								className='border-0'
							/>
						</InputGroup>
					</Nav>
					{/* button */}
					{!responce && panding && (
						<>
							<Button
								className='fs-color mx-1 text-white fw-bold border-0'
								style={{ background: "#85A6A2" }}
								onClick={() => filter(true)}>
								Pendentes
							</Button>
							<Button
								className='fs-color mx-1 border-0 bg-white'
								onClick={() => filter(false)}>
								Respondidas
							</Button>
							<Button
								className='fs-color mx-1 border-0 bg-white'
								onClick={() => filter(null)}>
								Todas
							</Button>
						</>
					)}
					{!responce && !panding && (
						<>
							<Button
								className='fs-color mx-1 border-0 bg-white'
								onClick={() => filter(true)}>
								Pendentes
							</Button>
							<Button
								className='fs-color mx-1 border-0 bg-white'
								onClick={() => filter(false)}>
								Respondidas
							</Button>
							<Button
								className='fs-color mx-1 text-white fw-bold border-0'
								style={{ background: "#85A6A2" }}
								onClick={() => filter(null)}>
								Todas
							</Button>
						</>
					)}
					{responce && !panding && (
						<>
							<Button
								className='fs-color mx-1 border-0 bg-white'
								onClick={() => filter(true)}>
								Pendentes
							</Button>
							<Button
								className='fs-color mx-1 text-white fw-bold border-0'
								style={{ background: "#85A6A2" }}
								onClick={() => filter(false)}>
								Respondidas
							</Button>
							<Button
								className='fs-color mx-1 border-0 bg-white'
								onClick={() => filter(null)}>
								Todas
							</Button>
						</>
					)}
				</Navbar.Collapse>
			</Navbar>
		);
	};

	const Modals = () => {
		return (
			<Modal
				className='d-flex mt-5 align-items-center'
				show={show}
				onHide={handleClose}>
				<Row className='p-3 px-4'>
					<Col md={10} xs={9}>
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
								className='chack-item input-check fs-5 border-0'
								type='switch'
								id='custom-switch'
								checked
							/>
							<label>CPF/CNPJ</label>
						</Form>
					</Col>
					<Col className='mt-2 ps-4'>
						<Form className='d-flex align-items-center'>
							<Form.Check
								className='fs-5 border-0 input-check'
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
								className='fs-5 border-0 input-check'
								type='switch'
								id='custom-switch'
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
		);
	};

	const TABLE = () => {
		return (
			<Table responsive>
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
					{!responce &&
						!panding &&
						rowdata.map((val, i) => {
							return (
								<tr
									className={val.class}
									style={{ position: "relative" }}>
									<td>Ana Júlia Garcia</td>
									<td>000.000.000-00</td>
									<td>anajulia@vanceh.com</td>
									<td>13 dez 2022</td>
									<td>13:04</td>
									{!val.state && (
										<td>
											<Button
												onClick={() => openRow(i)}
												variant='success'>
												Respondido
											</Button>
										</td>
									)}
									{val.state && (
										<td>
											<Button
												onClick={() => closeRow(i)}
												variant='warning'>
												Pendente
											</Button>
										</td>
									)}
									{val.state && (
										<Row
											style={{
												width: "600px",
												position: "absolute",
												right: "4px",
												bottom: "0px",
											}}>
											{/* <Row> */}
											<Col
												md={4}
												xs={4}
												className='opacity-25'>
												Entrar em contato por:
											</Col>
											<Col md={1} xs={1}>
												<Button
													style={{
														background: "#1C3D59",
													}}>
													<i class='bi bi-telephone'></i>
												</Button>
											</Col>
											<Col md={1} xs={1}>
												<Button
													style={{
														background: "#1C3D59",
													}}>
													<i class='bi bi-whatsapp'></i>
												</Button>
											</Col>
											<Col md={1} xs={1}>
												<Button
													style={{
														background: "#1C3D59",
													}}>
													<i class='bi bi-envelope'></i>
												</Button>
											</Col>
											<Col
												md={2}
												xs={2}
												className='opacity-25 text-center'>
												ou
											</Col>
											<Col md={3} xs={3} className='ps-0'>
												<Button
													onClick={handleShow}
													className='border-0'
													style={{
														background: "#C4CCD2",
													}}>
													Gerar link
												</Button>
											</Col>
											{/* </Row> */}
										</Row>
									)}
								</tr>
							);
						})}
					{!responce &&
						panding &&
						rowdata.map((val, i) => {
							if (val.state == true) {
								return (
									<tr
										className={val.class}
										style={{ position: "relative" }}>
										<td>Ana Júlia Garcia</td>
										<td>000.000.000-00</td>
										<td>anajulia@vanceh.com</td>
										<td>13 dez 2022</td>
										<td>13:04</td>
										{!val.state && (
											<td>
												<Button
													onClick={() => openRow(i)}
													variant='success'>
													Respondido
												</Button>
											</td>
										)}
										{val.state && (
											<td>
												<Button
													onClick={() => closeRow(i)}
													variant='warning'>
													Pendente
												</Button>
											</td>
										)}
										{val.state && (
											<Row
												style={{
													width: "600px",
													position: "absolute",
													right: "40px",
													bottom: "0px",
												}}>
												{/* <Row> */}
												<Col
													md={4}
													className='opacity-25'>
													Entrar em contato por:
												</Col>
												<Col md={1}>
													<Button
														style={{
															background:
																"#1C3D59",
														}}>
														<i class='bi bi-telephone'></i>
													</Button>
												</Col>
												<Col md={1}>
													<Button
														style={{
															background:
																"#1C3D59",
														}}>
														<i class='bi bi-whatsapp'></i>
													</Button>
												</Col>
												<Col md={1}>
													<Button
														style={{
															background:
																"#1C3D59",
														}}>
														<i class='bi bi-envelope'></i>
													</Button>
												</Col>
												<Col
													md={2}
													className='opacity-25 text-center'>
													ou
												</Col>
												<Col md={3} className='ps-0'>
													<Button
														className='border-0'
														style={{
															background:
																"#C4CCD2",
														}}>
														Gerar link
													</Button>
												</Col>
												{/* </Row> */}
											</Row>
										)}
									</tr>
								);
							}
						})}
					{responce &&
						!panding &&
						rowdata.map((val, i) => {
							if (val.state == false) {
								return (
									<tr
										className={val.class}
										style={{ position: "relative" }}>
										<td>Ana Júlia Garcia</td>
										<td>000.000.000-00</td>
										<td>anajulia@vanceh.com</td>
										<td>13 dez 2022</td>
										<td>13:04</td>
										{!val.state && (
											<td>
												<Button
													onClick={() => openRow(i)}
													variant='success'>
													Respondido
												</Button>
											</td>
										)}
										{val.state && (
											<td>
												<Button
													onClick={() => closeRow(i)}
													variant='warning'>
													Pendente
												</Button>
											</td>
										)}
										{val.state && (
											<Row
												style={{
													width: "600px",
													position: "absolute",
													right: "4px",
													bottom: "0px",
												}}>
												{/* <Row> */}
												<Col
													md={4}
													className='opacity-25'>
													Entrar em contato por:
												</Col>
												<Col md={1}>
													<Button
														style={{
															background:
																"#1C3D59",
														}}>
														<i class='bi bi-telephone'></i>
													</Button>
												</Col>
												<Col md={1}>
													<Button
														style={{
															background:
																"#1C3D59",
														}}>
														<i class='bi bi-whatsapp'></i>
													</Button>
												</Col>
												<Col md={1}>
													<Button
														style={{
															background:
																"#1C3D59",
														}}>
														<i class='bi bi-envelope'></i>
													</Button>
												</Col>
												<Col
													md={2}
													className='opacity-25 text-center'>
													ou
												</Col>
												<Col md={3} className='ps-0'>
													<Button
														className='border-0'
														style={{
															background:
																"#C4CCD2",
														}}>
														Gerar link
													</Button>
												</Col>
												{/* </Row> */}
											</Row>
										)}
									</tr>
								);
							}
						})}
					{show && <Modals />}
				</tbody>
			</Table>
		);
	};

	return (
		<>
			<AfterAuth>
				<h2 className='mt-3 ms-5'>Contatos</h2>
				<Card className='m-5 my-3 p-3 px-4'>
					<NAVBAR />
					<TABLE />
					<Pagination className='d-flex m-0 justify-content-center'>
						<Pagination.Prev />
						<Pagination.Item>{1}</Pagination.Item>
						<Pagination.Item active>{2}</Pagination.Item>
						<Pagination.Item>{3}</Pagination.Item>
						{/* <Pagination.Ellipsis /> */}
						<Pagination.Next />
					</Pagination>
				</Card>
			</AfterAuth>
		</>
	);
};

export default Contact;
