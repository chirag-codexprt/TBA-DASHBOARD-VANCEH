import React, { useState } from "react";
import { Card, Row, Col } from "react-bootstrap";
import Button from "react-bootstrap/Button";

import Table from "react-bootstrap/Table";
import GenerateLinkModal from "./GenerateLinkModal";
import ImageUploadModal from "./ImageUploadModal";

const DocumentTable = () => {
	const [open, setOpen] = useState(false);
	const [openImageModal, setOpenImageModal] = useState(false);
	const [openLinkModal, setOpenLinkModal] = useState(false);

	const handleShowRow = () => {
		setOpen(!open);
	};

	const handleShowImageModal = () => {
		setOpenImageModal(true);
		// console.log("clicked");
	};

	const handleShowLinkModal = () => {
		setOpenLinkModal(true);
		// console.log("clicked");
	};

	return (
		<div>
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
					<tr
						style={{ position: "relative", cursor: "pointer" }}
						className={open ? "row-height" : ""}>
						<td onClick={handleShowRow}>Ana Júlia Garcia</td>
						<td onClick={handleShowRow}>000.000.000-00</td>
						<td onClick={handleShowRow}>anajulia@vanceh.com</td>
						<td onClick={handleShowRow}>13 dez 2022</td>
						<td onClick={handleShowRow}>13:04</td>
						<td
							className='position-relative'
							style={{ zIndex: 1000 }}>
							<Button
								variant='warning'
								onClick={handleShowLinkModal}>
								Pendente
							</Button>
						</td>

						{open && (
							<Row
								className='position-absolute'
								style={{
									left: "0",
									bottom: "0",
									width: "100%",
								}}>
								<Col>
									<Col
										style={{
											color: "#B5B6B7",
										}}>
										CPF/CNPJ
									</Col>
									<Col>
										<Button
											className='w-100 p-0'
											variant='outline-success'>
											<i class='bi bi-check-lg fs-1'></i>
											<h6
												style={{
													color: "#C4CCD2",
													fontSize: "11px",
												}}>
												Já aprovada, visualizar?
											</h6>
										</Button>
									</Col>
								</Col>

								<Col>
									<Col
										style={{
											color: "#B5B6B7",
										}}>
										Contrato social
									</Col>
									<Col>
										<Button
											className='w-100 p-0 ms-0'
											onClick={handleShowImageModal}
											variant='outline-warning'>
											<i class='bi bi-clock-fill fs-1'></i>
											<h6
												style={{
													color: "#C4CCD2",
													fontSize: "11px",
												}}>
												Aguardando análise, visualizar?
											</h6>
										</Button>
									</Col>
								</Col>

								<Col>
									<Col
										style={{
											color: "#B5B6B7",
										}}>
										Comprovante de residência
									</Col>
									<Col>
										<Button
											className='w-100 p-0'
											variant='outline-secondary'>
											<label
												style={{
													rotate: "45deg",
												}}>
												<i class='bi bi-paperclip fs-1'></i>
											</label>
											<h6
												style={{
													color: "#C4CCD2",
													fontSize: "11px",
												}}>
												Arraste e solte aqui ou importe
												dos seus arquivos
											</h6>
										</Button>
									</Col>
								</Col>

								<Row>
									<Col
										className='d-flex justify-content-center mt-2 ms-4'
										style={{
											color: "#C4CCD2",
											fontSize: "12px",
										}}>
										Responsável por esse cliente: Renata
										Vasconcelos
									</Col>
								</Row>
							</Row>
						)}
					</tr>
				</tbody>
			</Table>
			{openImageModal && (
				<ImageUploadModal
					open={openImageModal}
					handleClose={() => setOpenImageModal(false)}
				/>
			)}
			{openLinkModal && (
				<GenerateLinkModal
					open={openLinkModal}
					handleClose={() => setOpenLinkModal(false)}
				/>
			)}
		</div>
	);
};

export default DocumentTable;
