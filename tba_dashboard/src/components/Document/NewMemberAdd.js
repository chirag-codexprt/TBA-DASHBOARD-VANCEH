
import React, { useEffect, useState } from "react";
import {
    Button,
    Card,
    CloseButton,
    Col,
    Form,
    InputGroup,
    Modal,
    ModalBody,
    ModalHeader,
    Row,
    Spinner,
} from "react-bootstrap";
// import { useLocation, useParams } from "react-router-dom";
// import {
//     getDocument,
//     submitAddressDocument,
//     submitDocument,
// } from "../../helper/API/contact";
// import AddressProofModal from "./AddressProofModal";
// import SocialContractModal from "./SocialContractModal";
// import Dropzone from "react-dropzone";
import SocialContractCard from "./SocialContractCard";
import AddressProofCard from "./AddressProofCard";
import { toast } from "react-toastify";

const NewMemberAdd = ({ show }) => {
    const [loading, setLoading] = useState(false);
    // const [show, setshow] = useState(false);
    // const [refresh, setRefresh] = useState(0);
    // const [addressOpen, setAddressOpen] = useState(false);
    const [data, setData] = useState(null);
    // const [images, setImages] = React.useState("");
    // const [imagePreview, setImagePreview] = React.useState("");
    // const [addressImages, setAddressImages] = React.useState("");
    // const [addressImagePreview, setAddressImagePreview] = React.useState("");

    // const { contactId, requestId } = useParams();
    // console.log("contactId", contactId);
    // console.log("requestId", requestId);

    // useEffect(() => {
    //     const submitData = { contactId, requestId };
    //     getDocument(submitData).then((res) => {
    //         if (res.success) {
    //             console.log("res success", res);
    //             setData(res.data);
    //         } else {
    //             console.log("res", res);
    //         }
    //     });
    // }, [refresh]);

    // const handleFileChange = (acceptedFiles) => {
    //     setopen(true);
    //     if (acceptedFiles[0]) {
    //         setImages(acceptedFiles[0]);
    //         const reader = new FileReader();
    //         reader.addEventListener("load", () => {
    //             setImagePreview(reader.result);
    //         });
    //         reader.readAsDataURL(acceptedFiles[0]);
    //     }
    // };
    // const handleAddressChange = (acceptedFiles) => {
    //     console.log("acceptedFiles", acceptedFiles);
    //     setAddressOpen(true);
    //     if (acceptedFiles[0]) {
    //         setAddressImages(acceptedFiles[0]);
    //         const reader = new FileReader();
    //         reader.addEventListener("load", () => {
    //             setAddressImagePreview(reader.result);
    //         });
    //         reader.readAsDataURL(acceptedFiles[0]);
    //     }
    // };
    // const handleSubmit = () => {
    //     setLoading(true);
    //     if (images) {
    //         setLoading(true);
    //         let formData = new FormData();
    //         formData.append("socialContract", images);

    //         formData.append("id", contactId);

    //         submitDocument(formData).then((res) => {
    //             if (res.success) {
    //                 setLoading(false);
    //                 setImages("");
    //                 setAddressImagePreview("");
    //                 toast.success(res.message);
    //                 setRefresh(refresh + 1);
    //             } else {
    //                 toast.error(res.message);
    //                 setLoading(false);
    //             }
    //         });
    //     }
    //     if (addressImages) {
    //         setLoading(true);
    //         let formDataAddress = new FormData();
    //         formDataAddress.append("addressProof", addressImages);
    //         formDataAddress.append("id", contactId);
    //         submitAddressDocument(formDataAddress).then((res) => {
    //             if (res.success) {
    //                 setLoading(false);
    //                 setAddressImages("");
    //                 setImagePreview("");
    //                 toast.success(res.message);
    //                 setRefresh(refresh + 1);
    //             } else {
    //                 setLoading(false);
    //                 toast.error(res.message);
    //             }
    //         });
    //     }
    // };
    return (
        // <>
        //     {/* <Modal
        //         show={show}>
        //         <div className='DocumentCard d-flex align-items-center justify-content-center'>
        //             <Col
        //                 md={12}
        //                 className='d-flex flex-column align-items-center justify-content-center'>
        //                 {/* <div className='TBA-Logo d-flex align-items-center justify-content-center'>
        //                     <img src='/assets/TBA.png'></img>
        //                 </div> */}
        //                 <Card className='w-75 m-2 p-4'>
        //                     {/* {data?.socialContract?.approved &&
        //                     data?.addressProof?.approved ? ( */}
        //                     <div
        //                         className='d-flex justify-content-center align-items-center'
        //                         style={{ height: "20vh" }}>
        //                         <h2>
        //                             Você não tem nenhum documento para enviar
        //                         </h2>
        //                     </div>
        //                     {/* ) : ( */}

        //                     {/* )} */}
        //                 </Card>

        //             </Col>
        //             {/* <SocialContractModal
        //             open={open}
        //             handleClose={() => setopen(false)}
        //             images={images}
        //             setImages={setImages}
        //             imagePreview={imagePreview}
        //             setImagePreview={setImagePreview}
        //             handleFileChange={handleFileChange}
        //         />
        //         <AddressProofModal
        //             open={addressOpen}
        //             handleClose={() => setAddressOpen(false)}
        //             handleAddressChange={handleAddressChange}
        //             addressImages={addressImages}
        //             setAddressImages={setAddressImages}
        //             addressImagePreview={addressImagePreview}
        //             setAddressImagePreview={setAddressImagePreview}
        //         /> */}
        //         </div>
        //     </Modal> */}
        // </>
        <Modal show={show} className="zindex" size="xl">
            <ModalHeader className="border-0" closeButton>
                <Modal.Title>
                    Criar novo cliente
                </Modal.Title>
            </ModalHeader>
            <ModalBody>
                <Row className='mt-3'>
                    <Col md={4} xs={12}>
                        <Form>
                            <Form.Label>Nome completo do cleinte</Form.Label>
                            <InputGroup className='mb-3'>
                                <InputGroup.Text
                                    id='basic-addon1'
                                    className='border-0'
                                    style={{
                                        background: "#F4F6F8",
                                    }}>
                                    <i className='bi bi-person-fill link-icon'></i>
                                </InputGroup.Text>
                                <Form.Control
                                    placeholder='Ana Júlia Garcia'
                                    type='text'
                                    className='Cardinput border-0'
                                // value={data?.name}
                                />
                            </InputGroup>
                        </Form>
                    </Col>
                    <Col md={4} xs={12}>
                        <Form>
                            <Form.Label>CPF/CNPJ</Form.Label>
                            <InputGroup className='mb-3'>
                                <InputGroup.Text
                                    id='basic-addon1'
                                    className='border-0'
                                    style={{
                                        background: "#F4F6F8",
                                    }}>
                                    <i className='bi bi-person-vcard-fill link-icon'></i>
                                </InputGroup.Text>
                                <Form.Control
                                    placeholder='000.000.000-00'
                                    type='text'
                                    className='Cardinput border-0'
                                // value={data?.CpfOrCnpj}

                                />
                            </InputGroup>
                        </Form>
                    </Col>
                    <Col md={4} xs={12}>
                        <Form>
                            <Form.Label>Email/telefone</Form.Label>
                            <InputGroup className='mb-3' >
                                <InputGroup.Text
                                    id='basic-addon1'
                                    className='border-0'
                                    style={{
                                        background: "#F4F6F8",
                                    }}>
                                    <i className='bi bi-envelope-fill link-icon'></i>
                                </InputGroup.Text>
                                <Form.Control
                                    placeholder='anajuliamarques@tba.com'
                                    type='email'
                                    className='Cardinput border-0'
                                // value={data?.email}
                                />
                            </InputGroup>
                        </Form>
                    </Col>
                </Row>
                <Row className='mt-3 gx-2'>
                    <Col md={4} xs={12}>
                        <h6 style={{ color: "#B5B6B7" }}>
                            CPF/CNPJ
                        </h6>
                        <Button
                            className='w-100 p-0 CardBtn'
                            variant='outline-success'>
                            <i className='bi bi-check-lg fs-1 right-icon'></i>
                            <h6
                                style={{
                                    color: "#C4CCD2",
                                    fontSize: "11px",
                                }}>
                                Já aprovada, visualizar?
                            </h6>
                        </Button>
                    </Col>

                    <SocialContractCard />
                    {/*                                         
            {data?.requiredPermission?.proofOfAddress &&
                !data?.addressProof?.approved && ( */}
                    <AddressProofCard
                    // handleAddressChange={
                    //     handleAddressChange
                    // }
                    // addressImages={addressImages}
                    // data={data}
                    />
                    {/* )} */}
                </Row>
                <div className='d-flex justify-content-end'>
                    {/* {(data?.addressProof === null ||
            data?.socialContract === null) && ( */}
                    <Button
                        // onClick={handleSubmit}
                        className='mt-4 m-2 p-3 px-4 fw-bold border-0'
                        // disabled={loading}
                        style={{
                            width: "fit-content",
                            background: "#1C3D59",
                        }}
                    >
                        Encaminhar
                        {/* {loading && (
                        <Spinner
                            animation='grow'
                            variant='light'
                            className='ms-3 py-2 fw-bold fs-4'
                        />
                    )} */}
                    </Button>
                    {/* )} */}
                </div>
            </ModalBody>
        </Modal>
    );
};

export default NewMemberAdd;
