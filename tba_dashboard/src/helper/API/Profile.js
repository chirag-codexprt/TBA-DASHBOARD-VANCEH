import { AfterAuthApi, ApiCall } from "../index";
import { CHANGE_PASSWORD } from "../url";

export const passwordChange = (submitData) => {
    console.log('su', submitData);
    return new Promise((resolve, reject) => {
        AfterAuthApi(CHANGE_PASSWORD, "post", submitData)
            .then((res) => {
                resolve(res.data);
            })
            .catch((err) => {
                reject();
            });
    });
};
