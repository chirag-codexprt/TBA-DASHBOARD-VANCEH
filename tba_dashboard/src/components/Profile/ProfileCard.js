import React from "react";
import { Row, Col } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Table from "react-bootstrap/Table";
import InputGroup from "react-bootstrap/InputGroup";
import Form from "react-bootstrap/Form";
import Pagination from "react-bootstrap/Pagination";
import Card from "react-bootstrap/Card";
import { profileAtom } from "../../recoil/Atoms";
import { useRecoilValue } from "recoil";

const ProfileCard = ({
	showProfilePicture,
	showChangePassword,
	showAddAdmin,
}) => {

	const profile = useRecoilValue(profileAtom)
	console.log('profile', profile)

	return (
		<div>
			<Card className='my-3 m-5 p-3 px-4'>
				<Row>
					<Col md={6}>
						<Row>
							{/* image */}
							<Col xs={12} sm={12} md={12} lg={5} className=''>
								<div>
									<img
										src={profile?.profileImage}
										style={{
											height: "150px",
											width: "150px",
											borderRadius: '10px',
										}}
										className='position-relative'
									/>
									<div>
										<Button
											onClick={showProfilePicture}
											style={{
												position: "absolute",
												backgroundColor: "#85A6A2",
												marginTop: "-25px",
												marginLeft: "125px",
												border: "0",
											}}>
											<i className='bi bi-camera-fill'></i>
											{/* <img src="./assets/camera.png" className='position-absolute' style={{ marginTop: '-50px', marginLeft: '100px' }} /> */}
										</Button>
									</div>
								</div>
							</Col>
							{/* content */}
							<Col xs={12} sm={12} md={12} lg={7}>
								<div className='border-left px-2'>
									<span>
										<h3 className='fw-bolder'>
											{profile?.name}
										</h3>
										<p>CEO</p>
										<p>
											{profile?.email}
										</p>
									</span>
								</div>
								<Button
									onClick={showChangePassword}
									className='bg-white border-0'
									style={{ color: "#85A6A2" }}>
									Alterar senha
								</Button>
								{/* <small style={{
                                            color: '#85A6A2'
                                        }}>Alterar senha</small> */}
							</Col>
						</Row>
					</Col>
					<Col md={6} className='text-end'>
						{/* <div className='d-flex justify-content-end  p-3'> */}
						<Button
							size='lg'
							onClick={showAddAdmin}
							className='border-0'
							style={{ backgroundColor: "#C4CCD2" }}>
							<i className='bi bi-link-45deg mx-1'></i>
							Gerar código pra nova conta
						</Button>
						{/* </div> */}
					</Col>
				</Row>
				{/* tabel */}
				<Row>
					<Col md={12} className='my-4'>
						<Row>
							<Col xs={12} sm={12} md={4} lg={3}>
								{" "}
								<h3 className='fw-bolder'>Histórico</h3>
							</Col>
							<Col xs={12} sm={12} md={4} lg={4}>
								<form>
									<InputGroup>
										<InputGroup.Text
											id='basic-addon1'
											style={{
												background: "#F4F4F4",
											}}
											className='border-0'>
											<i className='bi bi-search '></i>
										</InputGroup.Text>
										<Form.Control
											style={{
												background: "#F4F4F4",
											}}
											type='Search'
											placeholder='Procurar....'
											aria-label='Search'
											aria-describedby='basic-addon1'
											className='border-0'
										/>
									</InputGroup>
								</form>
							</Col>
						</Row>
					</Col>
					{/* tabel */}
					<Col md={12}>
						<Table
							className='p-3 table-fit text-wrap tbl-color-text'
							responsive>
							<thead>
								<tr>
									<th className='tbl-head-color '>Nome </th>
									<th className='tbl-head-color '>
										CPF/CNPJ
									</th>
									<th className='tbl-head-color '>Email </th>
									<th className='tbl-head-color '>Data</th>
									<th className='tbl-head-color text-center'>
										Hora{" "}
									</th>
									<th className='tbl-head-color text-center'>
										Status{" "}
									</th>
								</tr>
							</thead>
							<tbody>
								<tr>
									<td className='fw-bold'>
										Ana Júlia Garcia
									</td>
									<td>000.000.000-00</td>
									<td>anajulia@vanceh.com </td>
									<td>13 dez 2022</td>
									<td className='text-center'>13:04 </td>
									<td className='text-end'>
										<Button variant='warning' size='lg'>
											Pendente
										</Button>
									</td>
								</tr>
								<tr>
									<td className='fw-bold'>
										Ana Júlia Garcia
									</td>
									<td>000.000.000-00</td>
									<td>anajulia@vanceh.com </td>
									<td>13 dez 2022</td>
									<td className='text-center'>13:04 </td>
									<td className='text-end'>
										<Button variant='success' size='lg'>
											Pendente
										</Button>
									</td>
								</tr>
								<tr>
									<td className='fw-bold'>
										Ana Júlia Garcia
									</td>
									<td>000.000.000-00</td>
									<td>anajulia@vanceh.com </td>
									<td>13 dez 2022</td>
									<td className='text-center'>13:04 </td>
									<td className='text-end'>
										<Button variant='success' size='lg'>
											Pendente
										</Button>
									</td>
								</tr>
								<tr>
									<td className='fw-bold'>
										Ana Júlia Garcia
									</td>
									<td>000.000.000-00</td>
									<td>anajulia@vanceh.com </td>
									<td>13 dez 2022</td>
									<td className='text-center'>13:04 </td>
									<td className='text-end'>
										<Button variant='success' size='lg'>
											Pendente
										</Button>
									</td>
								</tr>
							</tbody>
						</Table>
					</Col>
					{/* pagination */}
					<Col
						className='d-flex justify-content-center me-auto '
						md={12}>
						{/* <Pagination>
							<Pagination.Prev />
							{items}
							<Pagination.Ellipsis />
							<Pagination.Next />
						</Pagination> */}
					</Col>
				</Row>
			</Card>
		</div>
	);
};

export default ProfileCard;
