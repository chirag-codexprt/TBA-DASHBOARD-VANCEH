import { atom, selector, selectorFamily } from "recoil";
import { getOwners } from "../../helper/api/getUsers";

export const ownerActivePageAtom = atom({
  key: "ownerActivePage",
  default: 1,
});

export const ownerPrevPageSelector = selector({
  key: "ownerPrevPage",
  get: ({ get }) => {
    return get(ownerActivePageAtom) == 1 ? null : get(ownerActivePageAtom) - 1;
  },
});

export const toReloadOwnerData = atom({
  key: "toReloadOwnerData",
  default: 0,
});

export const ownersPaginationData = selectorFamily({
  key: "ownersPaginationData",
  get:
    (id = null) =>
    async ({ get, set }) => {
      get(toReloadOwnerData);
      const currentPage = get(ownerActivePageAtom);
      const apiData = await getOwners(currentPage, id);

      return apiData.data.data;
    },
});

export const ownerNextPageSelector = selectorFamily({
  key: "ownerNextPage",
  get:
    (totalPages) =>
    ({ get }) => {
      return get(ownerActivePageAtom) == totalPages && totalPages
        ? null
        : get(ownerActivePageAtom) + 1;
    },
});

export const ownerShowFirstPageSelector = selector({
  key: "ownerShowFirstPage",
  get: ({ get }) => {
    return get(ownerActivePageAtom) == 1 ? false : true;
  },
});

export const ownerShowLastPageSelector = selectorFamily({
  key: "ownerShowLastPage",
  get:
    (totalPages) =>
    ({ get }) => {
      return get(ownerActivePageAtom) == totalPages && totalPages
        ? false
        : true;
    },
});
