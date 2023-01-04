const config = {
	TIMEZONE: "America/Sao_Paulo",
};

const envData = (ENV, local, test, production) => {
	if (ENV === "local") {
		return local;
	} else if (ENV === "test") {
		return test;
	} else if (ENV === "production") {
		return production;
	} else {
		console.log(new Error("Something went wrong with credentials"));
	}
};

export const ENV_TYPE = "local"; // local // test // production

export const BASE_URL = envData(
	ENV_TYPE,
	"http://192.168.1.102:3006/api/v1/",
	"http://inova-backend-test.sa-east-1.elasticbeanstalk.com/api/v1/",
	""
);
console.log(BASE_URL);

export default config;
