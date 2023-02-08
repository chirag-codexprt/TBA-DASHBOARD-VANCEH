import React from "react";
import { Col, Row } from "react-bootstrap";

const ModalCardRow = ({ handleClose, editData }) => {
	return (
		<div>
			<Row className='p-3 px-4'>
				<Col md={10} xs={9}>
					<h5 className='fw-bolder'>
						Link para solicitação de documentos
					</h5>
				</Col>
				<Col className='text-end'>
					<img
						style={{ cursor: "pointer" }}
						onClick={handleClose}
						src='assets/img/close.png'></img>
				</Col>
			</Row>
			<Row className='px-4'>
				<Col md={12}>
					<h6>Documentos já enviados e aprovados</h6>
				</Col>
				{editData?.CNPJDOC?.approved && (
					<Col md={4}>
						<img src='assets/img/right1.png'></img>
						<span className='ps-2' style={{ fontWeight: "500" }}>
							CNPJ
						</span>
					</Col>
				)}
				{editData?.CPFDOC?.approved && (
					<Col md={4}>
						<img src='assets/img/right1.png'></img>
						<span className='ps-2' style={{ fontWeight: "500" }}>
							CPF dos sócios
						</span>
					</Col>
				)}
				{editData?.socialContract?.approved && (
					<Col md={4}>
						<img src='assets/img/right1.png'></img>
						<span className='ps-2' style={{ fontWeight: "500" }}>
							Contrato social
						</span>
					</Col>
				)}
				{editData?.balanceIncome?.approved && (
					<Col md={4}>
						<img src='assets/img/right1.png'></img>
						<span className='ps-2' style={{ fontWeight: "500" }}>
							Balanço / DRE 2021, 2022( assinado contador e
							cliente)
						</span>
					</Col>
				)}
				{editData?.balanceSheet?.approved && (
					<Col md={4}>
						<img src='assets/img/right1.png'></img>
						<span className='ps-2' style={{ fontWeight: "500" }}>
							Balancete 2021, 2022 (assinado contador e cliente)
						</span>
					</Col>
				)}
				{editData?.partnerIncome?.approved && (
					<Col md={4}>
						<img src='assets/img/right1.png'></img>
						<span className='ps-2' style={{ fontWeight: "500" }}>
							IR dos sócios
						</span>
					</Col>
				)}
				{editData?.billingCustomer?.approved && (
					<Col md={4}>
						<img src='assets/img/right1.png'></img>
						<span className='ps-2' style={{ fontWeight: "500" }}>
							Faturamento 2020,2021 e 2022 (assinado contador e
							cliente)
						</span>
					</Col>
				)}
				{/* {editData?.billingCustomer?.approved && (
					<Col md={4}>
						<img src='assets/img/right1.png'></img>
						<span className='ps-2' style={{ fontWeight: "500" }}>
						Faturamento 2020,2021 e 2022 (assinado contador e cliente)
						</span>
					</Col>
				)} */}
				{editData?.partnerDocument?.approved && (
					<Col md={4}>
						<img src='assets/img/right1.png'></img>
						<span className='ps-2' style={{ fontWeight: "500" }}>
							Documentos Sócios (CNH ou RG){" "}
						</span>
					</Col>
				)}
				{editData?.updatedBankDebt?.approved && (
					<Col md={4}>
						<img src='assets/img/right1.png'></img>
						<span className='ps-2' style={{ fontWeight: "500" }}>
							Endividamento bancário atualizado
						</span>
					</Col>
				)}
				{editData?.addressProof?.approved && (
					<Col md={4}>
						<img src='assets/img/right1.png'></img>
						<span className='ps-2' style={{ fontWeight: "500" }}>
							Comprovante de endereço dos sócios
						</span>
					</Col>
				)}
				{editData?.spouseDocument?.approved && (
					<Col md={4}>
						<img src='assets/img/right1.png'></img>
						<span className='ps-2' style={{ fontWeight: "500" }}>
							Documentos do cônjuge
						</span>
					</Col>
				)}
				{editData?.extractBusiestBank?.approved && (
					<Col md={4}>
						<img src='assets/img/right1.png'></img>
						<span className='ps-2' style={{ fontWeight: "500" }}>
							Extrato dos últimos 30 dias do banco que mais
							movimenta
						</span>
					</Col>
				)}
				{editData?.companyPhotos?.approved && (
					<Col md={4}>
						<img src='assets/img/right1.png'></img>
						<span className='ps-2' style={{ fontWeight: "500" }}>
							Fotos da empresa
						</span>
					</Col>
				)}
				{editData?.abcCurve?.approved && (
					<Col md={4}>
						<img src='assets/img/right1.png'></img>
						<span className='ps-2' style={{ fontWeight: "500" }}>
							Curva ABC
						</span>
					</Col>
				)}
			</Row>
		</div>
	);
};

export default ModalCardRow;
