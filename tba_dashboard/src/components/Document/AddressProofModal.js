import React, { useRef, useState } from "react";
import { Button, Col, Modal, Row } from "react-bootstrap";
import { toast } from "react-toastify";
import { approvedDocumentList } from "../../helper/API/document";

const AddressProofModal = ({
	open,
	handleClose,
	document,
	refresh,
	setRefresh,
}) => {
	console.log("document", document);

	const hiddenFileInput = useRef(null);
	const [images, setImages] = useState("");
	const [imagePreview, setImagePreview] = useState(
		document?.addressProof?.url
	);
	const [anchorEl, setAnchorEl] = useState(null);

	const handleImageChange = (event) => {
		const fileUploaded = event.target.files[0];
		if (event.target.files[0]) {
			setImages(event.target.files[0]);
			const reader = new FileReader();
			reader.addEventListener("load", () => {
				setImagePreview(reader.result);
			});
			reader.readAsDataURL(event.target.files[0]);
		}
	};
	const handleClick = (event) => {
		setAnchorEl(event.currentTarget);
		hiddenFileInput.current.click();
	};

	const handleSubmit = (action) => {
		const submitData = {
			id: document.id,
			type: document.type,
			action,
		};
		approvedDocumentList(submitData).then((res) => {
			if (res.success) {
				toast.success(res.message);
				setRefresh(refresh + 1);
				handleClose();
			} else {
				toast.error(res.message);
			}
		});
		console.log("submitData", submitData);
	};

	return (
		<div>
			<Modal show={open} onHide={handleClose} centered>
				<Row className='p-3 px-3'>
					<Col md={10}>
						<h5 className='fw-bold mt-1'>
							Analisar documentos enviados
						</h5>
					</Col>
					<Col>
						<Button
							onClick={handleClose}
							className='bg-white border-0 text-dark'>
							<img src='assets/img/close.png'></img>
						</Button>
					</Col>
				</Row>
				<Row>
					<Col className='mx-4'>
						<div
							className='border d-flex align-items-center justify-content-center position-relative rounded-2 mb-4'
							style={{ height: "400px" }}
							onClick={handleClick}>
							<img
								src={
									imagePreview
										? imagePreview
										: "/assets/img/blankimg.png"
								}
								style={{
									height: imagePreview ? "100%" : "",
									width: imagePreview ? "100%" : "",
									// padding: "0px 15px",
								}}
							/>

							<div
								style={{
									height: "0px",
									width: "0px",
									overflow: "hidden",
								}}>
								<input
									id='upfile'
									type='file'
									ref={hiddenFileInput}
									onChange={handleImageChange}
									style={{ display: "none" }}
								/>
							</div>
						</div>
						<div>
							<a
								href={document?.addressProof?.url}
								target='_blank'
								style={{ textDecoration: "none" }}>
								<Button
									style={{
										position: "absolute",
										backgroundColor: "#1C3D59",
										right: "2%",
										bottom: "12%",
										zIndex: 10000,
									}}>
									<i class='bi bi-cloud-arrow-down-fill'></i>
								</Button>
							</a>
						</div>
					</Col>
				</Row>
				<Row className='px-4 gx-2 my-2'>
					<Col>
						<Button
							className='w-100 p-0 py-2 border-0'
							style={{ background: "#C4CCD2" }}
							disabled={document?.addressProof?.approved}
							onClick={() => handleSubmit("reject")}>
							<i class='bi bi-x'></i>Solicitar outra foto
						</Button>
					</Col>
					<Col>
						<Button
							className='p-0 py-2 w-100 border-0'
							style={{ backgroundColor: "#1C3D59" }}
							disabled={document?.addressProof?.approved}
							onClick={() => handleSubmit("approved")}>
							<i class='bi bi-check'></i>Aprovar documento
						</Button>
					</Col>
				</Row>
			</Modal>
		</div>
	);
};

export default AddressProofModal;
