import React, { useEffect, useState } from "react";
import Card from "react-bootstrap/Card";
import { Row, Col } from "react-bootstrap";
import InputGroup from "react-bootstrap/InputGroup";
import Button from "react-bootstrap/Button";
import Table from "react-bootstrap/Table";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Pagination from "react-bootstrap/Pagination";
import Modal from "react-bootstrap/Modal";
import Sidebar from "../components/Sidebar";
import NavbarCom from "../components/NavbarCom";
import AfterAuth from "../HOC/AfterAuth";
import TableNavbar from "../components/TableNavbar";
import PermissonTable from "../components/Permisson/PermissonTable";
import { permissonTable } from "../helper/API/Permisson";

const Permissões = () => {
	let active = 2;
	let items = [];
	for (let number = 1; number <= 3; number++) {
		items.push(
			<Pagination.Item
				key={number}
				style={{ color: "red" }}
				active={number === active}>
				{number}
			</Pagination.Item>
		);
	}

	const [tableRow, setTableRow] = useState([])


	useEffect(() => {
		const submitData = {
			search: '',
		}
		permissonTable(submitData).then((res) => {
			// console.log('res', res)
			if (res.success) {
				setTableRow(res.data.adminList)
			}
			else (
				setTableRow([])
			)
		})
	}, [])
	console.log('table', tableRow)



	return (
		<>
			<AfterAuth>
				<h2 className='mt-3 ms-5'>Permissões</h2>
				<Card className='p-3 m-5 my-3'>
					<Row>
						<Col className='m-2'>
							{/* <NAVBAR /> */}
							<TableNavbar
								title={"Permissões"}
								btn1Text='Pendentes'
								btn2Text='Respondidas'
								btn3Text='Todas'
							/>
						</Col>
						{/* table */}
						<Col md={12} className='m-2'>
							<PermissonTable tableRow={tableRow} />
						</Col>
						{/* pagination */}
						<Col
							className='d-flex justify-content-center me-auto m-2'
							md={12}>
							<Pagination>
								<Pagination.Prev />
								{items}
								{/* <Pagination.Ellipsis /> */}
								<Pagination.Next />
							</Pagination>
						</Col>
					</Row>
				</Card>
			</AfterAuth>
		</>
	);
};

export default Permissões;
