import React, { useEffect, useState } from "react";
import { Card } from "react-bootstrap";

import Pagination from "react-bootstrap/Pagination";
import AfterAuth from "../HOC/AfterAuth";
import TableNavbar from "../components/TableNavbar";
import ContactTable from "../components/Contact/ContactTable";
import { getContactList } from "../helper/API/contact";

const Contact = () => {
	const [tableRow, setTableRow] = useState([]);
	const [refresh, setRefresh] = useState(0);
	const [loading, setLoading] = useState(false);

	useEffect(() => {
		setLoading(true);
		const submitData = {
			search: "",
		};
		getContactList(submitData).then((res) => {
			console.log("res contact :: ", res);
			if (res.success) {
				// setTableRow(res.data.adminList);
				setLoading(false);
			} else {
				setTableRow([]);
				setLoading(false);
			}
		});
	}, [refresh]);

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
				</Card>
			</AfterAuth>
		</>
	);
};

export default Contact;
