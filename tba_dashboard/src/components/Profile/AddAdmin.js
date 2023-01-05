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

	return (
		<>
			<Modal
				show={open}
				onHide={handleClose}
				backdrop='static'
				keyboard={false}
				centered>
				<Modal.Header closeButton className='border-0'>
					<Modal.Title className='fw-bolder'>
						Código para nova conta
					</Modal.Title>
				</Modal.Header>
				<Modal.Body>
					<Row>
						<Col md={12} className='my-2'>
							<p className='fs-6 fw-bold'>
								Qual o cargo da pessoa?
							</p>
							<InputGroup
								className='mb-3 border-0 rounded '
								style={{ backgroundColor: "#F4F6F8" }}>
								<InputGroup.Text
									className=' border-0'
									style={{ backgroundColor: "#F4F6F8" }}>
									<i class='bi bi-briefcase-fill'></i>
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
							<p className='fw-bold fs-6'>Autorizações</p>
							<Table className='p-3 table-fit text-wrap tbl-color-text text-center '>
								<thead className='small'>
									<tr>
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
									<tr>
										<td className='fw-bold p-0'>
											{contact ? (
												<Button
													onClick={() =>
														setContact(!contact)
													}
													variant=' success'
													className='mx-1 button-green  fw-bolder text-success  border-0 '>
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
													className='mx-1 fw-bolder text-danger button-red '>
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
													className='mx-1 button-green  fw-bolder text-success  border-0 '>
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
													className='mx-1 fw-bolder text-danger button-red '>
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
													className='mx-1 button-green  fw-bolder text-success  border-0 '>
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
													className='mx-1 fw-bolder text-danger button-red '>
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
									placeholder='89C8217J91OAI'
									className='p-2 border-0 shadow-none'
									style={{ backgroundColor: "#F4F6F8" }}
									value={code}
								/>
								<InputGroup.Text
									className='border-0'
									style={{ backgroundColor: "#F4F6F8" }}>
									Copiar
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
