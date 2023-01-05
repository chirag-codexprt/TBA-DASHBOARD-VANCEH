import React, { useState, useRef } from 'react';
import { Row, Col } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Overlay from 'react-bootstrap/Overlay';
import Popover from 'react-bootstrap/Popover';

const PermissonTooltip = ({ show, target, ref, handleClose }) => {

    // const [show, setShow] = useState(false);
    // const [target, setTarget] = useState(null);
    // const ref = useRef(null);

    // const handleClick = (event) => {
    //     setShow(!show);
    //     setTarget(event.target);
    // };

    return (
        <div>
            <div ref={ref}>
                <Overlay
                    show={show}
                    target={target}
                    placement="bottom"
                    container={ref}
                    containerPadding={10}
                >
                    <Popover id="popover-contained">
                        <Popover.Body>
                            <Row>
                                <Col md={12}>
                                    <i onClick={handleClose} className='bi bi-x fs-4 d-flex justify-content-end' style={{ color: 'lightgray' }}></i>
                                </Col>
                                <Col md={4}>
                                    <img src='/assets/img/madam.png'></img>
                                </Col>
                                <Col md={8}>
                                    <label
                                        className='mt-2'
                                        style={{ fontSize: "14px" }}>
                                        Autorizar Ana Júlia Garcia a ter acesso aos
                                        Insights da empresa?
                                    </label>
                                </Col>
                            </Row>
                            <Row className='gx-2'>
                                <Col md={12} className='d-flex justify-content-center'>
                                    <hr className='w-25' />
                                </Col>
                                <Col md={6}>
                                    <Button
                                        variant='danger'
                                        className='w-100 px-0 fw-bold'
                                        style={{ fontSize: "14px" }}>
                                        <img
                                            style={{ marginTop: "-5px" }}
                                            src='/assets/img/X.png'></img>{" "}
                                        Não autorizar
                                    </Button>
                                </Col>
                                <Col md={6}>
                                    <Button
                                        variant='success'
                                        className='w-100 px-0 fw-bold'
                                        style={{ fontSize: "14px" }}>
                                        <img src='/assets/img/Right.png'></img>{" "}
                                        Autorizar
                                    </Button>
                                </Col>
                            </Row>
                        </Popover.Body>
                    </Popover>
                </Overlay>
            </div>
        </div>
    )
}

export default PermissonTooltip