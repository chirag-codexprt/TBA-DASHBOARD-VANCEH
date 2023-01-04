import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { Row, Col } from "react-bootstrap";
import InputGroup from "react-bootstrap/InputGroup";
import Form from "react-bootstrap/Form";
const ProfilePicture = ({ open, handleClose }) => {
	const hiddenFileInput = React.useRef(null);
	const [images, setImages] = React.useState("");
	const [imagePreview, setImagePreview] = React.useState("");
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
						<Col
							className=' fs-5 ms-3 mb-3'
							style={{ fontWeight: 900 }}>
							Alterar foto
						</Col>
						<Col className='d-flex justify-content-end mb-3'>
							<Button
								onClick={handleClose}
								className='border-0 text-dark p-0 mx-4 fs-4 bg-white'>
								x
							</Button>
						</Col>
					</Row>
					<Row className='text-center'>
						{/* <Col md={12} className='my-3'>
							<img src='/assets/img/madam2.png' />
						</Col> */}
						<Col
							sm={12}
							md={12}
							style={{ color: "#B5B6B7" }}
							className='d-flex justify-content-center'>
							<div
								style={{
									display: "flex",
									justifyContent: "space-between",
									alignItems: "center",
								}}>
								<div
									style={{
										display: "flex",
										alignItems: "center",
										flexDirection: "column",
									}}>
									<img src='/assets/img/madam2.png' />
									<div
										style={{
											display: "flex",
											alignItems: "center",
											flexDirection: "row",
											marginTop: "1rem",
										}}>
										{!imagePreview && (
											<span>
												<i className='bi bi-camera-fill'></i>
											</span>
										)}
										{imagePreview && (
											<img
												src={
													imagePreview
														? imagePreview
														: "/assets/images/uploadImg.png"
												}
												className='imgPreview'
											/>
										)}
										<div
											className='yourBtn'
											onClick={handleClick}>
											Selecionar dos arquivos
										</div>
									</div>

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
							</div>
						</Col>
						<div>
							<hr
								className='w-50 mx-auto'
								style={{ color: "#B5B6B7" }}
							/>
						</div>
						{/* <Col
							sm={8}
							md={8}
							style={{ color: "#B5B6B7" }}
							className='mb-4 mx-auto'>
							<InputGroup className='mb-3 border-0 rounded items-center'>
								<InputGroup.Text
									className='bg-white border-0'
									style={{ backgroundColor: "#F4F6F8" }}>
									<i className='bi bi-camera-fill fs-color '></i>
								</InputGroup.Text>
								<Form.Control
									disabled
									className='border-0 shadow-none'
									placeholder=' Abrir a câmera'
									type={"text"}
								/>
							</InputGroup>

							<span><i className="bi bi-camera-fill"></i>&nbsp;Abrir a câmera</span>
						</Col> */}
						<Col className='mx-auto' sm={6}>
							<Button
								className='fw-bolder fs-6 w-100'
								style={{ backgroundColor: "#1C3D59" }}>
								Atualizar
							</Button>
						</Col>
					</Row>
				</Modal.Body>
			</Modal>
		</>
	);
};

export default ProfilePicture;
