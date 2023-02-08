import React, { useState, useEffect, useMemo } from "react";
import { Card, Row, Col } from "react-bootstrap";
import Button from "react-bootstrap/Button";

import Table from "react-bootstrap/Table";
import { useRecoilValue } from "recoil";
import { loginAtom } from "../../recoil/Atoms";
import Pagination from "../Pagination";
import RecordFound from "../RecordFound";
import TableRowDocument from "./documents/TableRowDocument";
import GenerateLinkModal from "./GenerateLinkModal";
import GenerateLinkNew from "./GenerateLinkNew";
import ImageUploadModal from "./ImageUploadModal";
import GenerateLinkBtn from "./NewClientCards/GenerateLinkBtn";
import NewMemberAdd from "./NewMemberAdd";
import SocialContractBtn from "./SocialContractBtn";

const DocumentTable = ({
	tableRow,
	refresh,
	setRefresh,
	id,
	setId,
	open,
	setOpen,
	handleShowRow,
	idArray,
}) => {
	const adminName = useRecoilValue(loginAtom);
	const [openImageModal, setOpenImageModal] = useState(false);
	const [openLinkModal, setOpenLinkModal] = useState(false);
	const [editData, setEditData] = useState(null);
	const [tableData, setTableData] = useState(tableRow);
	const [document, setDocument] = useState();

	let PageSize = 10;
	useEffect(() => {
		setTableData(tableRow);
	}, [tableRow]);

	const [currentPage, setCurrentPage] = useState(1);

	const currentTableData = useMemo(() => {
		const firstPageIndex = (currentPage - 1) * PageSize;
		const lastPageIndex = firstPageIndex + PageSize;
		return tableData.slice(firstPageIndex, lastPageIndex);
	}, [tableData, currentPage]);

	const handleShowImageModal = (data, type) => {
		// if (data.socialContract) {
		setDocument({
			...data,
			type,
		});
		setOpenImageModal(true);
		// }
	};

	const handleShowLinkModal = (val) => {
		console.log("clicked");
		setOpenLinkModal(true);
		setEditData(val);
	};
	console.log("idArray.includes(id)", idArray);
	const getRequiredLength = (obj) => {
		return Object.values(obj?.documentRequest?.requiredPermission).filter(
			(val) => val
		).length;
	};
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
									fontSize: "14px",
								}}
								className={
									idArray.includes(obj.id) &&
										getRequiredLength(obj) <= 3 &&
										getRequiredLength(obj) !== 0
										? "row-height1"
										: idArray.includes(obj.id) &&
											getRequiredLength(obj) >= 4 &&
											getRequiredLength(obj) <= 6 &&
											getRequiredLength(obj) !== 0
											? "row-height2"
											: idArray.includes(obj.id) &&
												getRequiredLength(obj) >= 14 &&
												getRequiredLength(obj) !== 0
												? "row-height"
												: idArray.includes(obj.id) &&
													getRequiredLength(obj) >= 6 &&
													getRequiredLength(obj) <= 9
													? "row-height3"
													: idArray.includes(obj.id) &&
														getRequiredLength(obj) >= 9 &&
														getRequiredLength(obj) <= 12
														? "row-height4"
														: idArray.includes(obj.id) &&
															getRequiredLength(obj) === 0
															? "row-height5"
															: ""
									// "row-height"
								}>
								<td
									onClick={() => handleShowRow(obj.id)}
									className='fw-bold'>
									{obj.name}
								</td>
								<td onClick={() => handleShowRow(obj.id)}>
									{obj.CPF}
								</td>
								<td onClick={() => handleShowRow(obj.id)}>
									{obj.CNPJ}
								</td>
								<td onClick={() => handleShowRow(obj.id)}>
									{obj.phone}
								</td>
								<td onClick={() => handleShowRow(obj.id)}>
									{obj.date}
								</td>
								<td onClick={() => handleShowRow(obj.id)}>
									{obj.time}
								</td>
								<td
									className='position-relative text-end'
									style={{ zIndex: 1000 }}>
									<Button
										style={{
											width: "100px",
											fontSize: "12px",
											fontWeight: "500",
											border: "0",
											padding: "0",
											borderRadius: "3px",
										}}
										className={
											// 	obj.allStatus === "pending"
											// 		? "warning"
											// 		: "success"
											// }
											obj.allStatus === "pending"
												? "document-pending"
												: obj.allStatus === "wait"
													? "document-wait"
													: "document-success"
										}
									// onClick={
									// 	obj.allStatus === "pending"
									// 		? () => handleShowLinkModal(obj)
									// 		: null
									// }
									>
										{/* {obj.allStatus === "pending"
											? "Pendente"
											: "Concluded"} */}

										{obj.allStatus === "pending"
											? "Aguard. doc."
											: obj.allStatus === "wait"
												? "Aguard. rev."
												: "Concluído"}
									</Button>
								</td>
								{(obj.allStatus === "pending" ||
									obj.allStatus === "wait" ||
									obj.allStatus === "approved") && (
										<div>
											{idArray.includes(obj.id) ? (
												<Row
													className='position-absolute'
													style={{
														left: "0",
														bottom: "0",
														width: "100%",
													}}>
													{/* {!obj.allStatus === "wait" && (
													<>
														<TableRowDocument
															obj={obj}
															handleShowImageModal={
																handleShowImageModal
															}
														/>
														<GenerateLinkBtn
															onClick={() =>
																handleShowLinkModal(
																	obj
																)
															}
															obj={obj}
														/>
													</>
												)} */}

													{/* {obj.allStatus === "wait" ? (
													<GenerateLinkBtn
														onClick={() =>
															handleShowLinkModal(
																obj
															)
														}
														obj={obj}
														md={12}
													/>
												) : ( */}
													<>
														<TableRowDocument
															obj={obj}
															handleShowImageModal={
																handleShowImageModal
															}
														/>
														<GenerateLinkBtn
															onClick={() =>
																handleShowLinkModal(
																	obj
																)
															}
															obj={obj}
															md={12}
														/>
													</>
													{/* )} */}

													<Row>
														<Col
															className='d-flex justify-content-center mt-2 ms-4'
															style={{
																color: "#C4CCD2",
																fontSize: "12px",
															}}>
															Responsável por esse
															cliente:{adminName.name}
														</Col>
													</Row>
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
				{openImageModal && (
					<ImageUploadModal
						open={openImageModal}
						handleClose={() => setOpenImageModal(false)}
						document={document}
						refresh={refresh}
						setRefresh={setRefresh}
					/>
				)}
				{/* {openAddressModal && (
					<AddressProofModal
						open={openAddressModal}
						handleClose={() => setOpenAddressModal(false)}
						document={addDocument}
						refresh={refresh}
						setRefresh={setRefresh}
					/>
				)} */}
				{openLinkModal && (
					<GenerateLinkNew
						open={openLinkModal}
						handleClose={() => setOpenLinkModal(false)}
						editData={editData}
						refresh={refresh}
						setRefresh={setRefresh}
					/>
				)}
			</Table>
			<Pagination
				className='pagination-bar'
				currentPage={currentPage}
				totalCount={tableData.length}
				pageSize={PageSize}
				onPageChange={(page) => setCurrentPage(page)}
			/>
		</div>
	);
};

export default DocumentTable;
