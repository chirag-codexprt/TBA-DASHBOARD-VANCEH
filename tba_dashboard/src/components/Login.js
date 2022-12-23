import React, { useEffect, useState } from 'react'
import { Col, Row } from 'react-bootstrap'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import { NavLink, useNavigate } from 'react-router-dom';

const Login = () => {

    const [login, setLogin] = useState(true)
    const [account, setAccount] = useState(false)

    const Login = () => {
        
        setLogin(true)
        setAccount(false)
    }

    const Account = () => {
        setAccount(true);
        setLogin(false)
    }

    let navigate=useNavigate()
    const ProLogin = () =>{
        
            localStorage.setItem('login',true)
            navigate('/Insights')
    }
    const LoginItem = () => {
        return (
            <Row>
                <Col md={12} className='mt-4'>
                    <Form>
                        <Form.Label className='fs-5'>Email</Form.Label>
                        <InputGroup className="mb-4">
                            <InputGroup.Text id="basic-addon1" className='p-2'><i class="bi bi-person-fill" style={{ color: '#CED4DB' }}></i></InputGroup.Text>
                            <Form.Control placeholder="Email" className='ps-0' aria-describedby="basic-addon1" />
                        </InputGroup>
                        <Form.Label className='fs-5'>Senha</Form.Label>
                        <InputGroup className="mb-4">
                            <InputGroup.Text id="basic-addon1" className='p-2'><i class="bi bi-lock-fill" style={{ color: '#CED4DB' }}></i></InputGroup.Text>
                            <Form.Control placeholder="Sua senha" className='eye-logo ps-0' aria-describedby="basic-addon1" />
                            <InputGroup.Text id="basic-addon1" className='p-2'><i class="bi bi-eye-slash-fill" style={{ color: '#CED4DB' }}></i></InputGroup.Text>
                        </InputGroup>
                        <Form.Group className="mb-4" controlId="formBasicCheckbox">
                            <Form.Check type="checkbox" label="Lembrar" />
                        </Form.Group>
                    </Form>
                </Col>
                <Col className='d-flex mt-5 justify-content-center'>
                        <Button className='login-btn px-5 py-2 fw-bold fs-4' type="submit" onClick={()=>ProLogin()}>Submit</Button>
                </Col>
            </Row>
        )
    }

    const AccountItem = () =>{
        return(
            <Row>
            <Col md={12} className='mt-3'>
                <Form>
                    <Form.Label className='fs-6'>Link para criação</Form.Label>
                    <InputGroup className="mb-3">
                        <InputGroup.Text id="basic-addon1" className='p-2'><i class="bi bi-link-45deg" style={{ color: '#CED4DB' }}></i></InputGroup.Text>
                        <Form.Control placeholder="Link que você recebeu" className='ps-0' aria-describedby="basic-addon1" />
                    </InputGroup>
                    <Form.Label className='fs-6'>Seu cargo</Form.Label>
                    <InputGroup className="mb-3">
                        <InputGroup.Text id="basic-addon1" className='p-2'><i class="bi bi-bag-dash-fill" style={{ color: '#CED4DB' }}></i></InputGroup.Text>
                        <Form.Control placeholder="Marketing" className='ps-0' aria-describedby="basic-addon1" />
                    </InputGroup>
                    <Form.Label className='fs-6'>Nome</Form.Label>
                    <InputGroup className="mb-3">
                        <InputGroup.Text id="basic-addon1" className='p-2'><i class="bi bi-person-fill" style={{ color: '#CED4DB' }}></i></InputGroup.Text>
                        <Form.Control placeholder="Seu primeiro e último nome" className='ps-0' aria-describedby="basic-addon1" />
                    </InputGroup>
                    <Form.Label className='fs-6'>Senha</Form.Label>
                    <InputGroup className="mb-3">
                        <InputGroup.Text id="basic-addon1" className='p-2'><i class="bi bi-lock-fill" style={{ color: '#CED4DB' }}></i></InputGroup.Text>
                        <Form.Control placeholder="Sua senha" className='eye-logo ps-0' aria-describedby="basic-addon1" />
                        <InputGroup.Text id="basic-addon1" className='p-2'><i class="bi bi-eye-slash-fill" style={{ color: '#CED4DB' }}></i></InputGroup.Text>
                    </InputGroup>
                    <Form.Label className='fs-6'>Repetir senha</Form.Label>
                    <InputGroup className="mb-3">
                        <InputGroup.Text id="basic-addon1" className='p-2'><i class="bi bi-lock-fill" style={{ color: '#CED4DB' }}></i></InputGroup.Text>
                        <Form.Control placeholder="Sua senha" className='eye-logo ps-0' aria-describedby="basic-addon1" />
                        <InputGroup.Text id="basic-addon1" className='p-2'><i class="bi bi-eye-slash-fill" style={{ color: '#CED4DB' }}></i></InputGroup.Text>
                    </InputGroup>
                </Form>
            </Col>
            <Col className='d-flex mt-1 justify-content-center'>
                <Button className='login-btn px-5 py-2 fw-bold fs-4' onClick={() => { Login() }} type="submit">Criar conta</Button>
            </Col>
        </Row>
        )
    }

    return (
        <>
            <div className='Dashboard d-flex align-items-center '>
                <Row className='w-100 m-1 d-flex align-items-center justify-content-around'>
                    <Col md={4} sm={4} xs={12} className='d-flex mb-3 justify-content-center'>
                        <div className='TBA-Logo d-flex align-items-center justify-content-center'>
                            <img src='/assets/img/TBA-Logo.png'></img>
                        </div>
                    </Col>
                    <Col md={4} sm={4} xs={12} className='Login p-4'>
                        <Row>
                            <Col md={3} sm={6} xs={4}>
                                {login && (
                                    <div className="login-enter fw-bold fs-4" >Entrar</div>
                                )}
                                {account && (
                                    <div className="login-enter fw-bold fs-4 active" onClick={() => { Login() }} >Entrar</div>
                                )}
                            </Col>
                            <Col md={9} sm={6} xs={6} >
                                {login && (
                                    <div className="login-enter ms-2 fw-bold fs-4 active" onClick={() => { Account() }}>Criar conta</div>
                                )}
                                {account && (
                                    <div className="login-enter ms-2 fw-bold fs-4">Criar conta</div>
                                )}
                            </Col>
                        </Row>
                        {
                            login && (<LoginItem/>)
                        }
                        {
                            account && (<AccountItem/>)
                        }
                    </Col>
                </Row>
            </div>
        </>
    )
}

export default Login