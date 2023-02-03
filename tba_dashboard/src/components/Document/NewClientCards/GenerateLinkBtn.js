import React from 'react'
import { Button, Col } from 'react-bootstrap'

const GenerateLinkBtn = () => {
    return (
        <>
            <Col md={4} className="d-flex align-items-center justify-content-end">
                <div>
                    <h6
                        style={{
                            color: "#B5B6B7",
                        }}
                        className='mt-1'>
                        ou
                    </h6>
                </div>
                <div className='ps-3'>
                    <Button
                        className='border-0 px-4'
                        // onClick={() =>
                        //     handleShowLinkModal(
                        //         obj
                        //     )
                        // }
                        style={{
                            background:
                                "#1C3D59",
                            width: "100%",
                        }}>
                        Gerar link
                    </Button>
                </div>

            </Col>
        </>
    )
}

export default GenerateLinkBtn