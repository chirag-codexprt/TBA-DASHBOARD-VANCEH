import React from "react";
import { Button, Col } from "react-bootstrap";
import Dropzone from "react-dropzone";

const CnpjNumber = ({ data, images, handleFileChange }) => {
	return (
		<>
			<Col md={4} xs={12}>
				<h6 style={{ color: "#B5B6B7" }}>CNPJ</h6>
				<Button className='w-100 p-0 CardBtn' variant='outline-success'>
					<i className='bi bi-check-lg fs-1 right-icon'></i>
					<h6
						style={{
							color: "#C4CCD2",
							fontSize: "11px",
						}}>
						Já aprovada, visualizar?
					</h6>
				</Button>
			</Col>
		</>
	);
};

export default CnpjNumber;
