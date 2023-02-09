import React, { useEffect, useState } from "react";
import { Button, Col, Form, InputGroup, Modal, Row } from "react-bootstrap";
import { toast } from "react-toastify";
import { LINK_URL } from "../../config";
import { generateLink, generateNewLink } from "../../helper/API/contact";
import copy from "copy-to-clipboard";
import ModalCardRow from "./documents/ModalCardRow";
import PermissionSwith from "./documents/PermissionSwitch";
import Loader from "../Loader";
import PermissionSwitchTabel from "./documents/PermissionSwitchTabel";

const GenerateLinkNew = ({
	open,
	handleClose,
	editData,
	refresh,
	setRefresh,
}) => {
	// console.log("editData", editData);
	const [permission, setPermission] = useState([]);
	const [loading, setLoading] = useState(false);

	useEffect(() => {
		setLoading(true);
		generateNewLink().then((res) => {
			if (res.success) {
				setLoading(false);
				// console.log("res", res);
				setPermission(res.data);
			} else {
				setLoading(false);
			}
		});
	}, []);

	const [copyText, setCopyText] = useState(false);
	const [formValues, setFormValues] = useState({
		CNPJDOC: true,
		CPFDOC: true,
		socialContract: true,
		addressProof: true,
		balanceIncome: true,
		balanceSheet: true,
		partnerIncome: true,
		billingCustomer: true,
		partnerDocument: true,
		updatedBankDebt: true,
		spouseDocument: true,
		extractBusiestBank: true,
		companyPhotos: true,
		abcCurve: true,
	});

	const link = `${LINK_URL}${editData.id}/${editData.documentRequest.id}`;

	const handleCheck = (e) => {
		setFormValues({
			...formValues,
			[e.target.name]: e.target.checked,
		});
	};

	const submitForm = (e) => {
		const submitData = {
			permission: {
				...formValues,
			},
			contactId: editData.id,
			requestId: editData.documentRequest.id,
			generateLink: link,
		};
		// console.log("submitData", submitData);
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
	// console.log("formValues", formValues);
	return (
		<div>
			<Modal
				className='zindex'
				show={open}
				onHide={handleClose}
				aria-labelledby='contained-modal-title-vcenter'
				centered
				size='lg'>
				<ModalCardRow
					handleClose={handleClose}
					id='contained-modal-title-vcenter'
					editData={editData}
				/>
				<Row className='px-4 pt-3'>
					<Col md={12}>
						<h6>Solicitar outros documentos</h6>
					</Col>
					{/* {loading ? (
						<Loader />
					) : (
						permission?.map(
							(obj, index) =>
								obj?.type !== "CPF" &&
								obj.type !== "CNPJ" && (
									<PermissionSwith
										name={obj?.type}
										label={obj?.title}
										defaultChecked={
											obj?.type
												? `${formValues}.${obj?.type}`
												: ""
										}
										handleCheck={handleCheck}
									// checked={`${formValues}.${obj?.type}`}
									/>
								)
						)
					)} */}
					<PermissionSwitchTabel
						handleCheck={handleCheck}
						formValues={formValues}
						editData={editData}
					/>
				</Row>
				<Row className='px-4'>
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
							disabled={loading}
							className='px-5'
							style={{ background: "#1C3D59" }}
							onClick={submitForm}>
							{/* Encaminhar */}
							Copiar link &nbsp;
							{loading && (
								<div
									className='spinner-border spinner-border-sm '
									role='status'
									style={{
										color: "#85A6A2",
									}}></div>
							)}
						</Button>
					</Col>
				</Row>
			</Modal>
		</div>
	);
};

export default GenerateLinkNew;
