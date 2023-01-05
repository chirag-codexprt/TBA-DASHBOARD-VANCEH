import { atom, selector, selectorFamily } from "recoil";
import { getAdminGasStation } from "../../helper/api/getUsers";

export const gasStationActivePageAtom = atom({
  key: "gasStationActivePage",
  default: 1,
});

export const toReloadGasStationData = atom({
  key: "toReloadGasStationData",
  default: 0,
});

export const gasStationPaginationData = selectorFamily({
  key: "gasStationPaginationData",
  get:
    (id = null) =>
      async ({ get }) => {
        get(toReloadGasStationData);
        const currentPage = get(gasStationActivePageAtom);
        const apiData = await getAdminGasStation(currentPage, id);

        return apiData.data.data;
      },
});

export const gasStationPrevPageSelector = selector({
  key: "gasStationPrevPage",
  get: ({ get }) => {
    return get(gasStationActivePageAtom) == 1
      ? null
      : get(gasStationActivePageAtom) - 1;
  },
});

export const gasStationNextPageSelector = selectorFamily({
  key: "gasStationNextPage",
  get:
    (totalPages) =>
      ({ get }) => {
        return get(gasStationActivePageAtom) == totalPages && totalPages
          ? null
          : get(gasStationActivePageAtom) + 1;
      },
});

export const gasStationShowFirstPageSelector = selector({
  key: "gasStationShowFirstPage",
  get: ({ get }) => {
    return get(gasStationActivePageAtom) == 1 ? false : true;
  },
});

export const gasStationShowLastPageSelector = selectorFamily({
  key: "gasStationShowLastPage",
  get:
    (totalPages) =>
      ({ get }) => {
        return get(gasStationActivePageAtom) == totalPages && totalPages
          ? false
          : true;
      },
});
