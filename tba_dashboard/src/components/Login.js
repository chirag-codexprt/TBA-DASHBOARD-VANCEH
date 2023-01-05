import React, { useEffect, useState } from "react";
import { Col, Row } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import { NavLink, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { loginAdmin, registerAdmin } from "../helper/API/auth";
import LoginForm from "./Auth.js/LoginForm";
import RegisterForm from "./Auth.js/RegisterForm";
import { useRecoilState, useRecoilValue } from "recoil";
import { jwtAtom, loginAtom } from "../recoil/Atoms";

const Login = () => {
	const [loginData, setLoginData] = useRecoilState(loginAtom);
	const [JWT, setJwt] = useRecoilState(jwtAtom);

	const [login, setLogin] = useState(true);
	const [account, setAccount] = useState(false);
	const [hidePassword, setHidePassword] = useState(false);
	const [hideConfirmPassword, setHideConfirmPassword] = useState(false);
	const [confirmPassword, setConfirmPassword] = useState("");
	const [formValues, setFormValues] = useState({
		email: "",
		password: "",
	});
	const [registerFormValues, setrRegisterFormValues] = useState({
		code: "",
		designation: "",
		name: "",
		email: "",
		password: "",
	});

	const Login = () => {
		setLogin(true);
		setAccount(false);
	};

	const Account = () => {
		setAccount(true);
		setLogin(false);
	};

	let navigate = useNavigate();

	useEffect(() => {
		let login = localStorage.getItem("login");
		if (login) {
			navigate("/Insights");
		}
	}, []);

	const hidePwd = () => {
		setHidePassword(!hidePassword);
	};

	const handleForm = (e) => {
		console.log("handleForm", e.target.value);
		setFormValues({
			...formValues,
			[e.target.name]: e.target.value,
		});
	};
	const handleRegisterForm = (e) => {
		console.log("handleForm", e.target.value);
		setrRegisterFormValues({
			...registerFormValues,
			[e.target.name]: e.target.value,
		});
	};

	const ProLogin = () => {
		loginAdmin(formValues).then((res) => {
			console.log("res", res);
			if (res.success) {
				localStorage.setItem("login", true);
				setLoginData(res.data);
				localStorage.setItem(
					"accessToken",
					JSON.stringify(res.data.jwtTokens.accessToken)
				);
				setJwt(res.data.jwtTokens.accessToken);
				navigate("/Insights");
				toast.success(res.message);
			} else {
				toast.error(res.message);
			}
		});
	};
	const registerUser = () => {
		registerAdmin(registerFormValues).then((res) => {
			console.log("res", res);
			if (res.success) {
				Login()
				toast.success(res.message)
				navigate('/login')
			}
			else (
				toast.error(res.message)
			)
		});
		console.log("registerFormValues", registerFormValues);

		// loginAdmin(formValues).then((res)=>{
		//     if(res.success){
		//         localStorage.setItem('login',true)

		//         navigate('/Insights')
		//     }else{

		//     }
		// })
	};

	return (
		<>
			<div className='Dashboard d-flex align-items-center '>
				<Row className='w-100 m-1 d-flex align-items-center justify-content-around'>
					<Col
						md={4}
						sm={4}
						xs={12}
						className='d-flex mb-3 justify-content-center'>
						<div className='TBA-Logo d-flex align-items-center justify-content-center'>
							<img src='/assets/img/TBA-Logo.png'></img>
						</div>
					</Col>
					<Col md={4} sm={4} xs={12} className='Login p-4'>
						<Row>
							<Col md={3} sm={6} xs={4}>
								{login && (
									<div className='login-enter fw-bold fs-4'>
										Entrar
									</div>
								)}
								{account && (
									<div
										className='login-enter fw-bold fs-4 active'
										onClick={Login}>
										Entrar
									</div>
								)}
							</Col>
							<Col md={9} sm={6} xs={6}>
								{login && (
									<div
										className='login-enter ms-2 fw-bold fs-4 active'
										onClick={Account}>
										Criar conta
									</div>
								)}
								{account && (
									<div className='login-enter ms-2 fw-bold fs-4'>
										Criar conta
									</div>
								)}
							</Col>
						</Row>

						{login && (
							<LoginForm
								formValues={formValues}
								handleForm={handleForm}
								ProLogin={ProLogin}
								hidePassword={hidePassword}
								hidePwd={() => setHidePassword(!hidePassword)}
							/>
						)}
						{account && (
							<RegisterForm
								handleRegisterForm={handleRegisterForm}
								registerUser={registerUser}
								hidePassword={hidePassword}
								hidePwd={() => setHidePassword(!hidePassword)}
								hideCnfrmPassword={hideConfirmPassword}
								hideCnfrmPwd={() =>
									setHideConfirmPassword(!hideConfirmPassword)
								}
								setConfirmPassword={setConfirmPassword}
								confirmPassword={confirmPassword}
							/>
						)}
					</Col>
				</Row>
			</div>
		</>
	);
};

export default Login;
