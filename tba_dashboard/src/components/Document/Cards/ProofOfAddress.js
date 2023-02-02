import React from "react";
import { Button, Col } from "react-bootstrap";

const ProofOfAddress = ({ obj, handleShowImageModal }) => {
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
				Comprovante de endereço dos sócios
			</Col>
			<Col>
				{obj?.addressProof === null && (
					<Button
						className='w-100 p-0 ms-0'
						onClick={() =>
							handleShowImageModal(obj, "addressProof")
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
				{obj?.addressProof && !obj?.addressProof?.approved && (
					<Button
						className='w-100 p-0 ms-0'
						onClick={() =>
							handleShowImageModal(obj, "addressProof")
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

				{obj?.addressProof && obj?.addressProof?.approved && (
					<Button
						className='w-100 p-0 ms-0'
						onClick={() =>
							handleShowImageModal(obj, "addressProof")
						}
						variant='outline-success'>
						<i class='bi bi-check-lg fs-2'></i>

						<h6
							style={{
								color: "#C4CCD2",
								fontSize: "11px",
							}}>
							Aguardando análise, visualizar?
						</h6>
					</Button>
				)}
			</Col>
		</Col>
	);
};

export default ProofOfAddress;