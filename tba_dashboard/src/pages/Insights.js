import React, { useState } from "react";
import Card from "react-bootstrap/Card";
import { Row, Col } from "react-bootstrap";
import Barchart1 from "../components/CHARTS/Barchart1";
import Linechart from "../components/CHARTS/Linechart";
import Linechart1 from "../components/CHARTS/Linechart1";
import Barchart from "../components/CHARTS/Barchart";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import InputGroup from "react-bootstrap/InputGroup";
import Button from "react-bootstrap/Button";
import Table from "react-bootstrap/Table";
import Container from "react-bootstrap/Container";
import NavbarCom from "../components/NavbarCom";
import Sidebar from "../components/Sidebar";
import AfterAuth from "../HOC/AfterAuth";

const Insights = () => {
	const TABLE = () => {
		return (
			<Table
				className='p-3 table-fit text-wrap tbl-color-text'
				responsive>
				<thead>
					<tr className=''>
						<th className='tbl-head-color  '>Nome </th>
						<th className='tbl-head-color '>CPF/CNPJ</th>
						<th className='tbl-head-color '>Email/Telefone </th>
						<th className='tbl-head-color '>Data</th>
						<th className='tbl-head-color text-center '>Hora </th>
						<th className='tbl-head-color text-center '>Status </th>
					</tr>
				</thead>
				<tbody>
					<tr className='small'>
						<td className='fw-bold  '>Ana Júlia Garcia</td>
						<td>000.000.000-00</td>
						<td>anajulia@vanceh.com </td>
						<td>13 dez 2022</td>
						<td className='text-center'>13:04 </td>
						<td className='text-end'>
							<Button
								variant='warning'
								size='sm'
								className='text-white border-0 px-3'>
								Pendente
							</Button>
						</td>
					</tr>
					<tr className='small'>
						<td className='fw-bold  '>Ana Júlia Garcia</td>
						<td>000.000.000-00</td>
						<td>anajulia@vanceh.com </td>
						<td>13 dez 2022</td>
						<td className='text-center'>13:04 </td>
						<td className='text-end'>
							<Button
								variant='warning'
								size='sm'
								className='text-white border-0 px-3'>
								Pendente
							</Button>
						</td>
					</tr>
					<tr className='small'>
						<td className='fw-bold  '>Ana Júlia Garcia</td>
						<td>000.000.000-00</td>
						<td>anajulia@vanceh.com </td>
						<td>13 dez 2022</td>
						<td className='text-center'>13:04 </td>
						<td className='text-end'>
							<Button
								variant='warning'
								size='sm'
								className='text-white border-0 px-3'>
								Pendente
							</Button>
						</td>
					</tr>
					<tr className='small'>
						<td className='fw-bold  '>Ana Júlia Garcia</td>
						<td>000.000.000-00</td>
						<td>anajulia@vanceh.com </td>
						<td>13 dez 2022</td>
						<td className='text-center'>13:04 </td>
						<td className='text-end'>
							<Button
								variant='warning'
								size='sm'
								className='text-white border-0 px-3'>
								Pendente
							</Button>
						</td>
					</tr>
				</tbody>
			</Table>
		);
	};
	const [active, setActive] = useState({
		month: true,
		year: false,
		week: false,
	});
	const handleToggle = (status) => {
		if (status === "month") {
			setActive({
				month: true,
				year: false,
				week: false,
			});
		} else if (status === "yearly") {
			setActive({
				month: false,
				year: true,
				week: false,
			});
		} else {
			setActive({
				month: false,
				year: false,
				week: true,
			});
		}
	};

	return (
		<>
			<AfterAuth>
				<h2 className='mt-3 mx-5'>Insigths</h2>
				<Card
					className='p-4 m-5 my-3'
					style={{ backgroundColor: "#FBFBFB" }}>
					<Row>
						<Navbar expand='lg'>
							<Container fluid>
								<Navbar.Brand className='fw-bolder' href='#'>
									<p className='fw-bolder'>Visitas ao site</p>
									<p className=' fs-color'>11 dez - 17 dez</p>
								</Navbar.Brand>
								<Navbar.Toggle aria-controls='navbarScroll' />
								<Navbar.Collapse id='navbarScroll'>
									{/* searchbar */}
									<Nav
										className='me-auto my-2 my-lg-0'
										style={{ maxHeight: "100px" }}
										navbarScroll>
										<InputGroup></InputGroup>
									</Nav>

									<Button
										className={`fs-color  mx-1 border-0 ${
											active.year
												? "activeBtnTable"
												: "inActiveBtnTable"
										}`}
										onClick={(e) => handleToggle("yearly")}>
										Ano
									</Button>
									<Button
										className={`fs-color  mx-1 border-0 ${
											active.month
												? "activeBtnTable"
												: "inActiveBtnTable"
										}`}
										onClick={(e) => handleToggle("month")}>
										Mês
									</Button>
									<Button
										className={`fs-color  mx-1 border-0 ${
											active.week
												? "activeBtnTable"
												: "inActiveBtnTable"
										}`}
										onClick={(e) => handleToggle("weekly")}>
										Semana
									</Button>
									<div className='vr' />
									<Button
										className='fs-color btnn m-1 '
										variant='light '>
										<i className='bi bi-calendar-fill fs-color'></i>
									</Button>
								</Navbar.Collapse>
							</Container>
						</Navbar>
					</Row>
					{/* charts */}
					<Row className='my-3'>
						{/* first card */}
						<Col md={6}>
							<Card>
								<Row className='p-3'>
									<Col
										xs={12}
										sm={12}
										md={6}
										className='text-center'>
										<Row className='pt-3'>
											<Col md={5} className=''>
												<img
													src='/assets/img/eye.png'
													style={{
														height: "5rem",
														width: "5rem",
													}}
												/>
											</Col>
											<Col
												md={7}
												className='d-flex justify-content-center'>
												<h6
													className='fs-color  mb-0'
													style={{
														fontSize: "12px",
													}}>
													Total de visitas
													<p className='fs-color-fill px-0'>
														149
													</p>
												</h6>
											</Col>
										</Row>
									</Col>
									{/* linechart left */}
									<Col
										xs={12}
										sm={12}
										md={6}
										className=' justify-content-center align-items-center '>
										<Linechart />
									</Col>
								</Row>
							</Card>
						</Col>
						{/* second card */}
						<Col md={6}>
							{/* barchart right */}
							<Card className='p-3'>
								<Barchart1 />
							</Card>
						</Col>
					</Row>
					<Row className='my-3'>
						{/* third card */}
						<Col md={6}>
							<Card>
								<Row className='p-3'>
									<Col
										xs={12}
										sm={12}
										md={6}
										className='text-center'>
										<Row className='pt-3'>
											<Col md={5} className=''>
												<img
													src='/assets/img/file.png'
													style={{
														height: "5rem",
														width: "5rem",
													}}
												/>
											</Col>
											<Col
												md={7}
												className='d-flex justify-content-center'>
												<h6
													className='fs-color  mb-0'
													style={{
														fontSize: "12px",
													}}>
													Total de contatos
													<p className='fs-color-fill px-0'>
														17
													</p>
												</h6>
											</Col>
										</Row>
									</Col>
									{/* linechart left */}
									<Col
										xs={12}
										sm={12}
										md={6}
										className='justify-content-center align-items-center   '>
										<Linechart1 />
									</Col>
								</Row>
							</Card>
						</Col>
						{/* fourth card */}
						<Col md={6}>
							{/* barchart right */}
							<Card className='p-3'>
								<Barchart />
							</Card>
						</Col>
					</Row>
					{/* tabels */}
					<TABLE />
					<div className='text-end mx-2'>
						<Button
							className='px-5 py-2'
							style={{
								backgroundColor: "#C4CCD2",
								border: "none",
							}}>
							Ver tudo
						</Button>
					</div>
				</Card>
			</AfterAuth>
		</>
	);
};

export default Insights;
