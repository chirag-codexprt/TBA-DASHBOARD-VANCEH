import React, { useState } from "react";
import { Row, Col } from "react-bootstrap";
import { NavLink, useLocation, useNavigate } from "react-router-dom";

const Sidebar = () => {
	const [link, setLink] = useState([
		{
			active: false,
			name: "Insights",
			link: "/Insights",
			color: "#c8c8c8",
			svg: "M15.625 0.75C16.1458 0.75 16.5885 0.932292 16.9531 1.29688C17.3177 1.66146 17.5 2.10417 17.5 2.625V16.375C17.5 16.8958 17.3177 17.3385 16.9531 17.7031C16.5885 18.0677 16.1458 18.25 15.625 18.25H1.875C1.35417 18.25 0.911458 18.0677 0.546875 17.7031C0.182292 17.3385 0 16.8958 0 16.375V2.625C0 2.10417 0.182292 1.66146 0.546875 1.29688C0.911458 0.932292 1.35417 0.75 1.875 0.75H15.625ZM6.25 13.875V8.875C6.25 8.69271 6.1849 8.54948 6.05469 8.44531C5.95052 8.3151 5.80729 8.25 5.625 8.25H4.375C4.19271 8.25 4.03646 8.3151 3.90625 8.44531C3.80208 8.54948 3.75 8.69271 3.75 8.875V13.875C3.75 14.0573 3.80208 14.2135 3.90625 14.3438C4.03646 14.4479 4.19271 14.5 4.375 14.5H5.625C5.80729 14.5 5.95052 14.4479 6.05469 14.3438C6.1849 14.2135 6.25 14.0573 6.25 13.875ZM10 13.875V5.125C10 4.94271 9.9349 4.79948 9.80469 4.69531C9.70052 4.5651 9.55729 4.5 9.375 4.5H8.125C7.94271 4.5 7.78646 4.5651 7.65625 4.69531C7.55208 4.79948 7.5 4.94271 7.5 5.125V13.875C7.5 14.0573 7.55208 14.2135 7.65625 14.3438C7.78646 14.4479 7.94271 14.5 8.125 14.5H9.375C9.55729 14.5 9.70052 14.4479 9.80469 14.3438C9.9349 14.2135 10 14.0573 10 13.875ZM13.75 13.875V11.375C13.75 11.1927 13.6849 11.0495 13.5547 10.9453C13.4505 10.8151 13.3073 10.75 13.125 10.75H11.875C11.6927 10.75 11.5365 10.8151 11.4062 10.9453C11.3021 11.0495 11.25 11.1927 11.25 11.375V13.875C11.25 14.0573 11.3021 14.2135 11.4062 14.3438C11.5365 14.4479 11.6927 14.5 11.875 14.5H13.125C13.3073 14.5 13.4505 14.4479 13.5547 14.3438C13.6849 14.2135 13.75 14.0573 13.75 13.875Z",
		},
		{
			active: false,
			name: "Contatos",
			link: "/Contatos",
			color: "#c8c8c8",
			svg: "M23.4375 7.35156C22.8385 7.95052 22.1094 8.25 21.25 8.25C20.3906 8.25 19.6484 7.95052 19.0234 7.35156C18.4245 6.72656 18.125 5.98438 18.125 5.125C18.125 4.26562 18.4245 3.53646 19.0234 2.9375C19.6484 2.3125 20.3906 2 21.25 2C22.1094 2 22.8385 2.3125 23.4375 2.9375C24.0625 3.53646 24.375 4.26562 24.375 5.125C24.375 5.98438 24.0625 6.72656 23.4375 7.35156ZM22.1094 4.26562C21.875 4.00521 21.5885 3.875 21.25 3.875C20.9115 3.875 20.612 4.00521 20.3516 4.26562C20.1172 4.5 20 4.78646 20 5.125C20 5.46354 20.1172 5.76302 20.3516 6.02344C20.612 6.25781 20.9115 6.375 21.25 6.375C21.5885 6.375 21.875 6.25781 22.1094 6.02344C22.3698 5.76302 22.5 5.46354 22.5 5.125C22.5 4.78646 22.3698 4.5 22.1094 4.26562ZM5.9375 7.35156C5.33854 7.95052 4.60938 8.25 3.75 8.25C2.89062 8.25 2.14844 7.95052 1.52344 7.35156C0.924479 6.72656 0.625 5.98438 0.625 5.125C0.625 4.26562 0.924479 3.53646 1.52344 2.9375C2.14844 2.3125 2.89062 2 3.75 2C4.60938 2 5.33854 2.3125 5.9375 2.9375C6.5625 3.53646 6.875 4.26562 6.875 5.125C6.875 5.98438 6.5625 6.72656 5.9375 7.35156ZM4.60938 4.26562C4.375 4.00521 4.08854 3.875 3.75 3.875C3.41146 3.875 3.11198 4.00521 2.85156 4.26562C2.61719 4.5 2.5 4.78646 2.5 5.125C2.5 5.46354 2.61719 5.76302 2.85156 6.02344C3.11198 6.25781 3.41146 6.375 3.75 6.375C4.08854 6.375 4.375 6.25781 4.60938 6.02344C4.86979 5.76302 5 5.46354 5 5.125C5 4.78646 4.86979 4.5 4.60938 4.26562ZM19.2188 12.1172C19.7396 12.8724 20 13.7057 20 14.6172V16.375C20 16.8958 19.8177 17.3385 19.4531 17.7031C19.0885 18.0677 18.6458 18.25 18.125 18.25H6.875C6.35417 18.25 5.91146 18.0677 5.54688 17.7031C5.18229 17.3385 5 16.8958 5 16.375V14.6172C5 13.7057 5.2474 12.8724 5.74219 12.1172C6.28906 11.3359 7.01823 10.8021 7.92969 10.5156C8.86719 10.2031 9.80469 10.1901 10.7422 10.4766C11.3151 10.6589 11.888 10.75 12.4609 10.75C13.0599 10.75 13.6589 10.6589 14.2578 10.4766C15.1953 10.1901 16.1198 10.2031 17.0312 10.5156C17.9688 10.8021 18.6979 11.3359 19.2188 12.1172ZM18.125 16.375V14.6172C18.125 13.9141 17.8776 13.3151 17.3828 12.8203C16.888 12.2995 16.2891 12.026 15.5859 12C14.5703 12.4167 13.5417 12.625 12.5 12.625C11.4583 12.625 10.4297 12.4167 9.41406 12C8.71094 12.026 8.11198 12.2995 7.61719 12.8203C7.1224 13.3151 6.875 13.9141 6.875 14.6172V16.375H18.125ZM21.7188 9.5C22.1615 9.5 22.5781 9.59115 22.9688 9.77344C23.3854 9.92969 23.737 10.1641 24.0234 10.4766C24.3359 10.763 24.5703 11.1146 24.7266 11.5312C24.9089 11.9219 25 12.3385 25 12.7812C25 13.0417 24.9089 13.263 24.7266 13.4453C24.5443 13.6276 24.3229 13.7188 24.0625 13.7188C23.8021 13.7188 23.5807 13.6276 23.3984 13.4453C23.2161 13.263 23.125 13.0417 23.125 12.7812C23.125 12.3906 22.9818 12.0651 22.6953 11.8047C22.4349 11.5182 22.1094 11.375 21.7188 11.375H20.7812C20.651 11.375 20.4948 11.401 20.3125 11.4531C19.9479 10.9323 19.4922 10.4635 18.9453 10.0469C19.4922 9.68229 20.1042 9.5 20.7812 9.5H21.7188ZM15.5859 8.21094C14.7266 9.07031 13.6979 9.5 12.5 9.5C11.3021 9.5 10.2734 9.07031 9.41406 8.21094C8.55469 7.35156 8.125 6.32292 8.125 5.125C8.125 3.92708 8.55469 2.89844 9.41406 2.03906C10.2734 1.17969 11.3021 0.75 12.5 0.75C13.6979 0.75 14.7266 1.17969 15.5859 2.03906C16.4453 2.89844 16.875 3.92708 16.875 5.125C16.875 6.32292 16.4453 7.35156 15.5859 8.21094ZM14.2578 3.36719C13.763 2.8724 13.1771 2.625 12.5 2.625C11.8229 2.625 11.237 2.8724 10.7422 3.36719C10.2474 3.86198 10 4.44792 10 5.125C10 5.80208 10.2474 6.38802 10.7422 6.88281C11.237 7.3776 11.8229 7.625 12.5 7.625C13.1771 7.625 13.763 7.3776 14.2578 6.88281C14.7526 6.38802 15 5.80208 15 5.125C15 4.44792 14.7526 3.86198 14.2578 3.36719ZM6.05469 10.0469C5.50781 10.4635 5.05208 10.9323 4.6875 11.4531C4.53125 11.401 4.375 11.375 4.21875 11.375H3.28125C2.89062 11.375 2.55208 11.5182 2.26562 11.8047C2.00521 12.0651 1.875 12.3906 1.875 12.7812C1.875 13.0417 1.78385 13.263 1.60156 13.4453C1.41927 13.6276 1.19792 13.7188 0.9375 13.7188C0.677083 13.7188 0.455729 13.6276 0.273438 13.4453C0.0911458 13.263 0 13.0417 0 12.7812C0 11.8698 0.3125 11.1016 0.9375 10.4766C1.58854 9.82552 2.36979 9.5 3.28125 9.5H4.21875C4.89583 9.5 5.50781 9.68229 6.05469 10.0469Z",
		},
		{
			active: false,
			name: "Documentos",
			link: "/Documentos",
			color: "#c8c8c8",
			svg: "M14.375 12.9375H18.125C18.6328 12.9375 19.0625 12.5469 19.0625 12C19.0625 11.4922 18.6328 11.0625 18.125 11.0625H14.375C13.8281 11.0625 13.4375 11.4922 13.4375 12C13.4375 12.5469 13.8281 12.9375 14.375 12.9375ZM8.125 12C9.49219 12 10.625 10.9062 10.625 9.5C10.625 8.13281 9.49219 7 8.125 7C6.71875 7 5.625 8.13281 5.625 9.5C5.625 10.9062 6.71875 12 8.125 12ZM20 0.75H2.5C1.09375 0.75 0 1.88281 0 3.25V15.75C0 17.1562 1.09375 18.25 2.5 18.25H20C21.3672 18.25 22.5 17.1562 22.5 15.75V3.25C22.5 1.88281 21.3672 0.75 20 0.75ZM20.625 15.75C20.625 16.1016 20.3125 16.375 20 16.375H12.5C12.5 14.6562 11.0938 13.25 9.375 13.25H6.875C5.11719 13.25 3.75 14.6562 3.75 16.375H2.5C2.14844 16.375 1.875 16.1016 1.875 15.75V5.75H20.625V15.75ZM14.375 9.8125H18.125C18.6328 9.8125 19.0625 9.42188 19.0625 8.875C19.0625 8.36719 18.6328 7.9375 18.125 7.9375H14.375C13.8281 7.9375 13.4375 8.36719 13.4375 8.875C13.4375 9.42188 13.8281 9.8125 14.375 9.8125Z",
		},
		{
			active: false,
			name: "Permissões",
			link: "/Permissoes",
			color: "#c8c8c8",
			svg: "M6.36719 9.48438L8.71094 11.8672L14.2188 6.35938C14.4531 6.15104 14.6745 6.16406 14.8828 6.39844L15.7812 7.25781C15.9896 7.49219 15.9896 7.71354 15.7812 7.92188L9.02344 14.6406C8.8151 14.849 8.59375 14.8359 8.35938 14.6016L4.80469 11.0469C4.59635 10.8125 4.60938 10.5911 4.84375 10.3828L5.70312 9.48438C5.9375 9.27604 6.15885 9.27604 6.36719 9.48438ZM18.2031 3.78125C18.5677 3.91146 18.8542 4.13281 19.0625 4.44531C19.2708 4.75781 19.375 5.10938 19.375 5.5C19.375 7.14062 19.1797 8.71615 18.7891 10.2266C18.3984 11.7109 17.9036 13 17.3047 14.0938C16.7057 15.1615 16.0026 16.138 15.1953 17.0234C14.4141 17.8828 13.6458 18.5729 12.8906 19.0938C12.1615 19.6406 11.4323 20.0573 10.7031 20.3438C10.2344 20.5521 9.76562 20.5521 9.29688 20.3438C8.20312 19.901 7.14844 19.237 6.13281 18.3516C5.14323 17.4922 4.23177 16.4505 3.39844 15.2266C2.5651 13.9766 1.88802 12.5052 1.36719 10.8125C0.872396 9.11979 0.625 7.34896 0.625 5.5C0.625 5.34375 0.638021 5.20052 0.664062 5.07031C0.716146 4.91406 0.768229 4.77083 0.820312 4.64062C0.898438 4.51042 0.976562 4.39323 1.05469 4.28906C1.15885 4.1849 1.26302 4.09375 1.36719 4.01562C1.4974 3.91146 1.64062 3.83333 1.79688 3.78125L9.29688 0.65625C9.50521 0.552083 9.73958 0.5 10 0.5C10.2604 0.5 10.4948 0.552083 10.7031 0.65625L18.2031 3.78125ZM10 18.625C12.0052 17.7917 13.75 16.1901 15.2344 13.8203C16.7448 11.4505 17.5 8.67708 17.5 5.5L10 2.375L2.5 5.5C2.5 8.625 3.22917 11.3854 4.6875 13.7812C6.17188 16.151 7.94271 17.7656 10 18.625Z",
		},
	]);

	const navigate = useLocation();
	link.map((val) => {
		if (val.link == navigate.pathname) {
			val.active = true;
			val.color = "#323537";
		} else {
			val.active = false;
			val.color = "#c8c8c8";
		}
	});

	return (
		<>
			<Row style={{ overflowY: "hidden" }}>
				<Col md={12}>
					<div
						className=' mt-5'
						style={{
							color: "#c2c2c2",
							marginLeft: "30%",
						}}>
						Category
					</div>
					{link.map((val) => {
						if (val.active == true) {
							return (
								<Row className='mt-4 c-point'>
									<Col
										md={5}
										xs={5}
										className='d-flex mt-1 justify-content-end'>
										<svg
											width='30'
											height='19'
											viewBox='0 0 18 22'
											fill='none'
											xmlns='http://www.w3.org/2000/svg'>
											<path
												d={val.svg}
												fill={val.color}
											/>
										</svg>
									</Col>
									<Col
										className='side-line ps-0 fw-bold'
										style={{ color: val.color }}>
										{val.name}
									</Col>
								</Row>
							);
						} else {
							return (
								<NavLink
									to={val.link}
									style={{ textDecoration: "none" }}>
									<Row
										className='mt-4 active c-point'
										style={{ color: "#6F767E" }}>
										<Col
											md={5}
											xs={5}
											className='d-flex mt-1 justify-content-end'>
											<svg
												width='30'
												height='19'
												viewBox='0 0 18 22'
												fill='none'
												xmlns='http://www.w3.org/2000/svg'>
												<path
													d={val.svg}
													fill={val.color}
												/>
											</svg>
										</Col>
										<Col className='ps-0'>{val.name}</Col>
									</Row>
								</NavLink>
							);
						}
					})}
					<Row
						className=' mt-5 d-flex align-items-end flex-column'
						style={{
							// height: "200px",
							position: "fixed",
							bottom: "10%",
							left: "5%",
						}}>
						<Col className='d-flex justify-content-center align-items-end'>
							<div className='border-div'></div>
						</Col>
						<Col className='mt-3 c-point d-flex justify-content-center'>
							<Row className='mt-4'>
								<Col md={1} xs={1}>
									<img src='/assets/img/side-4.png'></img>
								</Col>

								<Col>
									<NavLink
										style={{
											textDecoration: "none",
											color: "#c2c2c2",
										}}
										to={"/logout"}>
										Sair
									</NavLink>
								</Col>
							</Row>
						</Col>
					</Row>
				</Col>
			</Row>
		</>
	);
};

export default Sidebar;
