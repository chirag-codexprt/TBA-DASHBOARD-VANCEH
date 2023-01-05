import React, { useRef, useState } from "react";
import Button from "react-bootstrap/Button";

import Table from "react-bootstrap/Table";
import PermissonTooltip from "./PermissonTooltip";

const PermissonTable = () => {

	const [show, setShow] = useState(false);
	const [target, setTarget] = useState(null);
	const ref = useRef(null);

	const handleClick = (event) => {
		setShow(!show);
		setTarget(event.target);
	};

	const handleClose = () => {
		setShow(false)
	}

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
						<th className='tbl-head-color text-center'>Insights</th>
						<th className='tbl-head-color text-center'>Contatos pendentes </th>
						<th className='tbl-head-color text-center'>
							Contatos respondidos{" "}
						</th>
					</tr>
				</thead>
				<tbody>
					<tr>
						<td className='fw-bold'>Ana Júlia Garcia</td>
						<td>anajulia@vanceh.com</td>
						<td>Marketing </td>
						<td>
							<Button
								onClick={handleClick}
								variant=' success'
								size='lg'
								className='p-0 fw-bolder text-success  border-0'
							>
								<i className='bi bi-check'></i>Autorizar
							</Button>
							<PermissonTooltip show={show} target={target} ref={ref} handleClose={handleClose} />
						</td>

						<td>
							<Button
								onClick={handleClick}
								variant='danger'
								size='lg'
								className='p-0 fw-bolder text-danger button-red'>
								<i className='bi bi-x'></i>Remover
							</Button>
						</td>
						<td>
							<Button
								onClick={handleClick}
								variant=' success'
								size='lg'
								className='p-0 button-green  fw-bolder text-success  border-0 '>
								<i className='bi bi-check'></i>Autorizar
							</Button>
						</td>
					</tr>
				</tbody>
			</Table>
		</div>
	);
};

export default PermissonTable;
