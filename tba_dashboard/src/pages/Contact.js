import React, { useState } from "react";
import { Col, Row, Card } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { InputGroup } from "react-bootstrap";
import Table from "react-bootstrap/Table";
import Pagination from "react-bootstrap/Pagination";
import Modal from "react-bootstrap/Modal";
import NavbarCom from "../components/NavbarCom";
import Sidebar from "../components/Sidebar";
import AfterAuth from "../HOC/AfterAuth";
import TableNavbar from "../components/TableNavbar";
import ContactTable from "../components/Contact/ContactTable";

const Contact = () => {
	const [show, setShow] = useState(false);

	const handleClose = () => setShow(false);
	const handleShow = () => setShow(true);

	let all = [
		{
			state: true,
			class: "toggle",
			name: "",
			code: "",
			email: "",
			Date: "",
			time: "",
		},
		{
			state: false,
			class: "",
			name: "",
			code: "",
			email: "",
			Date: "",
			time: "",
		},
		{
			state: false,
			class: "",
			name: "",
			code: "",
			email: "",
			Date: "",
			time: "",
		},
		{
			state: false,
			class: "",
			name: "",
			code: "",
			email: "",
			Date: "",
			time: "",
		},
		{
			state: false,
			class: "",
			name: "",
			code: "",
			email: "",
			Date: "",
			time: "",
		},
		{
			state: false,
			class: "",
			name: "",
			code: "",
			email: "",
			Date: "",
			time: "",
		},
	];
	const [rowdata, setRowData] = useState(all);
	const [panding, setPanding] = useState(false);
	const [responce, setResponce] = useState(false);
	console.log(rowdata);
	const filter = (states) => {
		if (states == false) {
			let temp = [];
			rowdata.map((val) => {
				if (val.state == false) {
					temp.push(val);
				}
			});
			// setRowData(temp)
			setResponce(true);
			setPanding(false);
			setM(!m);
		} else if (states == true) {
			let temp = [];
			rowdata.map((val) => {
				if (val.state == true) {
					temp.push(val);
				}
			});
			// setRowData(temp)
			setPanding(true);
			setResponce(false);
			setM(!m);
		} else {
			setPanding(false);
			setResponce(false);
			setM(!m);
		}
	};

	const [m, setM] = useState(true);
	function openRow(i) {
		let temp = rowdata;
		temp[i].state = true;
		temp[i].class = "toggle";
		setRowData(temp);
		setM(!m);
	}
	function closeRow(i) {
		let temp = rowdata;
		temp[i].state = false;
		temp[i].class = "";
		setRowData(temp);
		setM(!m);
	}

	const NAVBAR = () => {
		return (
			<Navbar className='my-2' expand='lg'>
				<Navbar.Brand className='fw-bolder' href='#'>
					Contatos
				</Navbar.Brand>
				<Navbar.Toggle aria-controls='navbarScroll' />
				<Navbar.Collapse id='navbarScroll'>
					{/* searchbar */}
					<Nav
						className='me-auto my-2 my-lg-0'
						style={{ maxHeight: "100px" }}
						navbarScroll>
						<InputGroup className='rounded-2'>
							<InputGroup.Text
								id='basic-addon1'
								className='border-0'
								style={{ background: "#F4F4F4" }}>
								<i className='bi bi-search'></i>
							</InputGroup.Text>
							<Form.Control
								type='Search'
								placeholder='Procurar....'
								aria-label='Search'
								aria-describedby='basic-addon1'
								className='border-0'
							/>
						</InputGroup>
					</Nav>
					{/* button */}
					{!responce && panding && (
						<>
							<Button
								className='fs-color mx-1 text-white fw-bold border-0'
								style={{ background: "#85A6A2" }}
								onClick={() => filter(true)}>
								Pendentes
							</Button>
							<Button
								className='fs-color mx-1 border-0 bg-white'
								onClick={() => filter(false)}>
								Respondidas
							</Button>
							<Button
								className='fs-color mx-1 border-0 bg-white'
								onClick={() => filter(null)}>
								Todas
							</Button>
						</>
					)}
					{!responce && !panding && (
						<>
							<Button
								className='fs-color mx-1 border-0 bg-white'
								onClick={() => filter(true)}>
								Pendentes
							</Button>
							<Button
								className='fs-color mx-1 border-0 bg-white'
								onClick={() => filter(false)}>
								Respondidas
							</Button>
							<Button
								className='fs-color mx-1 text-white fw-bold border-0'
								style={{ background: "#85A6A2" }}
								onClick={() => filter(null)}>
								Todas
							</Button>
						</>
					)}
					{responce && !panding && (
						<>
							<Button
								className='fs-color mx-1 border-0 bg-white'
								onClick={() => filter(true)}>
								Pendentes
							</Button>
							<Button
								className='fs-color mx-1 text-white fw-bold border-0'
								style={{ background: "#85A6A2" }}
								onClick={() => filter(false)}>
								Respondidas
							</Button>
							<Button
								className='fs-color mx-1 border-0 bg-white'
								onClick={() => filter(null)}>
								Todas
							</Button>
						</>
					)}
				</Navbar.Collapse>
			</Navbar>
		);
	};

	return (
		<>
			<AfterAuth>
				<h2 className='mt-3 ms-5'>Contatos</h2>
				<Card className='m-5 my-3 p-3 px-4'>
					{/* <NAVBAR /> */}
					<TableNavbar
						title={"Contatos"}
						btn1Text='Pendentes'
						btn2Text='Respondidas'
						btn3Text='Todas'
					/>
					<ContactTable />
					<Pagination className='d-flex m-0 justify-content-center'>
						<Pagination.Prev />
						<Pagination.Item>{1}</Pagination.Item>
						<Pagination.Item active>{2}</Pagination.Item>
						<Pagination.Item>{3}</Pagination.Item>
						{/* <Pagination.Ellipsis /> */}
						<Pagination.Next />
					</Pagination>
				</Card>
			</AfterAuth>
		</>
	);
};

export default Contact;
