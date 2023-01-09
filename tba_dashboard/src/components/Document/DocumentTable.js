import React, { useState, useEffect, useMemo } from "react";
import { Card, Row, Col } from "react-bootstrap";
import Button from "react-bootstrap/Button";

import Table from "react-bootstrap/Table";
import RecordFound from "../RecordFound";
import GenerateLinkModal from "./GenerateLinkModal";
import ImageUploadModal from "./ImageUploadModal";

const DocumentTable = ({ tableRow, refresh, setRefresh }) => {
	const [open, setOpen] = useState(false);
	const [openImageModal, setOpenImageModal] = useState(false);
	const [openLinkModal, setOpenLinkModal] = useState(false);
	const [id, setId] = useState(null);
	const [editData, setEditData] = useState(null);
	const [tableData, setTableData] = useState(tableRow);
	const [document, setDocument] = useState();
	let PageSize = 10;
	console.log("id", id);
	useEffect(() => {
		setTableData(tableRow);
	}, [tableRow]);

	const [currentPage, setCurrentPage] = useState(1);

	const currentTableData = useMemo(() => {
		const firstPageIndex = (currentPage - 1) * PageSize;
		const lastPageIndex = firstPageIndex + PageSize;
		return tableData.slice(firstPageIndex, lastPageIndex);
	}, [currentPage]);

	const handleShowRow = (data) => {
		setOpen(true);
		setId(data);
	};

	const handleShowImageModal = (data, type) => {
		setOpenImageModal(true);
		setDocument({
			...data,
			type,
		});
	};

	const handleShowLinkModal = (val) => {
		setOpenLinkModal(true);
		setEditData(val);
	};

	return (
		<div>
			<Table responsive>
				{currentTableData.length ? (
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
				) : (
					""
				)}
				{currentTableData.length ? (
					<tbody>
						{currentTableData?.map((obj, i) => (
							<tr
								style={{
									position: "relative",
									cursor: "pointer",
								}}
								className={
									id === obj.id &&
									open &&
									obj.allStatus === "pending"
										? "row-height"
										: ""
								}>
								<td
									onClick={
										obj.allStatus === "pending"
											? () => handleShowRow(obj.id)
											: null
									}>
									{obj.name}
								</td>
								<td
									onClick={
										obj.allStatus === "pending"
											? () => handleShowRow(obj.id)
											: null
									}>
									{obj.CpfOrCnpj}
								</td>
								<td
									onClick={
										obj.allStatus === "pending"
											? () => handleShowRow(obj.id)
											: null
									}>
									{obj.email}
								</td>
								<td
									onClick={
										obj.allStatus === "pending"
											? () => handleShowRow(obj.id)
											: null
									}>
									13 dez 2022
								</td>
								<td
									onClick={
										obj.allStatus === "pending"
											? () => handleShowRow(obj.id)
											: null
									}>
									13:04
								</td>
								<td
									className='position-relative'
									style={{ zIndex: 1000 }}>
									<Button
										variant={
											obj.allStatus === "pending"
												? "warning"
												: "success"
										}
										onClick={() =>
											handleShowLinkModal(obj)
										}>
										{obj.allStatus === "pending"
											? "Pending"
											: "Approved"}
									</Button>
								</td>
								{obj.allStatus === "pending" && (
									<div>
										{id === obj.id && open && (
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
																	fontSize:
																		"11px",
																}}>
																Já aprovada,
																visualizar?
															</h6>
														</Button>
													</Col>
												</Col>

												{/* {!obj.socialContract
													.approved && ( */}
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
															onClick={() =>
																handleShowImageModal(
																	obj,
																	"socialContract"
																)
															}
															variant='outline-warning'>
															<i class='bi bi-clock-fill fs-1'></i>
															<h6
																style={{
																	color: "#C4CCD2",
																	fontSize:
																		"11px",
																}}>
																Aguardando
																análise,
																visualizar?
															</h6>
														</Button>
													</Col>
												</Col>
												{/* )} */}

												{/* {!obj.addressProof.approved && ( */}
												<Col>
													<Col
														style={{
															color: "#B5B6B7",
														}}>
														Comprovante de
														residência
													</Col>
													<Col>
														<Button
															className='w-100 p-0'
															variant='outline-secondary'
															onClick={() =>
																handleShowImageModal(
																	obj,
																	"addressProof"
																)
															}>
															<label
																style={{
																	rotate: "45deg",
																}}>
																<i class='bi bi-paperclip fs-1'></i>
															</label>
															<h6
																style={{
																	color: "#C4CCD2",
																	fontSize:
																		"11px",
																}}>
																Arraste e solte
																aqui ou importe
																dos seus
																arquivos
															</h6>
														</Button>
													</Col>
												</Col>
												{/* )} */}

												<Row>
													<Col
														className='d-flex justify-content-center mt-2 ms-4'
														style={{
															color: "#C4CCD2",
															fontSize: "12px",
														}}>
														Responsável por esse
														cliente: Renata
														Vasconcelos
													</Col>
												</Row>
											</Row>
										)}
									</div>
								)}
							</tr>
						))}
					</tbody>
				) : (
					<RecordFound label='No Record Found' />
				)}
			</Table>
			{openImageModal && (
				<ImageUploadModal
					open={openImageModal}
					handleClose={() => setOpenImageModal(false)}
					document={document}
					refresh={refresh}
					setRefresh={setRefresh}
				/>
			)}
			{openLinkModal && (
				<GenerateLinkModal
					open={openLinkModal}
					handleClose={() => setOpenLinkModal(false)}
					editData={editData}
				/>
			)}
		</div>
	);
};

export default DocumentTable;
