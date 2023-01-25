import React, { useEffect, useState } from "react";
import {
	Button,
	Card,
	CloseButton,
	Col,
	Form,
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
import CpfCard from "./CpfCard";
import { contactForm } from "../../helper/API/contact";
import {
	submitAddressDocument,
	submitDocument,
} from "../../helper/API/document";

const NewMemberAdd = ({ show, handleClose, refresh, setRefresh }) => {
	const [loading, setLoading] = useState(false);
	const [data, setData] = useState(null);
	const [images, setImages] = React.useState("");
	const [imagePreview, setImagePreview] = React.useState("");
	const [addressImages, setAddressImages] = React.useState("");
	const [addressImagePreview, setAddressImagePreview] = React.useState("");
	const [formValues, setFormValues] = useState({
		name: "",
		emailOrPhone: "",
		cpfOrCnpj: "",
	});

	const handleFileChange = (acceptedFiles) => {
		// setopen(true);
		if (acceptedFiles[0]) {
			setImages(acceptedFiles[0]);
			const reader = new FileReader();
			reader.addEventListener("load", () => {
				setImagePreview(reader.result);
			});
			reader.readAsDataURL(acceptedFiles[0]);
		}
	};

	const handleAddressChange = (acceptedFiles) => {
		console.log("acceptedFiles", acceptedFiles);
		// setAddressOpen(true);
		if (acceptedFiles[0]) {
			setAddressImages(acceptedFiles[0]);
			const reader = new FileReader();
			reader.addEventListener("load", () => {
				setAddressImagePreview(reader.result);
			});
			reader.readAsDataURL(acceptedFiles[0]);
		}
	};

	const handleChange = (e) => {
		setFormValues({
			...formValues,
			[e.target.name]: e.target.value,
		});
	};

	const submitDocumentForm = () => {
		// console.log("formValues", formValues);
		if (!formValues.name) {
			toast.error("Digite o nome");
		} else if (!formValues.cpfOrCnpj) {
			toast.error("Digite cnpj ou cpf");
		} else if (!formValues.emailOrPhone) {
			toast.error("Por favor insira e-mail ou telefone");
		} else if (!images) {
			toast.error("Selecione o documento");
		} else if (!addressImages) {
			toast.error("Selecione o documento");
		} else {
			contactForm(formValues).then((res) => {
				// console.log("first form", res);
				if (res.success) {
					if (images) {
						setLoading(true);
						let formData = new FormData();
						formData.append("socialContract", images);
						formData.append("id", res.data.id);
						submitDocument(formData).then((resp) => {
							// console.log("resp img::", resp);
							if (resp.success) {
								setImages("");
								setAddressImagePreview("");
								if (addressImages) {
									setLoading(true);
									let formDataAddress = new FormData();
									formDataAddress.append(
										"addressProof",
										addressImages
									);
									formDataAddress.append("id", res.data.id);
									submitAddressDocument(formDataAddress).then(
										(res) => {
											// console.log(
											// 	"resp Address ::",
											// 	resp
											// );
											if (res.success) {
												setLoading(false);
												setAddressImages("");
												setImagePreview("");
												toast.success(res.message);
												setRefresh(refresh + 1);
												handleClose();
											} else {
												setLoading(false);
												toast.error(res.message);
											}
										}
									);
								}
							} else {
								toast.error(res.message);
							}
						});
					}
				} else {
					toast.error(res.message);
					// console.log("res", res);
				}
			});
		}
	};
	return (
		<Modal
			show={show}
			onHide={handleClose}
			className='zindex'
			size='xl'
			aria-labelledby='contained-modal-title-vcenter'
			centered>
			<ModalHeader className='border-0' closeButton>
				<Modal.Title id='contained-modal-title-vcenter'>
					Criar novo cliente
				</Modal.Title>
			</ModalHeader>
			<ModalBody>
				<Row className='mt-3'>
					<Col md={4} xs={12}>
						<Form>
							<Form.Label>Nome completo do cleinte</Form.Label>
							<InputGroup className='mb-3'>
								<InputGroup.Text
									id='basic-addon1'
									className='border-0'
									style={{
										background: "#F4F6F8",
									}}>
									<i className='bi bi-person-fill link-icon'></i>
								</InputGroup.Text>
								<Form.Control
									placeholder='Ana Júlia Garcia'
									type='text'
									name='name'
									className='Cardinput border-0'
									// value={data?.name}
									onChange={handleChange}
								/>
							</InputGroup>
						</Form>
					</Col>
					<Col md={4} xs={12}>
						<Form>
							<Form.Label>CPF/CNPJ</Form.Label>
							<InputGroup className='mb-3'>
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
									name='cpfOrCnpj'
									className='Cardinput border-0'
									// value={data?.CpfOrCnpj}
									onChange={handleChange}
								/>
							</InputGroup>
						</Form>
					</Col>
					<Col md={4} xs={12}>
						<Form>
							<Form.Label>Email/telefone</Form.Label>
							<InputGroup className='mb-3'>
								<InputGroup.Text
									id='basic-addon1'
									className='border-0'
									style={{
										background: "#F4F6F8",
									}}>
									<i className='bi bi-envelope-fill link-icon'></i>
								</InputGroup.Text>
								<Form.Control
									placeholder='anajuliamarques@tba.com'
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
				<Row className='mt-3 gx-2'>
					<CpfCard formValues={formValues} />

					<SocialContractCard
						handleFileChange={handleFileChange}
						images={images}
					/>

					<AddressProofCard
						handleAddressChange={handleAddressChange}
						addressImages={addressImages}
						data={data}
					/>
				</Row>
				<div className='d-flex justify-content-end'>
					<Button
						onClick={submitDocumentForm}
						className='mt-4 m-2 p-3 px-4 fw-bold border-0'
						disabled={loading}
						style={{
							width: "fit-content",
							background: "#1C3D59",
						}}>
						Encaminhar
						{loading && (
							<Spinner
								animation='grow'
								variant='light'
								className='ms-3 py-2 fw-bold fs-4'
							/>
						)}
					</Button>
				</div>
			</ModalBody>
		</Modal>
	);
};

export default NewMemberAdd;
