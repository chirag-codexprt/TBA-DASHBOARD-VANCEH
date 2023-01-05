import { atom, selector, selectorFamily } from "recoil";
import { recoilPersist } from "recoil-persist";
import {
  getBalance,
  getBalanceTransferRequest,
} from "../../helper/api/transaction";
const { persistAtom } = recoilPersist();

export const balanceTransferActivePageAtom = atom({
  key: "balanceTransferActivePage",
  default: 1,
});

export const toReloadTransferBalanceData = atom({
  key: "toReloadTransferBalanceData",
  default: 0,
});

export const toReloadGetBalanceData = atom({
  key: "toReloadGetBalanceData",
  default: 0,
});

export const transferBalancePaginationData = selectorFamily({
  key: "transferBalancePaginationData",

  get:
    () =>
    async ({ get, set }) => {
      get(toReloadTransferBalanceData);
      const currentPage = get(balanceTransferActivePageAtom);
      const apiData = await getBalanceTransferRequest(currentPage);
      return apiData.data.data;
    },

  effects_UNSTABLE: [persistAtom],
});
export const getBalanceData = selectorFamily({
  key: "getBalanceData",

  get:
    () =>
    async ({ get, set }) => {
      get(toReloadGetBalanceData);
      const apiData = await getBalance();
      return apiData.data.data;
    },

  effects_UNSTABLE: [persistAtom],
});

export const balanceTransferPrevPageSelector = selector({
  key: "balanceTransferPrevPage",

  get: ({ get }) => {
    return get(balanceTransferActivePageAtom) == 1
      ? null
      : get(balanceTransferActivePageAtom) - 1;
  },
});

export const balanceTransferNextPageSelector = selectorFamily({
  key: "balanceTransferNextPage",
  get:
    (totalPages) =>
    ({ get }) => {
      return get(balanceTransferActivePageAtom) == totalPages && totalPages
        ? null
        : get(balanceTransferActivePageAtom) + 1;
    },
});

export const balanceTransferShowFirstPageSelector = selector({
  key: "balanceTransferShowFirstPage",
  get: ({ get }) => {
    return get(balanceTransferActivePageAtom) == 1 ? false : true;
  },
});

export const balanceTransferShowLastPageSelector = selectorFamily({
  key: "balanceTransferShowLastPage",
  get:
    (totalPages) =>
    ({ get }) => {
      return get(balanceTransferActivePageAtom) == totalPages && totalPages
        ? false
        : true;
    },
});
