import { AfterAuthApi } from "../index";
import { GET_CONTACT, GENERATE_LINK } from "../url";

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
