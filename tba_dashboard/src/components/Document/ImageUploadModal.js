import React from "react";
import { Button, Col, Modal, Row } from "react-bootstrap";

const ImageUploadModal = ({ open, handleClose }) => {
	return (
		<div>
			<Modal show={open} onHide={handleClose}>
				<Row className='p-3 px-3'>
					<Col md={10}>
						<h5 className='fw-bold mt-1'>
							Analisar documentos enviados
						</h5>
					</Col>
					<Col>
						<Button
							onClick={handleClose}
							className='bg-white border text-dark'>
							X
						</Button>
					</Col>
				</Row>
				<Row>
					<Col className='mx-4'>
						<div
							className='border d-flex align-items-center justify-content-center position-relative rounded-2 mb-4'
							style={{ height: "400px" }}>
							<img src='/assets/img/blankimg.png'></img>
							<div>
								<Button
									style={{
										position: "absolute",
										backgroundColor: "#1C3D59",
										right: "-6%",
										bottom: "-10px",
										border: "0",
									}}>
									<i class='bi bi-cloud-arrow-down-fill'></i>
								</Button>
							</div>
						</div>
					</Col>
				</Row>
				<Row className='px-4 gx-2 my-2'>
					<Col>
						<Button
							className='w-100 p-0 py-2 border-0'
							style={{ background: "#C4CCD2" }}>
							<i class='bi bi-x'></i>Solicitar outra foto
						</Button>
					</Col>
					<Col>
						<Button
							className='p-0 py-2 w-100 border-0'
							style={{ backgroundColor: "#1C3D59" }}>
							<i class='bi bi-check'></i>Aprovar documento
						</Button>
					</Col>
				</Row>
			</Modal>
		</div>
	);
};

export default ImageUploadModal;
