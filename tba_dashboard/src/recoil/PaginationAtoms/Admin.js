import { atom, selector, selectorFamily } from "recoil";
import { getAdmins } from "../../helper/api/getUsers";

export const adminActivePageAtom = atom({
  key: "adminActivePage",
  default: 1,
});

export const toReloadAdminData = atom({
  key: "toReloadAdminData",
  default: 0,
});

export const adminPaginationData = selectorFamily({
  key: "adminPaginationData",
  get:
    (id = null) =>
    async ({ get, set }) => {
      get(toReloadAdminData);
      const currentPage = get(adminActivePageAtom);
      const apiData = await getAdmins(currentPage, id);

      return apiData.data.data;
    },
});

export const adminPrevPageSelector = selector({
  key: "adminPrevPage",
  get: ({ get }) => {
    return get(adminActivePageAtom) == 1 ? null : get(adminActivePageAtom) - 1;
  },
});

export const adminNextPageSelector = selectorFamily({
  key: "adminNextPage",
  get:
    (totalPages) =>
    ({ get }) => {
      return get(adminActivePageAtom) == totalPages && totalPages
        ? null
        : get(adminActivePageAtom) + 1;
    },
});

export const adminShowFirstPageSelector = selector({
  key: "adminShowFirstPage",
  get: ({ get }) => {
    return get(adminActivePageAtom) == 1 ? false : true;
  },
});

export const adminShowLastPageSelector = selectorFamily({
  key: "adminShowLastPage",
  get:
    (totalPages) =>
    ({ get }) => {
      return get(adminActivePageAtom) == totalPages && totalPages
        ? false
        : true;
    },
});
