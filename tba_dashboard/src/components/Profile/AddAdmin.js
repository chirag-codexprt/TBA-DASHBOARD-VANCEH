import React, { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { Row, Col } from "react-bootstrap";
import InputGroup from "react-bootstrap/InputGroup";
import Form from "react-bootstrap/Form";
import Table from "react-bootstrap/Table";
import { generateCode, inviteAdmin } from "../../helper/API/auth";
import { toast } from "react-toastify";

const AddAdmin = ({ open, handleClose }) => {
	const [copy, setCopy] = useState(false);
	const [contact, setContact] = useState(false);
	const [document, setDocument] = useState(false);
	const [newAdmin, setNewAdmin] = useState(false);
	const [designation, setDesignation] = useState("");
	const [code, setCode] = useState(null);
	useEffect(() => {
		generateCode().then((res) => {
			console.log("res code", res);
			if (res.success) {
				setCode(res.data);
			}
		});
	}, []);

	const submitAdmin = () => {
		const submitData = {
			designation: designation,
			permissions: {
				contact,
				document,
				newAdmin,
			},
			code,
		};
		inviteAdmin(submitData).then((res) => {
			console.log("res invite admin", res);
			if (res.success) {
				toast.success(res.message);
				handleClose();
			} else {
				toast.error(res.message);
			}
		});
		// console.log("submitData", submitData);
	};

	const handleCopy = (code) => {
		if (navigator && navigator.clipboard && navigator.clipboard.writeText) {
			return { i: navigator.clipboard.writeText(code), j: setCopy(true) };
			// return Promise.reject("The Clipboard API is not available.");
		} else {
			return setCopy(false);
		}
	};

	return (
		<>
			<Modal
				show={open}
				onHide={handleClose}
				backdrop='static'
				keyboard={false}
				centered>
				<Modal.Header className='border-0'>
					<Modal.Title className='fw-bolder fs-5'>
						<Row>
							<Col sm={11} md={11}>Código para nova conta</Col>
							<Col sm={1} md={1} className='text-end'><Button
								onClick={handleClose}
								className=' border-0 text-dark p-0 mx-4  fs-4 bg-white'>
								<img src="assets/img/close.png"></img>
							</Button></Col>
						</Row>


					</Modal.Title>
				</Modal.Header>
				<Modal.Body className="">
					<Row className="px-1 py-0">
						<Col md={12} className=''>
							<p className='fs-6 fw-bold'>
								Qual o cargo da pessoa?
							</p>
							<InputGroup
								className='mb-3 border-0 rounded '
								style={{ backgroundColor: "#F4F6F8" }}>
								<InputGroup.Text
									className=' border-0'
								><img src="assets/img/briefcase.png " />
								</InputGroup.Text>
								<Form.Control
									style={{ backgroundColor: "#F4F6F8" }}
									className='border-0 shadow-none'
									placeholder='Digite o cargo'
									onChange={(e) =>
										setDesignation(e.target.value)
									}
								/>
							</InputGroup>
						</Col>
						<Col md={12}>
							<p className='fw-bold fs-6 mb-0'>Autorizações</p>
							<Table className='border-white p-3 table-fit text-wrap tbl-color-text text-center  '>
								<thead className='border-white small fw-normal'>
									<tr className="text-start">
										<th style={{ color: "#B5B6B7" }}>
											Contatos{" "}
										</th>
										<th style={{ color: "#B5B6B7" }}>
											Documentos{" "}
										</th>
										<th style={{ color: "#B5B6B7" }}>
											Nova conta
										</th>
									</tr>
								</thead>
								<tbody>
									<tr className="text-start">
										<td className='fw-bold p-0'>
											{contact ? (
												<Button
													onClick={() =>
														setContact(!contact)
													}
													variant=' success'
													className=' button-green  fw-bold text-success small p-0  border-0 '>
													<small>
														<i className='bi bi-check'></i>
														Autorizar
													</small>
												</Button>
											) : (
												<Button
													onClick={() =>
														setContact(!contact)
													}
													variant='danger'
													className=' fw-bold small text-danger button-red p-0'>
													<i className='bi bi-x'></i>
													Remover
												</Button>
											)}
										</td>
										<td className='p-0'>
											{document ? (
												<Button
													onClick={() =>
														setDocument(!document)
													}
													variant=' success'
													className='small button-green  fw-bold text-success p-0 border-0 '>
													<small>
														<i className='bi bi-check'></i>
														Autorizar
													</small>
												</Button>
											) : (
												<Button
													onClick={() =>
														setDocument(!document)
													}
													variant='danger'
													className='small fw-bold text-danger button-red p-0'>
													<i className='bi bi-x'></i>
													Remover
												</Button>
											)}
										</td>
										<td className='p-0'>
											{newAdmin ? (
												<Button
													onClick={() =>
														setNewAdmin(!newAdmin)
													}
													variant=' success'
													className='small button-green  fw-bold text-success p-0 border-0 '>
													<small>
														<i className='bi bi-check'></i>
														Autorizar
													</small>
												</Button>
											) : (
												<Button
													onClick={() =>
														setNewAdmin(!newAdmin)
													}
													variant='danger'
													className='small fw-bold text-danger button-red p-0'>
													<i className='bi bi-x'></i>
													Remover
												</Button>
											)}
										</td>
									</tr>
								</tbody>
							</Table>
						</Col>
						<Col md={12}>
							<p className='fw-bold fs-6'>
								Código para criação de conta
							</p>
							<InputGroup className='mb-3'>
								<Form.Control
									className='p-2 border-0 fw-bold shadow-none'
									style={{ backgroundColor: "#F4F6F8" }}
									value={code}
								/>
								<InputGroup.Text
									className='border-0 small fw-bold'
									style={{
										backgroundColor: "#F4F6F8",
										cursor: "pointer",
										color: "#85A6A2"
									}}
									onClick={() => handleCopy(code)}>
									{copy ? "Copiada" : "Copiar"}
								</InputGroup.Text>
							</InputGroup>
						</Col>
						{/* button */}
						<Col className='text-center'>
							<Button
								onClick={submitAdmin}
								className='fw-bolder fs-6 w-50 border-0'
								style={{ backgroundColor: "#1C3D59" }}>
								Gerar código
							</Button>
						</Col>
					</Row>
				</Modal.Body>
			</Modal>
		</>
	);
};

export default AddAdmin;
