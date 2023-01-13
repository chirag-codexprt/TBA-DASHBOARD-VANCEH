import React, { useEffect } from "react";
import { Form, InputGroup } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { NavLink } from "react-router-dom";
import { useRecoilState } from "recoil";
import { profileData } from "../helper/API/Profile";
import { profileAtom } from "../recoil/Atoms";

const NavbarCom = () => {
	const [profileItem, setProfileItem] = useRecoilState(profileAtom);

	useEffect(() => {
		profileData().then((res) => {
			if (res.success) {
				setProfileItem(res.data);
			}
		});
	}, []);
	// console.log(profileItem);

	let pathName = window.location.pathname;

	return (
		<>
			<Navbar collapseOnSelect expand='lg' className='nav px-3'>
				<Navbar.Brand href='#home' className='ps-0'>
					<img src='/assets/img/TBA-C.png'></img>
				</Navbar.Brand>
				<Navbar.Toggle aria-controls='responsive-navbar-nav' />
				<Navbar.Collapse id='responsive-navbar-nav'>
					<Nav className='me-auto'></Nav>
					<Nav className='mx-4'>
						<NavLink
							style={{ textDecoration: "none" }}
							to={"/perfil"}>
							<div
								className={`${
									pathName == "/perfil" && "Nav-after"
								} text-white d-flex align-items-center`}>
								{profileItem?.name}
								<Nav.Link>
									<img
										src={
											profileItem.profileImage
												? profileItem.profileImage
												: "assets/img/noUser.png"
										}
										alt=''
										style={{
											height: "50px",
											width: "50px",
											borderRadius: "50%",
										}}
									/>
								</Nav.Link>
							</div>
						</NavLink>
					</Nav>
				</Navbar.Collapse>
			</Navbar>
		</>
	);
};

export default NavbarCom;
