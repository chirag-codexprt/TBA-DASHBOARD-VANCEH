import React from "react";
import { Col, Form } from "react-bootstrap";

const PermissionSwitch = ({
	label,
	name,
	checked,
	defaultChecked,
	handleCheck,
}) => {
	return (
		<Col md={6}>
			<Form className='d-flex align-items-center'>
				<Form.Check
					className='chack-item input-check fs-5 border-0'
					type='switch'
					id='custom-switch'
					checked={checked}
					name={name}
					defaultChecked={defaultChecked}
					onChange={handleCheck}
				/>
				<label>{label}</label>
			</Form>
		</Col>
	);
};

export default PermissionSwitch;
