import React from "react";
import { Button, Form, InputGroup, Nav, Navbar } from "react-bootstrap";

const TableNavbar = ({ title, btn1Text, btn2Text, btn3Text }) => {
	return (
		<div>
			<Navbar className='my-2' expand='lg'>
				<Navbar.Brand className='fw-bolder' href='#'>
					{title}
				</Navbar.Brand>
				<Navbar.Toggle aria-controls='navbarScroll' />
				<Navbar.Collapse id='navbarScroll'>
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
					<Button className='fs-color btnn mx-1 border-0 bg-white'>
						{btn1Text}
					</Button>
					<Button className='fs-color btnn mx-1 border-0 bg-white'>
						{btn2Text}
					</Button>
					<Button
						className='fs-color mx-1 border-0 fw-bold text-white'
						style={{ background: "#85A6A2" }}>
						{btn3Text}
					</Button>
				</Navbar.Collapse>
			</Navbar>
		</div>
	);
};

export default TableNavbar;
