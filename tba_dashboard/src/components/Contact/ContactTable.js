import React, { useState, useRef, useEffect, useMemo } from "react";
import { Card, Row, Col } from "react-bootstrap";
import Button from "react-bootstrap/Button";

import Table from "react-bootstrap/Table";
import GenerateLinkNew from "../Document/GenerateLinkNew";
import Pagination from "../Pagination";
import RecordFound from "../RecordFound";
import ContactTooltip from "./ContactTooltip";
import GenerateLinkModal from "./GenerateLinkModal";

const ContactTable = ({ tableRow, refresh, setRefresh }) => {
	const [openLinkModal, setOpenLinkModal] = useState(false);
	// console.log("tableRow", tableRow);
	const [open, setOpen] = useState(false);
	const [id, setId] = useState(null);
	const [editData, setEditData] = useState(null);
	const [tableData, setTableData] = useState(tableRow);
	const [idArray, setIdArray] = useState([]);
	let PageSize = 10;

	const ref = useRef(null);
	const [show, setShow] = useState(false);
	const [target, setTarget] = useState(null);
	const [visitorId, setVisitorId] = useState(null);
	// console.log('show', show)

	// let ab = [];

	// console.log("idArray", idArray);
	useEffect(() => {
		setTableData(tableRow);

		// tableRow?.filter((obj, index) => {
		// 	// console.log("obj", obj.contactApprove === "pending");
		// 	if (obj.contactApprove === "pending") {
		// 		setIdArray((old) => [...old, obj.id]);
		// 	}
		// });
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
		// const index = idArray.findIndex((i) => i === id);
		if (idArray.includes(id)) {
			var index = idArray.indexOf(id);
			if (index !== -1) {
				idArray.splice(index, 1);
			}
		} else {
			setIdArray((old) => [...old, id]);
		}

		// console.log("index ::", index);
	};

	const handleShowLinkModal = (val) => {
		setOpenLinkModal(true);
		setEditData(val);
	};

	const handalShowTooltip = (event, id) => {
		console.log("id", id);
		setVisitorId(id);
		setShow(true);
		setTarget(event.target);
	};

	// console.log("idArray", idArray);
	return (
		<div>
			<Table responsive>
				{currentTableData.length ? (
					<thead>
						<tr style={{ color: "#B5B6B7", fontSize: "12px" }}>
							<th width={"25%"}>Nome</th>
							<th>CPF</th>
							<th>CNPJ</th>
							<th>Telefone</th>
							<th>Data</th>
							<th>Hora</th>
							<th width={"10%"}>Status</th>
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
									fontSize: "14px",
								}}
								height={
									idArray.includes(obj.id) ? "100px" : ""
								}>
								<td
									className='fw-bold'
									onClick={
										obj.contactApprove === "pending"
											? () => handleShowRow(obj.id)
											: null
									}>
									{obj.name}
								</td>
								<td
									onClick={
										obj.contactApprove === "pending"
											? () => handleShowRow(obj.id)
											: null
									}>
									{obj.CPF}
								</td>
								<td
									onClick={
										obj.contactApprove === "pending"
											? () => handleShowRow(obj.id)
											: null
									}>
									{obj.CNPJ}
								</td>
								<td
									onClick={
										obj.contactApprove === "pending"
											? () => handleShowRow(obj.id)
											: null
									}>
									{obj.phone}
								</td>
								<td
									onClick={
										obj.contactApprove === "pending"
											? () => handleShowRow(obj.id)
											: null
									}>
									{obj.date}
								</td>
								<td
									onClick={
										obj.contactApprove === "pending"
											? () => handleShowRow(obj.id)
											: null
									}>
									{obj.time}
								</td>
								<td className='position-relative'>
									<Button
										// className='py-0 px-0 fw-bold text-white'
										style={{
											width: "100px",
											fontSize: "12px",
											borderRadius: "3px",
											border: "0px",
											fontWeight: "normal",
											padding: "0",
										}}
										className={
											obj.contactApprove === "pending"
												? "document-pending"
												: obj.contactApprove ===
													"rejected"
													? "contact-wait"
													: "document-success"
										}
										onClick={
											obj.contactApprove !== "rejected" &&
												obj.contactApprove !== "approved"
												? (e) =>
													handalShowTooltip(
														e,
														obj.id
													)
												: null
										}>
										{obj.contactApprove === "pending"
											? "Aguardando"
											: obj.contactApprove === "rejected"
												? "Reprovado"
												: "Aprovado"}
									</Button>
									{show && (
										<ContactTooltip
											show={show}
											target={target}
											ref={ref}
											refresh={refresh}
											setRefresh={setRefresh}
											visitorId={visitorId}
											close={() => setShow(false)}
										/>
									)}
								</td>
								{
									obj.contactApprove === "pending" &&
									// <div>
									(idArray.includes(obj.id) ? (
										// <Row
										// 	style={{
										// 		width: "600px",
										// 		position: "absolute",
										// 		right: "-15.3%",
										// 		bottom: "0%",
										// 	}}>
										// 	{/* <Row> */}
										// 	<Col
										// 		md={4}
										// 		className='opacity-25 px-1'
										// 		style={{
										// 			textAlign: "right",
										// 		}}>
										// 		Entrar em contato por:
										// 	</Col>

										// 	{obj?.phone && (
										// 		<Col
										// 			md={1}
										// 			className='px-1'>
										// 			<Button
										// 				style={{
										// 					background:
										// 						"#1C3D59",
										// 				}}>
										// 				<a
										// 					href={`https://wa.me/${obj.phone}`}
										// 					target='_blank'
										// 					style={{
										// 						textDecoration:
										// 							"none",
										// 						color: "#fff",
										// 					}}>
										// 					<i class='bi bi-whatsapp'></i>
										// 				</a>
										// 			</Button>
										// 		</Col>
										// 	)}
										// 	{obj?.email && (
										// 		<Col
										// 			md={1}
										// 			className='px-1'>
										// 			<Button
										// 				style={{
										// 					background:
										// 						"#1C3D59",
										// 				}}>
										// 				<a
										// 					href={`mailto:${obj.email}`}
										// 					target='_blank'
										// 					style={{
										// 						textDecoration:
										// 							"none",
										// 						color: "#fff",
										// 					}}>
										// 					<i class='bi bi-envelope'></i>
										// 				</a>
										// 			</Button>
										// 		</Col>
										// 	)}
										// 	<Col
										// 		md={1}
										// 		className='opacity-25 text-center'>
										// 		ou
										// 	</Col>
										// 	<Col md={3} className='ps-0'>
										// 		<Button
										// 			onClick={() =>
										// 				handleShowLinkModal(
										// 					obj
										// 				)
										// 			}
										// 			className='border-0'
										// 			style={{
										// 				background:
										// 					"#1C3D59",
										// 				width: "100%",
										// 			}}>
										// 			Gerar link
										// 		</Button>
										// 	</Col>
										// 	{/* </Row> */}
										// </Row>
										<div
											className='d-flex justify-content-end'
											style={{
												position: "absolute",
												top: "45%",
												right: "0%",
												paddingRight: "1%",
												marginRight: "2px",
											}}>
											<h6
												style={{ color: "#B5B6B7" }}
												className='d-flex mt-1 align-items-center'>
												{" "}
												Entrar em contato por:
											</h6>
											<div className='ps-3'>
												{obj?.phone && (
													<Button
														style={{
															background:
																"#1C3D59",
														}}
														className='border-0'>
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
												)}
												{/* {obj?.email && (
													<Button
														style={{
															background:
																"#1C3D59",
														}}
														className='border-0'>
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
												)} */}
											</div>
										</div>
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
				<GenerateLinkNew
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
