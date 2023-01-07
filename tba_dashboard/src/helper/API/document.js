import { AfterAuthApi } from "../index";
import { DOCUMENT_LIST } from "../url";

export const getDocumentList = (submitData) => {
	return new Promise((resolve, reject) => {
		AfterAuthApi(DOCUMENT_LIST, "post", submitData)
			.then((res) => {
				resolve(res.data);
			})
			.catch((err) => {
				reject();
			});
	});
};
