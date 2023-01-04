import React, { useState } from "react";
import { Card, Row, Col } from "react-bootstrap";
import Button from "react-bootstrap/Button";

import Table from "react-bootstrap/Table";
import GenerateLinkModal from "./GenerateLinkModal";
// import GenerateLinkModal from "./GenerateLinkModal";
// import ImageUploadModal from "./ImageUploadModal";

const ContactTable = () => {
	const [open, setOpen] = useState(false);
	const [openLinkModal, setOpenLinkModal] = useState(false);

	const handleShowRow = () => {
		setOpen(!open);
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
						style={{ position: "relative" }}
						className={open ? "" : ""}
						height={open ? "100px" : ""}>
						<td>Ana Júlia Garcia</td>
						<td>000.000.000-00</td>
						<td>anajulia@vanceh.com</td>
						<td>13 dez 2022</td>
						<td>13:04</td>
						<td className='position-relative'>
							<Button variant='warning' onClick={handleShowRow}>
								Pendente
							</Button>
						</td>

						{open && (
							<Row
								style={{
									width: "600px",
									position: "absolute",
									right: "1.3%",
									bottom: "0px",
								}}>
								{/* <Row> */}
								<Col md={4} className='opacity-25'>
									Entrar em contato por:
								</Col>

								<Col md={1}>
									<Button
										style={{
											background: "#1C3D59",
										}}>
										<i class='bi bi-whatsapp'></i>
									</Button>
								</Col>
								<Col md={1}>
									<Button
										style={{
											background: "#1C3D59",
										}}>
										<i class='bi bi-envelope'></i>
									</Button>
								</Col>
								<Col md={2} className='opacity-25 text-center'>
									ou
								</Col>
								<Col md={3} className='ps-0'>
									<Button
										onClick={handleShowLinkModal}
										className='border-0'
										style={{
											background: "#C4CCD2",
										}}>
										Gerar link
									</Button>
								</Col>
								{/* </Row> */}
							</Row>
						)}
					</tr>
				</tbody>
			</Table>

			{openLinkModal && (
				<GenerateLinkModal
					open={openLinkModal}
					handleClose={() => setOpenLinkModal(false)}
				/>
			)}
		</div>
	);
};

export default ContactTable;
