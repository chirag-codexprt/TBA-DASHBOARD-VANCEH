import React, { useState } from 'react';
import { Row, Col } from "react-bootstrap";
import Button from 'react-bootstrap/Button';
// import { ButtonGreen, ButtonRed } from './buttons/Button';
import Modal from 'react-bootstrap/Modal';
import InputGroup from 'react-bootstrap/InputGroup';
import Form from 'react-bootstrap/Form';


const PassWord = ({showPass,onClose}) => {

    // const [passwordType, setPasswordType] = useState("password");
    // const [passwordInput, setPasswordInput] = useState("");
    const [showPassword, setShowPassword] = useState(false);

    const [passwordType, setPasswordType] = useState([{
        name: 'password',
        input: '',
        show: false,
        name: 'nova sehna'
    }, {
        name: 'password',
        input: '',
        show: false,
        name: 'Repetir nova senha'
    }])
    const handlePasswordChange = (evnt, i) => {
        // setPasswordInput(evnt.target.value);
        let temp = passwordType;
        temp[i].input = evnt.target.value
        setPasswordType(temp)
    }
    const togglePassword = () => {
        if (passwordType === "password") {
            setPasswordType("text")
            return;
        }
        setPasswordType("password")
    }

    const hideShowPassword = (i) => {
        setShowPassword(!showPassword)
        let temp = passwordType;
        temp[i].show = !passwordType[i].show;
        console.log(passwordType)
        setPasswordType(temp)
    }
    return (
        <>
            <Modal
                show={showPass}
                onHide={onClose}
                backdrop="static"
                keyboard={false}
                centered

            >
                <Modal.Header closeButton className='border-0'>
                    <Modal.Title className='fw-bolder'>Alterar senha</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Row className=''>
                        <Col md={10} className='mx-auto my-2'>
                            <p className='fw-bold my-1'>Senha atual</p>
                            <InputGroup className="mb-3 border rounded" >
                                <InputGroup.Text
                                    className='bg-white border-0'
                                    style={{ backgroundColor: '#F4F6F8' }}>
                                    <i class="bi bi-lock-fill" ></i>
                                </InputGroup.Text>
                                <Form.Control
                                    className='border-0 shadow-none'
                                    placeholder='Sua senha atual'
                                    type={"text"}

                                />

                            </InputGroup>
                        </Col>

                        {
                            passwordType.map((val, i) => {
                                return (
                                    <Col md={10} className='mx-auto my-2'>
                                        <p className='fw-bold my-1'>{val.name}</p>
                                        <InputGroup className="mb-3 border rounded" >
                                            <InputGroup.Text
                                                className='bg-white border-0'
                                                style={{ backgroundColor: '#F4F6F8' }}>
                                                <i class="bi bi-lock-fill" ></i>
                                            </InputGroup.Text>

                                            <Form.Control
                                                className='border-0 shadow-none'
                                                placeholder='Nova Senha'
                                                type={val.show ? "text" : "password"}
                                                onChange={(e) => handlePasswordChange(e, i)}
                                                name="password"
                                            />
                                            <InputGroup.Text
                                                className='bg-white border-0'
                                                style={{ backgroundColor: '#F4F6F8' }}>


                                                {val.show ?
                                                    <i className="bi bi-eye-slash-fill" onClick={() => hideShowPassword(i)} ></i>
                                                    : <i class="bi bi-eye-fill" onClick={() => hideShowPassword(i)}></i>}
                                            </InputGroup.Text>
                                        </InputGroup>
                                    </Col>
                                )
                            })
                        }

                        {/* 
                        <Col md={10} className='mx-auto my-2'>
                            <p className='fw-bold my-1'>Repetir nova senha</p>
                            <InputGroup className="mb-3 border rounded" >
                                <InputGroup.Text
                                    className='bg-white border-0'
                                    style={{ backgroundColor: '#F4F6F8' }}>
                                    <i class="bi bi-lock-fill" ></i>
                                </InputGroup.Text>
                                <Form.Control
                                    className='border-0 shadow-none'
                                    placeholder='Repetir nova senha'
                                    type={showPassword ? "text" : "password"}
                                    onChange={handlePasswordChange}
                                    name="password"
                                />
                                <InputGroup.Text
                                    className='bg-white border-0'
                                    style={{ backgroundColor: '#F4F6F8' }}>
                                    {showPassword ?
                                        <i className="bi bi-eye-slash-fill" onClick={hideShowPassword} ></i> : <i class="bi bi-eye-fill" onClick={hideShowPassword}></i>
                                    }


                                </InputGroup.Text>
                            </InputGroup>
                        </Col> */}

                        <Col md={11} className='mx-auto my-2 text-center'>
                            <Button className='fw-bolder fs-6 w-50' style={{ backgroundColor: '#1C3D59' }}>Alterar</Button>
                        </Col>
                    </Row>
                </Modal.Body>



            </Modal>
        </>
    )
}

export default PassWord