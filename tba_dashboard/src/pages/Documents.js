import React, { useState, useEffect } from "react";
import { Card, Row, Col, Button } from "react-bootstrap";
import AfterAuth from "../HOC/AfterAuth";
import TableNavbar from "../components/TableNavbar";
import DocumentTable from "../components/Document/DocumentTable";
import { getDocumentList } from "../helper/API/document";
import Loader from "../components/Loader";
import { documentTableData } from "../recoil/Atoms";
import { useRecoilState } from "recoil";

const Documents = () => {
	const [tableRow, setTableRow] = useState([]);
	const [refresh, setRefresh] = useState(0);
	const [loading, setLoading] = useState(false);
	const [table, setTable] = useRecoilState(documentTableData);
	const [active, setActive] = useState({
		pending: false,
		approved: false,
		all: true,
	});
	const [search, setSearch] = useState();
	// console.log('search', search)

	useEffect(() => {
		setLoading(true);
		const submitData = {
			search,
		};
		getDocumentList(submitData).then((res) => {
			console.log("res contact :: ", res);
			if (res.success) {
				setTable(res.data);
				setTableRow(res.data);
				setLoading(false);
			} else {
				setTableRow([]);
				setLoading(false);
			}
		});
	}, [refresh]);

	const onEnter = (e) => {
		if (e.key === "Enter") {
			console.log("clicked enter");
			setLoading(true);
			const submitData = {
				search,
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
		}
	};

	const handleToggle = (status) => {
		if (status === "Pending") {
			setActive({
				pending: true,
				approved: false,
				all: false,
			});

			const newData = table.filter((obj) => {
				if (obj.allStatus === "pending") {
					return obj;
				}
			});
			setTableRow(newData);
		} else if (status === "Approved") {
			setActive({
				pending: false,
				approved: true,
				all: false,
			});
			const newData = table.filter((obj) => {
				if (obj.allStatus === "approved") {
					return obj;
				}
			});
			setTableRow(newData);
		} else {
			setActive({
				pending: false,
				approved: false,
				all: true,
			});
			setTableRow(table);
		}
	};
	console.log("tableRow", tableRow);
	return (
		<>
			<AfterAuth>
				<h2 className='mt-3 ms-5'>Documentos</h2>
				<Card className='m-5 my-3 p-3 px-4'>
					<div style={{ paddingRight: '2%' }} >
						<TableNavbar
							title={"Documentos"}
							btn1Text='Concluídos'
							btn2Text='Pendentes'
							btn3Text='Todas'
							setSearch={setSearch}
							onEnter={onEnter}
							refresh={refresh}
							setRefresh={setRefresh}
							search={search}>
							<Button
								className={`fs-color  mx-1 border-0 ${active.approved
									? "activeBtnTable"
									: "inActiveBtnTable"
									}`}
								onClick={(e) => handleToggle("Approved")}>
								Concluídos
							</Button>
							<Button
								className={`fs-color  mx-1 border-0 ${active.pending
									? "activeBtnTable"
									: "inActiveBtnTable"
									}`}
								onClick={(e) => handleToggle("Pending")}>
								Pendentes
							</Button>
							<Button
								className={`fs-color px-4 mx-1 border-0 ${active.all
									? "activeBtnTable"
									: "inActiveBtnTable"
									}`}
								onClick={(e) => handleToggle("All")}>
								Todas
							</Button>
						</TableNavbar>
					</div>
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
