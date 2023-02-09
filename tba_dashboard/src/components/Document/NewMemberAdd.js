import React, { useEffect, useState } from "react";
import {
	Badge,
	Button,
	Card,
	CloseButton,
	Col,
	Form,
	FormGroup,
	InputGroup,
	Modal,
	ModalBody,
	ModalHeader,
	Row,
	Spinner,
} from "react-bootstrap";

import SocialContractCard from "./SocialContractCard";
import AddressProofCard from "./AddressProofCard";
import { toast } from "react-toastify";
import { attachDocument, contactForm } from "../../helper/API/contact";
import {
	submitAddressDocument,
	submitDocument,
} from "../../helper/API/document";
import TableRowDocument from "./NewClientCards/TableRowDocument";
import GenerateLinkBtn from "./NewClientCards/GenerateLinkBtn";

const NewMemberAdd = ({ show, handleClose, refresh, setRefresh }) => {
	const [characterLimit] = useState(25);
	const [loading, setLoading] = useState(false);
	const [data, setData] = useState(null);

	const [imagePreview, setImagePreview] = React.useState("");
	const [addressImages, setAddressImages] = React.useState("");
	const [addressImagePreview, setAddressImagePreview] = React.useState("");
	const [formValues, setFormValues] = useState({
		name: "",
		emailOrPhone: "",
		CPF: "",
		CNPJ: "",
	});
	const [images, setImages] = React.useState({
		CPFDOC: "",
		CNPJDOC: "",
		socialContract: "",
		addressProof: "",
		balanceIncome: "",
		balanceSheet: "",
		partnerIncome: "",
		billingCustomer: "",
		partnerDocument: "",
		updatedBankDebt: "",
		spouseDocument: "",
		extractBusiestBank: "",
		companyPhotos: "",
		abcCurve: "",
	});

	const handleFileChange = (e) => {
		// console.log("acceptedFiles", acceptedFiles);
		if (e.target.files[0].type !== "application/pdf") {
			toast.error("Por favor, selecione apenas arquivo pdf");
		} else {
			// setopen(true);
			if (e.target.files[0]) {
				setImagePreview(URL.createObjectURL(e.target.files[0]));
				setImages({
					...images,
					[e.target.name]: e.target.files[0],
				});
			}
		}
	};

	const handleChange = (e) => {
		setFormValues({
			...formValues,
			[e.target.name]: e.target.value,
		});
	};

	const submitDocumentForm = () => {
		setLoading(true);
		// console.log("formValues", formValues);
		contactForm(formValues).then((res) => {
			// console.log("first form", res);
			if (res.success) {
				let call1;
				let call2;
				let call3;
				let call4;
				let call5;
				let call6;
				let call7;
				let call8;
				let call9;
				let call10;
				let call11;
				let call12;
				let call13;
				let call14;
				setLoading(true);
				if (images.socialContract) {
					const formData = new FormData();
					formData.append("addressProof", images.socialContract);
					formData.append("id", res.data.id);
					formData.append("type", "socialContract");
					call1 = attachDocument(formData);
				}
				if (images.addressProof) {
					const formData = new FormData();
					formData.append("addressProof", images.addressProof);
					formData.append("id", res.data.id);
					formData.append("type", "addressProof");
					call2 = attachDocument(formData);
				}
				if (images.balanceIncome) {
					const formData = new FormData();
					formData.append("addressProof", images.balanceIncome);
					formData.append("id", res.data.id);
					formData.append("type", "balanceIncome");
					call3 = attachDocument(formData);
				}
				if (images.balanceSheet) {
					const formData = new FormData();
					formData.append("addressProof", images.balanceSheet);
					formData.append("id", res.data.id);
					formData.append("type", "balanceSheet");
					call4 = attachDocument(formData);
				}
				if (images.partnerIncome) {
					const formData = new FormData();
					formData.append("addressProof", images.partnerIncome);
					formData.append("id", res.data.id);
					formData.append("type", "partnerIncome");
					call5 = attachDocument(formData);
				}
				if (images.billingCustomer) {
					const formData = new FormData();
					formData.append("addressProof", images.billingCustomer);
					formData.append("id", res.data.id);
					formData.append("type", "billingCustomer");
					call6 = attachDocument(formData);
				}
				if (images.partnerDocument) {
					const formData = new FormData();
					formData.append("addressProof", images.partnerDocument);
					formData.append("id", res.data.id);
					formData.append("type", "partnerDocument");
					call7 = attachDocument(formData);
				}
				if (images.updatedBankDebt) {
					const formData = new FormData();
					formData.append("addressProof", images.updatedBankDebt);
					formData.append("id", res.data.id);
					formData.append("type", "updatedBankDebt");
					call8 = attachDocument(formData);
				}
				if (images.spouseDocument) {
					const formData = new FormData();
					formData.append("addressProof", images.spouseDocument);
					formData.append("id", res.data.id);
					formData.append("type", "spouseDocument");
					call9 = attachDocument(formData);
				}
				if (images.extractBusiestBank) {
					const formData = new FormData();
					formData.append("addressProof", images.extractBusiestBank);
					formData.append("id", res.data.id);
					formData.append("type", "extractBusiestBank");
					call10 = attachDocument(formData);
				}
				if (images.companyPhotos) {
					const formData = new FormData();
					formData.append("addressProof", images.companyPhotos);
					formData.append("id", res.data.id);
					formData.append("type", "companyPhotos");
					call11 = attachDocument(formData);
				}
				if (images.abcCurve) {
					const formData = new FormData();
					formData.append("addressProof", images.abcCurve);
					formData.append("id", res.data.id);
					formData.append("type", "abcCurve");
					call12 = attachDocument(formData);
				}
				if (images.CPFDOC) {
					const formData = new FormData();
					formData.append("addressProof", images.CPFDOC);
					formData.append("id", res.data.id);
					formData.append("type", "CPFDOC");
					call13 = attachDocument(formData);
				}
				if (images.CNPJDOC) {
					const formData = new FormData();
					formData.append("addressProof", images.CNPJDOC);
					formData.append("id", res.data.id);
					formData.append("type", "CNPJDOC");
					call14 = attachDocument(formData);
				}
				// console.log("call1", call1);
				const ab = [
					call1,
					call2,
					call3,
					call4,
					call5,
					call6,
					call7,
					call8,
					call9,
					call10,
					call11,
					call12,
					call13,
					call14,
				];

				Promise.all(ab)
					.then((responses) => {
						// console.log("responses :::", responses);
						// console.log("responses length :::", responses.length);
						if (responses) {
							toast.success("Anexo adicionado com sucesso");
							setLoading(false);
							handleClose();
							setRefresh(refresh + 1);
						}
					})
					.catch((err) => toast.error("Pedido inválido"));
			} else {
				toast.error(res.message);
				setLoading(false);
			}
		});
	};
	return (
		<Modal
			show={show}
			onHide={handleClose}
			className='zindex'
			size='xl'
			aria-labelledby='contained-modal-title-vcenter'
			centered>
			<ModalHeader className='border-0 mx-3 mt-2 d-flex justify-content-end fw-bolder'>
				<Modal.Title
					id='contained-modal-title-vcenter'
					style={{ cursor: "pointer" }}
					onClick={handleClose}>
					<img src='assets/img/close.png'></img>
				</Modal.Title>
			</ModalHeader>
			<ModalBody className='p-4 pt-0'>
				<h5 className='fw-bolder'>Criar novo cliente</h5>
				<Row className='mt-3'>
					<Col md={6} xs={12}>
						<Form>
							<Form.Label className='Doc-Font-Color'>
								Nome completo do cleinte
							</Form.Label>
							<FormGroup className=''>
								<InputGroup className='mb-3 rounded'>
									<InputGroup.Text
										id='basic-addon1'
										className='border-0'
										style={{
											background: "#F4F6F8",
										}}>
										<i className='bi bi-person-fill link-icon'></i>
									</InputGroup.Text>
									<Form.Control
										maxLength={25}
										placeholder='Ana Júlia Garcia'
										type='text'
										name='name'
										className='Cardinput border-0  badge-relative '
										// value={data?.name}
										onChange={handleChange}
									/>
								</InputGroup>
								<Badge className='bg-f4f4f4 text-dark badge-absolute bg-white'>
									{formValues.name.length}/{characterLimit}
								</Badge>
							</FormGroup>
						</Form>
					</Col>
					<Col md={6} xs={12}>
						<Form>
							<Form.Label className='Doc-Font-Color'>
								Telefone
							</Form.Label>
							<InputGroup className='mb-3 rounded'>
								<InputGroup.Text
									id='basic-addon1'
									className='border-0'
									style={{
										background: "#F4F6F8",
									}}>
									<i className='bi bi-telephone link-icon'></i>
								</InputGroup.Text>
								<Form.Control
									placeholder='(00)00000-0000'
									type='text'
									name='emailOrPhone'
									className='Cardinput border-0'
									// value={data?.email}
									onChange={handleChange}
								/>
							</InputGroup>
						</Form>
					</Col>
				</Row>
				<Row>
					<Col md={6} xs={12}>
						<Form>
							<Form.Label className='Doc-Font-Color'>
								CPF
							</Form.Label>
							<InputGroup className='mb-3 rounded'>
								<InputGroup.Text
									id='basic-addon1'
									className='border-0'
									style={{
										background: "#F4F6F8",
									}}>
									<i className='bi bi-person-vcard-fill link-icon'></i>
								</InputGroup.Text>
								<Form.Control
									placeholder='000.000.000-00'
									type='text'
									name='CPF'
									className='Cardinput border-0'
									// value={data?.CpfOrCnpj}
									onChange={handleChange}
								/>
							</InputGroup>
						</Form>
					</Col>
					<Col md={6} xs={12}>
						<Form>
							<Form.Label className='Doc-Font-Color'>
								CNPJ
							</Form.Label>
							<InputGroup className='mb-3 rounded'>
								<InputGroup.Text
									id='basic-addon1'
									className='border-0'
									style={{
										background: "#F4F6F8",
									}}>
									<i className='bi bi-person-vcard-fill link-icon'></i>
								</InputGroup.Text>
								<Form.Control
									placeholder='000.000.000-00'
									type='text'
									name='CNPJ'
									className='Cardinput border-0'
									// value={data?.CpfOrCnpj}
									onChange={handleChange}
								/>
							</InputGroup>
						</Form>
					</Col>
				</Row>
				<Row className='mt-3 gx-2'>
					<TableRowDocument
						handleFileChange={handleFileChange}
						images={images}
					/>
				</Row>
				<div className='d-flex justify-content-end'>
					<Button
						onClick={submitDocumentForm}
						className='mt-4 px-5 p-3 fw-bold border-0'
						disabled={loading}
						style={{
							width: "fit-content",
							background: "#1C3D59",
						}}>
						Criar cliente
						{loading && (
							<Spinner
								animation='grow'
								variant='light'
								className='ms-3 py-1 fw-bold fs-3'
							/>
						)}
					</Button>
				</div>
			</ModalBody>
		</Modal>
	);
};

export default NewMemberAdd;
