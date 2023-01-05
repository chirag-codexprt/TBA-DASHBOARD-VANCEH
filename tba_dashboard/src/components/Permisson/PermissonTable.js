import React, { useEffect, useRef, useState } from "react";
import Button from "react-bootstrap/Button";

import Table from "react-bootstrap/Table";
import PermissonTooltip from "./PermissonTooltip";

const PermissonTable = ({ tableRow, refresh, setRefresh }) => {
	const [show, setShow] = useState(false);
	const [target, setTarget] = useState(null);
	const [editData, setEditData] = useState(null);
	const [tableData, setTableData] = useState(tableRow);

	const ref = useRef(null);

	useEffect(() => {
		setTableData(tableRow);
	}, [tableRow]);

	const handleClick = (event, val, type, prmsn) => {
		console.log("id", type);
		setShow(!show);
		setTarget(event.target);
		setEditData({
			...val,
			type,
			prmsn,
		});
	};

	const handleClose = () => {
		setShow(false);
	};

	console.log(tableRow);
	return (
		<div>
			<Table
				className='p-3 table-fit text-wrap tbl-color-text'
				responsive>
				<thead>
					<tr>
						<th className='tbl-head-color text-center'>Nome </th>
						<th className='tbl-head-color text-center'>Email </th>
						<th className='tbl-head-color text-center'>Função </th>
						<th className='tbl-head-color text-center'>Contatos</th>
						<th className='tbl-head-color text-center'>
							Documentos
						</th>
						<th className='tbl-head-color text-center'>
							Nova conta{" "}
						</th>
					</tr>
				</thead>
				<tbody>
					{tableData.map((val) => {
						return (
							<tr>
								<td className='fw-bold'>{val.name}</td>
								<td>{val.email}</td>
								<td>{val.designation}</td>
								<td>
									{val.permissions.contact ? (
										<Button
											onClick={(e) =>
												handleClick(
													e,
													val,
													"contact",
													true
												)
											}
											variant=' success'
											size='lg'
											className='p-0 fw-bolder text-success  border-0'>
											<i className='bi bi-check'></i>
											Autorizar
										</Button>
									) : (
										<Button
											onClick={(e) =>
												handleClick(
													e,
													val,
													"contact",
													false
												)
											}
											variant='danger'
											size='lg'
											className='p-0 fw-bolder text-danger button-red'>
											<i className='bi bi-x'></i>Remover
										</Button>
									)}
								</td>

								<td>
									{val.permissions.document ? (
										<Button
											onClick={(e) =>
												handleClick(
													e,
													val,
													"document",
													true
												)
											}
											variant=' success'
											size='lg'
											className='p-0 fw-bolder text-success  border-0'>
											<i className='bi bi-check'></i>
											Autorizar
										</Button>
									) : (
										<Button
											onClick={(e) =>
												handleClick(
													e,
													val,
													"document",
													false
												)
											}
											variant='danger'
											size='lg'
											className='p-0 fw-bolder text-danger button-red'>
											<i className='bi bi-x'></i>Remover
										</Button>
									)}
								</td>
								<td>
									{val.permissions.newAdmin ? (
										<Button
											onClick={(e) =>
												handleClick(
													e,
													val,
													"admin",
													true
												)
											}
											variant=' success'
											size='lg'
											className='p-0 fw-bolder text-success  border-0'>
											<i className='bi bi-check'></i>
											Autorizar
										</Button>
									) : (
										<Button
											onClick={(e) =>
												handleClick(
													e,
													val,
													"admin",
													false
												)
											}
											variant='danger'
											size='lg'
											className='p-0 fw-bolder text-danger button-red'>
											<i className='bi bi-x'></i>Remover
										</Button>
									)}
									<PermissonTooltip
										show={show}
										target={target}
										ref={ref}
										handleClose={handleClose}
										editData={editData}
										refresh={refresh}
										setRefresh={setRefresh}
									/>
								</td>
							</tr>
						);
					})}
				</tbody>
			</Table>
		</div>
	);
};

export default PermissonTable;
