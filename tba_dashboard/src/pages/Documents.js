import React, { useState, useEffect } from "react";
import { Card, Row, Col } from "react-bootstrap";
import AfterAuth from "../HOC/AfterAuth";
import TableNavbar from "../components/TableNavbar";
import DocumentTable from "../components/Document/DocumentTable";
import { getDocumentList } from "../helper/API/document";
import Loader from "../components/Loader";

const Documents = () => {
	const [tableRow, setTableRow] = useState([]);
	const [refresh, setRefresh] = useState(0);
	const [loading, setLoading] = useState(false);

	useEffect(() => {
		setLoading(true);
		const submitData = {
			search: "",
		};
		getDocumentList(submitData).then((res) => {
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
					{loading ? (
						<Loader />
					) : (
						<DocumentTable
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

export default Documents;
