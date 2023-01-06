import { AfterAuthApi } from "../index";
import { GET_CONTACT } from "../url";

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
