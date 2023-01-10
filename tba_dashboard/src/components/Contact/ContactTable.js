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
		return tableData.slice(firstPageIndex, lastPageIndex);
	}, [currentPage]);

	const handleShowRow = (id) => {
		setId(id);
		console.log("id", id);
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
								style={{ position: "relative" }}
								height={id === obj.id && open ? "100px" : ""}>
								<td>{obj.name}</td>
								<td>{obj.CpfOrCnpj}</td>
								<td>{obj.email}</td>
								<td>13 dez 2022</td>
								<td>13:04</td>
								<td className='position-relative'>
									<Button
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
											: "respondidas"}
									</Button>
								</td>
								{obj.status === "pending" && (
									<div>
										{id === obj.id && open ? (
											<Row
												style={{
													width: "600px",
													position: "absolute",
													right: "1.3%",
													bottom: "0px",
												}}>
												{/* <Row> */}
												<Col
													md={4}
													className='opacity-25'>
													Entrar em contato por:
												</Col>

												<Col md={1}>
													<Button
														style={{
															background:
																"#1C3D59",
														}}>
														<i class='bi bi-whatsapp'></i>
													</Button>
												</Col>
												<Col md={1}>
													<Button
														style={{
															background:
																"#1C3D59",
														}}>
														<i class='bi bi-envelope'></i>
													</Button>
												</Col>
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
														}}>
														Gerar link
													</Button>
												</Col>
												{/* </Row> */}
											</Row>
										) : (
											""
										)}
									</div>
								)}
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
