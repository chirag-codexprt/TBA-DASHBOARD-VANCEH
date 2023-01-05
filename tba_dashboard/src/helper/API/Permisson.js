import { AfterAuthApi, ApiCall } from "../index";
import { PERMISSON_TABLE } from "../url";

export const permissonTable = (submitData) => {
    return new Promise((resolve, reject) => {
        AfterAuthApi(PERMISSON_TABLE, "post", submitData)
            .then((res) => {
                resolve(res.data);
            })
            .catch((err) => {
                reject();
            });
    });
};