import React from "react";
import { Button, Col } from "react-bootstrap";
import Dropzone from "react-dropzone";

const SocialContract = ({ data, images, handleFileChange }) => {
	return (
		<>
			<Col md={4} xs={12}>
				<Dropzone
					onDrop={(acceptedFiles, rejected, e) => {
						handleFileChange(acceptedFiles, rejected, e);
					}}>
					{({ getRootProps, getInputProps }) => (
						<section className='wfp--dropzone'>
							<div
								{...getRootProps({
									className: "wfp--dropzone__input",
								})}>
								<input
									{...getInputProps()}
									accept={".pdf"}
									name='socialContract'
									type='file'
								/>
								<h6 style={{ color: "#B5B6B7" }}>
									Contrato social
								</h6>
								{images?.socialContract ? (
									<Button
										className='w-100 p-0 CardBtn'
										variant='outline-warning'>
										<i className='bi bi-clock-fill fs-1 pending-icon'></i>
										<h6
											style={{
												color: "#C4CCD2",
												fontSize: "11px",
											}}>
											Arraste e solte aqui ou importe dos
											seus arquivos
										</h6>
									</Button>
								) : (
									<Button
										className='w-100 p-0 CardBtn'
										variant='outline-secondary'>
										<label style={{ rotate: "45deg" }}>
											<i className='bi bi-paperclip fs-1 link-icon'></i>
										</label>
										<h6
											style={{
												color: "#C4CCD2",
												fontSize: "11px",
											}}>
											Arraste e solte aqui ou importe dos
											seus arquivos
										</h6>
									</Button>
								)}
							</div>
						</section>
					)}
				</Dropzone>
			</Col>
		</>
	);
};

export default SocialContract;
