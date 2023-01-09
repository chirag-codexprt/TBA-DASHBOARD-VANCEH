import React, { useEffect, useState } from "react";
import { Card } from "react-bootstrap";
import AfterAuth from "../HOC/AfterAuth";
import TableNavbar from "../components/TableNavbar";
import ContactTable from "../components/Contact/ContactTable";
import { getContactList } from "../helper/API/contact";
import Loader from "../components/Loader";

const Contact = () => {
	const [tableRow, setTableRow] = useState([]);
	const [refresh, setRefresh] = useState(0);
	const [loading, setLoading] = useState(false);

	const [search, setSearch] = useState()
	console.log('search', search)

	useEffect(() => {
		setLoading(true);
		const submitData = {
			search
		};
		getContactList(submitData).then((res) => {
			console.log("res contact :: ", res);
			if (res.success) {
				setTableRow(res.data);
				setLoading(false);
			} else {
				setTableRow([]);
				setLoading(false);
			}
		});
	}, [refresh]);
	console.log("tableRow", tableRow);

	const onEnter = (e) => {
		if (e.key === 'Enter') {
			console.log('clicked enter')

			setLoading(true);
			const submitData = {
				search

			};
			getContactList(submitData).then((res) => {
				console.log("res contact :: ", res);
				if (res.success) {
					setTableRow(res.data);
					setLoading(false);
				} else {
					setTableRow([]);
					setLoading(false);
				}
			});
		}

	}

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
						setSearch={setSearch}
						onEnter={onEnter}
						refresh={refresh}
						setRefresh={setRefresh}
						search={search}
					/>

					{loading ? (
						<Loader />
					) : (
						<ContactTable
							tableRow={tableRow}
							refresh={refresh}
							setRefresh={setRefresh}
						/>
					)}
				</Card>
			</AfterAuth>
		</>
	);
};

export default Contact;
