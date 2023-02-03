import { AfterAuthApi, ApiCall } from "../index";
import {
	GET_CONTACT,
	GENERATE_LINK,
	CONTACT_FORM,
	GENERATE_NEW_LINK,
	ATTACH_DOCUMENT,
	APPROVE_VISITOR,
} from "../url";

export const getContactList = (submitData) => {
	return new Promise((resolve, reject) => {
		AfterAuthApi(GET_CONTACT, "post", submitData)
			.then((res) => {
				resolve(res.data);
			})
			.catch((err) => {
				reject();
			});
	});
};

export const generateLink = (submitData) => {
	return new Promise((resolve, reject) => {
		AfterAuthApi(GENERATE_LINK, "post", submitData)
			.then((res) => {
				resolve(res.data);
			})
			.catch((err) => {
				reject();
			});
	});
};

export const contactForm = (submitData) => {
	console.log("submitData", submitData);
	return new Promise((resolve, reject) => {
		ApiCall(CONTACT_FORM, "post", submitData)
			.then((res) => {
				resolve(res.data);
			})
			.catch((err) => {
				reject();
			});
	});
};

export const generateNewLink = (submitData) => {
	return new Promise((resolve, reject) => {
		AfterAuthApi(GENERATE_NEW_LINK, "post", submitData)
			.then((res) => {
				resolve(res.data);
			})
			.catch((err) => {
				reject();
			});
	});
};

export const attachDocument = (submitData) => {
	console.log("submitData", submitData);
	return new Promise((resolve, reject) => {
		ApiCall(ATTACH_DOCUMENT, "post", submitData)
			.then((res) => {
				resolve(res.data);
			})
			.catch((err) => {
				reject();
			});
	});
};

export const approveVisitor = (submitData) => {
	console.log("submitData", submitData);
	return new Promise((resolve, reject) => {
		ApiCall(APPROVE_VISITOR, "post", submitData)
			.then((res) => {
				resolve(res.data);
			})
			.catch((err) => {
				reject();
			});
	});
};
