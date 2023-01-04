import { ApiCall } from "../index";
import { LOGIN_ADMIN } from "../url";

export const loginAdmin = (submitData) => {
	return new Promise((resolve, reject) => {
		ApiCall(LOGIN_ADMIN, "post", submitData)
			.then((res) => {
				resolve(res.data);
			})
			.catch((err) => {
				reject();
			});
	});
};
