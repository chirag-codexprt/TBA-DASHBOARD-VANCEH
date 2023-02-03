import React from 'react'
import { Row, Col, Popover } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Overlay from "react-bootstrap/Overlay";
import { toast } from 'react-toastify';
import { approveVisitor } from '../../helper/API/contact';

const ContactTooltip = ({ show, target, ref, close, visitorId, refresh, setRefresh }) => {

    console.log('visitorId', visitorId)

    const handleSubmit = (action) => {
        const submitData = {
            id: visitorId,
            action,
        };
        console.log('submitData', submitData)
        approveVisitor(submitData).then((res) => {
            if (res.success) {
                toast.success(res.message);
                setRefresh(refresh + 1);
                close();
            } else {
                toast.error(res.message);
            }
        })
    };

    return (
        <>
            <div ref={ref}>
                <Overlay
                    show={show}
                    target={target}
                    placement='bottom'
                    container={ref}
                    containerPadding={10}>
                    <Popover id='popover-contained'>
                        <Popover.Body>
                            <Row className='gx-2'>
                                <Col className='d-flex justify-content-end mb-2' md={12}>
                                    <img onClick={close} style={{ cursor: 'pointer' }} src='assets/img/close1.png'></img>
                                </Col>
                                <Col md={6}>
                                    <Button
                                        variant='danger'
                                        className='d-flex align-items-center px-3 border-0' onClick={() => handleSubmit("reject")}>
                                        <img
                                            src='/assets/img/X.png'></img>
                                        &nbsp;<span style={{ fontSize: '12px' }} className=" mt-1 fw-bold">Reprovado</span>
                                    </Button>
                                </Col>
                                <Col md={6}>
                                    <Button style={{ background: '#58A43D' }}
                                        className='d-flex align-items-center px-3 border-0' onClick={() => handleSubmit("approved")}>
                                        <img src='/assets/img/Right.png'></img>
                                        &nbsp;<span style={{ fontSize: '12px' }} className="fw-bold">Aprovado</span>
                                    </Button>
                                </Col>
                            </Row>
                        </Popover.Body>
                    </Popover>
                </Overlay>
            </div>
        </>
    )
}

export default ContactTooltip