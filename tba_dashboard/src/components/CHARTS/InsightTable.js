import React from "react";
import { Button, Table } from "react-bootstrap";

const InsightTable = ({ tableRow, refresh, setRefresh }) => {
	console.log("tableRow insight table", tableRow.slice(0, 4));
	return (
		<div>
			<Table
				className='p-3 table-fit text-wrap tbl-color-text'
				responsive>
				<thead>
					<tr className='12px'>
						<th className='tbl-head-color' width={"25%"}>
							Nome{" "}
						</th>
						<th className='tbl-head-color '>CPF</th>
						<th className='tbl-head-color '>CNPJ</th>
						<th className='tbl-head-color '>Telefone </th>
						<th className='tbl-head-color '>Data</th>
						<th className='tbl-head-color text-center '>Hora </th>
						<th className='tbl-head-color ps-3'>Status </th>
					</tr>
				</thead>
				<tbody>
					{tableRow.slice(0, 4).map((obj, i) => (
						<tr style={{ fontSize: "14px" }}>
							<td className='fw-bold  '>{obj?.name}</td>
							<td>{obj?.CPF}</td>
							<td>{obj?.CNPJ}</td>
							<td>{obj?.phone} </td>
							<td>{obj?.date}</td>
							<td className='text-center'>{obj?.time} </td>
							<td className='text-end position-relative'>
								<Button
									className='p-0 text-white fw-normal'
									style={{
										width: "100px",
										fontSize: "12px",
										borderRadius: "3px",
									}}
									// variant={
									// 	obj.status === "pending"
									// 		? "warning"
									// 		: "success"
									// }
									variant={
										obj.contactApprove === "pending"
											? "warning"
											: obj.contactApprove === "rejected"
											? "danger"
											: "success"
									}>
									{/* {obj.status === "pending"
										? "Pendente"
										: "respondidas"} */}
									{obj.contactApprove === "pending"
										? "Pendente"
										: obj.contactApprove === "rejected"
										? "Reprovado"
										: "Respondido"}
								</Button>
							</td>
						</tr>
					))}
				</tbody>
			</Table>
		</div>
	);
};

export default InsightTable;
