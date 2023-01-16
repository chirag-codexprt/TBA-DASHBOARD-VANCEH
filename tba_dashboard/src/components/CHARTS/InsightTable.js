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
						<th className='tbl-head-color '>Nome </th>
						<th className='tbl-head-color '>CPF/CNPJ</th>
						<th className='tbl-head-color '>Email/Telefone </th>
						<th className='tbl-head-color '>Data</th>
						<th className='tbl-head-color text-center '>Hora </th>
						<th className='tbl-head-color text-end'>Status </th>
					</tr>
				</thead>
				<tbody>
					{tableRow.slice(0, 4).map((obj, i) => (
						<tr className='14px'>
							<td className='fw-bold  '>{obj?.name}</td>
							<td>{obj?.CpfOrCnpj}</td>
							<td>{obj?.email ? obj?.email : obj?.phone} </td>
							<td>{obj?.date}</td>
							<td className='text-center'>{obj?.time} </td>
							<td className='text-end position-relative'>
								<Button
									className="p-0 text-white fw-bold"
									style={{ width: "100px", fontSize: '12px' }}
									variant={
										obj.status === "pending"
											? "warning"
											: "success"
									}>
									{obj.status === "pending"
										? "Pendente"
										: "respondidas"}
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