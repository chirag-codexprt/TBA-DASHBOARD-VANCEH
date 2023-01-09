import { AfterAuthApi } from "../index";
import { DOCUMENT_LIST, APPROVED_DOCUMENT } from "../url";

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

export const approvedDocumentList = (submitData) => {
	return new Promise((resolve, reject) => {
		AfterAuthApi(APPROVED_DOCUMENT, "post", submitData)
			.then((res) => {
				resolve(res.data);
			})
			.catch((err) => {
				reject();
			});
	});
};
