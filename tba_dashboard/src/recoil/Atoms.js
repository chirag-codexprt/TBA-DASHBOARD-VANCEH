import { atom } from "recoil";
import { recoilPersist } from "recoil-persist";

const { persistAtom } = recoilPersist();

export const loginAtom = atom({
	key: "login", // unique ID (with respect to other atoms/selectors)
	default: null, // default value (aka initial value)
	effects_UNSTABLE: [persistAtom],
});

export const jwtAtom = atom({
	key: "jwt",
	default: "",
	effects_UNSTABLE: [persistAtom],
});
