import React, { useState, useRef, useEffect, useMemo } from "react";
import { Card, Row, Col } from "react-bootstrap";
import Button from "react-bootstrap/Button";

import Table from "react-bootstrap/Table";
import Pagination from "../Pagination";
import RecordFound from "../RecordFound";
import GenerateLinkModal from "./GenerateLinkModal";

const ContactTable = ({ tableRow, refresh, setRefresh }) => {
	const [openLinkModal, setOpenLinkModal] = useState(false);
	console.log("tableRow", tableRow);
	const [open, setOpen] = useState(false);
	const [id, setId] = useState(null);
	const [editData, setEditData] = useState(null);
	const [tableData, setTableData] = useState(tableRow);
	let PageSize = 10;

	useEffect(() => {
		setTableData(tableRow);
	}, [tableRow]);

	const [currentPage, setCurrentPage] = useState(1);

	const currentTableData = useMemo(() => {
		const firstPageIndex = (currentPage - 1) * PageSize;
		const lastPageIndex = firstPageIndex + PageSize;
		return tableData?.slice(firstPageIndex, lastPageIndex);
	}, [tableData, currentPage]);

	const handleShowRow = (id) => {
		setId(id);
		// console.log("id", id);
		setOpen(!open);
	};

	const handleShowLinkModal = (val) => {
		setOpenLinkModal(true);
		setEditData(val);
	};
	console.log("currentTableData", currentTableData);
	return (
		<div>
			<Table responsive>
				{currentTableData.length ? (
					<thead>
						<tr style={{ color: "#B5B6B7", fontSize: "12px" }}>
							<th>Nome</th>
							<th>CPF/CNPJ</th>
							<th>Email/Telefone</th>
							<th>Data</th>
							<th>Hora</th>
							<th
								className='text-center'
								style={{ paddingRight: "-2rem" }}>
								Status
							</th>
						</tr>
					</thead>
				) : (
					""
				)}
				{currentTableData.length ? (
					<tbody>
						{currentTableData?.map((obj, i) => (
							<tr
								style={{ position: "relative", fontSize: '14px' }}
								height={id === obj.id && open ? "100px" : ""}>
								<td className='fw-bold'>{obj.name}</td>
								<td>{obj.CpfOrCnpj}</td>
								<td>{obj.email ? obj.email : obj.phone}</td>
								<td>{obj.date}</td>
								<td>{obj.time}</td>
								<td className='position-relative text-end'>
									<Button
										className="py-0 px-0 fw-bold text-white"
										style={{ width: "100px", fontSize: '12px' }}
										variant={
											obj.status === "pending"
												? "warning"
												: "success"
										}
										onClick={
											obj.status === "pending"
												? () => handleShowRow(obj.id)
												: null
										}>
										{obj.status === "pending"
											? "Pendente"
											: "Respondido"}
									</Button>
								</td>
								{
									obj.status === "pending" &&
									// <div>
									(id === obj.id && open ? (
										<Row
											style={{
												width: "600px",
												position: "absolute",
												right: "-3rem",
												bottom: "0%",
											}}>
											{/* <Row> */}
											<Col
												md={4}
												className='opacity-25'>
												Entrar em contato por:
											</Col>

											{obj?.phone && (
												<Col md={1}>
													<Button
														style={{
															background:
																"#1C3D59",
														}}>
														<a
															href={`https://wa.me/${obj.phone}`}
															target='_blank'
															style={{
																textDecoration:
																	"none",
																color: "#fff",
															}}>
															<i class='bi bi-whatsapp'></i>
														</a>
													</Button>
												</Col>
											)}
											{obj?.email && (
												<Col md={1}>
													<Button
														style={{
															background:
																"#1C3D59",
														}}>
														<a
															href={`mailto:${obj.email}`}
															target='_blank'
															style={{
																textDecoration:
																	"none",
																color: "#fff",
															}}>
															<i class='bi bi-envelope'></i>
														</a>
													</Button>
												</Col>
											)}
											<Col
												md={2}
												className='opacity-25 text-center'>
												ou
											</Col>
											<Col md={3} className='ps-0'>
												<Button
													onClick={() =>
														handleShowLinkModal(
															obj
														)
													}
													className='border-0'
													style={{
														background:
															"#C4CCD2",
														width: "100%",
													}}>
													Gerar link
												</Button>
											</Col>
											{/* </Row> */}
										</Row>
									) : (
										""
									))
									// </div>
								}
							</tr>
						))}
					</tbody>
				) : (
					<RecordFound label='Nenhum Registro Encontrado' />
				)}
			</Table>
			<Pagination
				className='pagination-bar'
				currentPage={currentPage}
				totalCount={tableData.length}
				pageSize={PageSize}
				onPageChange={(page) => setCurrentPage(page)}
			/>
			{openLinkModal && (
				<GenerateLinkModal
					open={openLinkModal}
					handleClose={() => setOpenLinkModal(false)}
					editData={editData}
					refresh={refresh}
					setRefresh={setRefresh}
				/>
			)}
		</div>
	);
};

export default ContactTable;
