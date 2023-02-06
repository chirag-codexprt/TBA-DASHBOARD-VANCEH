import React from "react";
import { Button, Col } from "react-bootstrap";
import Dropzone from "react-dropzone";

const BalanceIncome = ({ obj, handleShowImageModal }) => {
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
				Contrato Balanço / DRE 2021, 2022
			</Col>
			<Col>
				{obj?.balanceIncome === null && (
					<Button
						className='w-100 p-0 ms-0'
						onClick={
							obj?.balanceIncome === null
								? null
								: () =>
										handleShowImageModal(
											obj,
											"balanceIncome"
										)
						}
						variant='outline-secondary'>
						<label
							style={{
								rotate: "45deg",
							}}>
							<i class='bi bi-paperclip fs-2'></i>
						</label>
						<h6
							style={{
								color: "#C4CCD2",
								fontSize: "11px",
							}}>
							Arraste e solte aqui ou importe dos seus arquivos
						</h6>
					</Button>
				)}
				{obj?.balanceIncome && !obj?.balanceIncome?.approved && (
					<Button
						className='w-100 p-0 ms-0'
						onClick={
							obj?.balanceIncome === null
								? null
								: () =>
										handleShowImageModal(
											obj,
											"balanceIncome"
										)
						}
						variant='outline-warning'>
						<i class='bi bi-clock-fill fs-2'></i>

						<h6
							style={{
								color: "#C4CCD2",
								fontSize: "11px",
							}}>
							Aguardando análise, visualizar?
						</h6>
					</Button>
				)}

				{obj?.balanceIncome && obj?.balanceIncome?.approved && (
					<Button
						className='w-100 p-0 ms-0'
						onClick={
							obj?.balanceIncome === null
								? null
								: () =>
										handleShowImageModal(
											obj,
											"balanceIncome"
										)
						}
						variant='outline-success'>
						<i class='bi bi-check-lg fs-2'></i>

						<h6
							style={{
								color: "#C4CCD2",
								fontSize: "11px",
							}}>
							Já aprovada, visualizar?
						</h6>
					</Button>
				)}
			</Col>
		</Col>
	);
};

export default BalanceIncome;
