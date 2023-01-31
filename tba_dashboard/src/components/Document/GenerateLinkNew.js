import React, { useState } from "react";
import { Button, Col, Form, InputGroup, Modal, Row } from "react-bootstrap";
import { toast } from "react-toastify";
import { LINK_URL } from "../../config";
import { generateLink } from "../../helper/API/contact";
import copy from "copy-to-clipboard";

const GenerateLinkNew = ({
	open,
	handleClose,
	editData,
	refresh,
	setRefresh,
}) => {
	console.log("editData", editData);
	const [copyText, setCopyText] = useState(false);
	const [formValues, setFormValues] = useState({
		CNPJ: true,
		CPF: true,
		socialContract: false,
		proofOfAddress: false,
	});

	const link = `${LINK_URL}${editData.id}/${editData.documentRequest.id}`;

	const handleCheck = (e) => {
		setFormValues({
			...formValues,
			[e.target.name]: e.target.checked,
		});
	};

	const submitForm = (e) => {
		console.log("editData", editData);
		const submitData = {
			permission: {
				...formValues,
			},
			contactId: editData.id,
			requestId: editData.documentRequest.id,
			generateLink: link,
		};
		console.log("submitData", submitData);
		generateLink(submitData).then((res) => {
			if (res.success) {
				setRefresh(refresh + 1);
				toast.success(res.message);
				copy(link);
				handleClose();
			} else {
				toast.error(res.message);
			}
		});
	};

	// const handleCopy = (code) => {
	// 	if (code) {
	// 		copy(code);
	// 		setCopyText(true);
	// 		setTimeout(() => {
	// 			setCopyText(false);
	// 			console.log("called time out");
	// 		}, 1000);
	// 	}
	// };

	return (
		<div>
			<Modal
				className='zindex'
				show={open}
				onHide={handleClose}
				size='lg'>
				<Row className='p-3 px-4'>
					<Col md={10} xs={9}>
						<h5 className='fw-bolder'>
							Link para solicitação de documentos
						</h5>
					</Col>
					<Col className='text-end'>
						<img
							style={{ cursor: "pointer" }}
							onClick={handleClose}
							src='assets/img/close.png'></img>
					</Col>
				</Row>
				<Row className="px-4">
					<Col md={12}>
						<h6>Documentos já enviados e aprovados</h6>
					</Col>
					<Col md={4}>
						<img src="assets/img/right1.png"></img>
						<span className="ps-2" style={{ fontWeight: '500' }}>CNPJ</span>
					</Col>
					<Col md={4}>
						<img src="assets/img/right1.png"></img>
						<span className="ps-2" style={{ fontWeight: '500' }}>CPF dos sócios</span>
					</Col>
					<Col md={4}>
						<img src="assets/img/right1.png"></img>
						<span className="ps-2" style={{ fontWeight: '500' }}>Contrato social</span>
					</Col>
				</Row>
				<Row className='px-4 pt-3'>
					<Col md={12}>
						<h6>Solicitar outros documentos</h6>
					</Col>
					<Col md={6} className=''>
						<Form className='d-flex align-items-center'>
							<Form.Check
								className='chack-item input-check fs-5 border-0'
								type='switch'
								id='custom-switch'
								checked
								name='CPF'
								defaultChecked={formValues.CPF}
							/>
							<label>CNPJ</label>
						</Form>
					</Col>
					<Col md={6} className=''>
						<Form className='d-flex align-items-center'>
							<Form.Check
								className='chack-item input-check fs-5 border-0'
								type='switch'
								id='custom-switch'
								checked
								name='CNPJ'
								defaultChecked={formValues.cnpj}
							/>
							<label>CNPJ</label>
						</Form>
					</Col>
				</Row>
				<Row className="px-4">
					<Col md={12} className='mt-3'>
						<h6>Link para compartilhar com o cliente</h6>
					</Col>
					<Col md={6} className='p-2'>
						<InputGroup className='border-0 rounded '>
							<Form.Control
								className='border-0 p-3 fw-bold'
								value={link}
							/>
							{/* <InputGroup.Text
								id='basic-addon2'
								className='border-0 c-point'
								style={{ color: "#85A6A2" }}
								onClick={() => handleCopy(link)}>
								{copyText ? "Copiada" : "Copiar"}
							</InputGroup.Text> */}
						</InputGroup>
					</Col>
					<Col md={6} className='my-3 text-end'>
						<Button
							className="px-5"
							style={{ background: "#1C3D59" }}
							onClick={submitForm}>
							{/* Encaminhar */}
							Copiar link
						</Button>
					</Col>
				</Row>
			</Modal>
		</div>
	);
};

export default GenerateLinkNew;
