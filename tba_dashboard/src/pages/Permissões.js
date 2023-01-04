import React, { useState } from "react";
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
	const [show, setShow] = useState(false);

	const handleClose = () => setShow(false);
	const handleShow = () => setShow(true);

	const MODAL = () => {
		return (
			<>
				<Modal size='sm' show={show} onHide={handleClose}>
					<h6 className='m-0 d-flex justify-content-end'>
						<Button
							onClick={handleClose}
							className='bg-white mx-3 border-0 text-dark p-0 px-2'>
							x
						</Button>
					</h6>
					<Row className='px-3'>
						<Col md={4}>
							<img src='/assets/img/madam.png'></img>
						</Col>
						<Col>
							<label
								className='mt-2'
								style={{ fontSize: "14px" }}>
								Autorizar Ana Júlia Garcia a ter acesso aos
								Insights da empresa?
							</label>
						</Col>
					</Row>
					<Row className='px-3 mb-3'>
						<Col md={12} className='d-flex justify-content-center'>
							<hr className='w-25' />
						</Col>
						<Col>
							<Button
								variant='danger'
								className='w-100 px-0 fw-bold'
								style={{ fontSize: "14px" }}>
								<img
									style={{ marginTop: "-5px" }}
									src='/assets/img/X.png'></img>{" "}
								Não autorizar
							</Button>
						</Col>
						<Col>
							<Button
								variant='success'
								className='w-100 px-0 fw-bold'
								style={{ fontSize: "14px" }}>
								<img src='/assets/img/Right.png'></img>{" "}
								Autorizar
							</Button>
						</Col>
					</Row>
				</Modal>
			</>
		);
	};

	const TABLE = () => {
		return (
			<Table
				className='p-3 table-fit text-wrap tbl-color-text'
				responsive>
				<thead>
					<tr>
						<th className='tbl-head-color'>Nome </th>
						<th className='tbl-head-color'>Email </th>
						<th className='tbl-head-color'>Função </th>
						<th className='tbl-head-color'>Insights</th>
						<th className='tbl-head-color'>Contatos pendentes </th>
						<th className='tbl-head-color'>
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
								variant=' success'
								size='lg'
								className='p-0 fw-bolder text-success  border-0'
								onClick={handleShow}>
								<i className='bi bi-check'></i>Autorizar
							</Button>
						</td>

						<td>
							<Button
								variant='danger'
								size='lg'
								className='p-0 fw-bolder text-danger button-red'>
								<i className='bi bi-x'></i>Remover
							</Button>
						</td>
						<td>
							<Button
								variant=' success'
								size='lg'
								className='p-0 button-green  fw-bolder text-success  border-0 '>
								<i className='bi bi-check'></i>Autorizar
							</Button>
						</td>
					</tr>
				</tbody>
			</Table>
		);
	};

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
							<TABLE />
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
					<MODAL />
				</Card>
			</AfterAuth>
		</>
	);
};

export default Permissões;
