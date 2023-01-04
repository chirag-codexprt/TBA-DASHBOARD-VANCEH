import React, { useState } from "react";
import { Card, Row, Col } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { InputGroup } from "react-bootstrap";
import Table from "react-bootstrap/Table";
import Modal from "react-bootstrap/Modal";
import NavbarCom from "../components/NavbarCom";
import Sidebar from "../components/Sidebar";
import Figure from "react-bootstrap/Figure";
import AfterAuth from "../HOC/AfterAuth";
import TableNavbar from "../components/TableNavbar";
import DocumentTable from "../components/Document/DocumentTable";

const Documents = () => {
	return (
		<>
			<AfterAuth>
				<h2 className='mt-3 ms-5'>Documentos</h2>
				<Card className='m-5 my-3 p-3 px-4'>
					<TableNavbar
						title={"Documentos"}
						btn1Text='Concluídos'
						btn2Text='Pendentes'
						btn3Text='Todas'
					/>
					<DocumentTable />
				</Card>
			</AfterAuth>
		</>
	);
};

export default Documents;
