import { atom, selector, selectorFamily } from "recoil";
import { getManagers } from "../../helper/api/getUsers";

export const managerActivePageAtom = atom({
  key: "managerActivePage",
  default: 1,
});

export const toReloadManagerData = atom({
  key: "toReloadManagerData",
  default: 0,
});

export const managersPaginationData = selectorFamily({
  key: "managersPaginationData",
  get:
    (id = null) =>
    async ({ get, set }) => {
      get(toReloadManagerData);
      const currentPage = get(managerActivePageAtom);
      const apiData = await getManagers(currentPage, id);

      return apiData.data.data;
    },
});

export const managerPrevPageSelector = selector({
  key: "managerPrevPage",
  get: ({ get }) => {
    return get(managerActivePageAtom) == 1
      ? null
      : get(managerActivePageAtom) - 1;
  },
});

export const managerNextPageSelector = selectorFamily({
  key: "managerNextPage",
  get:
    (totalPages) =>
    ({ get }) => {
      return get(managerActivePageAtom) == totalPages && totalPages
        ? null
        : get(managerActivePageAtom) + 1;
    },
});

export const managerShowFirstPageSelector = selector({
  key: "managerShowFirstPage",
  get: ({ get }) => {
    return get(managerActivePageAtom) == 1 ? false : true;
  },
});

export const managerShowLastPageSelector = selectorFamily({
  key: "managerShowLastPage",
  get:
    (totalPages) =>
    ({ get }) => {
      return get(managerActivePageAtom) == totalPages && totalPages
        ? false
        : true;
    },
});
