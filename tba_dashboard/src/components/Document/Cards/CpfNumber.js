import React from "react";
import { Button, Col } from "react-bootstrap";

const CpfNumber = ({ obj }) => {
	return (
		<Col
			md={4}
			style={{
				margin: "1rem 0rem",
			}}>
			<Col
				style={{
					color: "#B5B6B7",
				}}>
				CPF
			</Col>
			<Col className=''>
				<Button className='w-100 p-0' variant='outline-success'>
					<i class='bi bi-check-lg fs-2'></i>
					<h6
						style={{
							color: "#C4CCD2",
							fontSize: "11px",
						}}>
						Já aprovada, visualizar?
					</h6>
				</Button>
			</Col>
		</Col>
	);
};

export default CpfNumber;
