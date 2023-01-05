import { atom, selector, selectorFamily } from "recoil";
import { getCashiers } from "../../helper/api/getUsers";

export const cashierActivePageAtom = atom({
  key: "cashierActivePage",
  default: 1,
});

export const toReloadCashierData = atom({
  key: "toReloadCashierData",
  default: 0,
});

export const cashiersPaginationData = selectorFamily({
  key: "cashiersPaginationData",
  get:
    (id = null) =>
    async ({ get, set }) => {
      get(toReloadCashierData);
      const currentPage = get(cashierActivePageAtom);
      const apiData = await getCashiers(currentPage, id);

      return apiData.data.data;
    },
});

export const cashierPrevPageSelector = selector({
  key: "cashierPrevPage",
  get: ({ get }) => {
    return get(cashierActivePageAtom) == 1
      ? null
      : get(cashierActivePageAtom) - 1;
  },
});

export const cashierNextPageSelector = selectorFamily({
  key: "cashierNextPage",
  get:
    (totalPages) =>
    ({ get }) => {
      return get(cashierActivePageAtom) == totalPages && totalPages
        ? null
        : get(cashierActivePageAtom) + 1;
    },
});

export const cashierShowFirstPageSelector = selector({
  key: "cashierShowFirstPage",
  get: ({ get }) => {
    return get(cashierActivePageAtom) == 1 ? false : true;
  },
});

export const cashierShowLastPageSelector = selectorFamily({
  key: "cashierShowLastPage",
  get:
    (totalPages) =>
    ({ get }) => {
      return get(cashierActivePageAtom) == totalPages && totalPages
        ? false
        : true;
    },
});
