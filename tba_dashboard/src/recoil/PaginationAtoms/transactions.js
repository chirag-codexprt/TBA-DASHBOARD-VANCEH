import { toast } from "react-toastify";
import { atom, selector, selectorFamily } from "recoil";
import { getTransaction } from "../../helper/api/transaction";
// Transaction PAGINATION
export const transactionActivePageAtom = atom({
  key: "transactionActivePage",
  default: 1,
});

export const transactionFilterAtom = atom({
  key: "transactionFilterAtom",
  default: null,
});

export const toReloadTransactionData = atom({
  key: "toReloadTransactionData",
  default: 0,
});

export const transactionPaginationData = selectorFamily({
  key: "transactionPaginationData",
  get:
    (id = null) =>
    async ({ get, set }) => {
      get(toReloadTransactionData);
      const currentPage = get(transactionActivePageAtom);
      const filter = get(transactionFilterAtom);

      const apiData = await getTransaction(currentPage, filter, id);
      if (apiData.data.success) {
        return apiData.data.data;
      } else if (!apiData.data.success) {
        // toast.error(apiData.data.message);
      }
    },
});

export const transactionPrevPageSelector = selector({
  key: "transactionPrevPage",
  get: ({ get }) => {
    return get(transactionActivePageAtom) == 1
      ? null
      : get(transactionActivePageAtom) - 1;
  },
});

export const transactionNextPageSelector = selectorFamily({
  key: "transactionNextPage",
  get:
    (totalPages) =>
    ({ get }) => {
      return get(transactionActivePageAtom) == totalPages && totalPages
        ? null
        : get(transactionActivePageAtom) + 1;
    },
});

export const transactionShowFirstPageSelector = selector({
  key: "transactionShowFirstPage",
  get: ({ get }) => {
    return get(transactionActivePageAtom) == 1 ? false : true;
  },
});

export const transactionShowLastPageSelector = selectorFamily({
  key: "transactionShowLastPage",
  get:
    (totalPages) =>
    ({ get }) => {
      return get(transactionActivePageAtom) == totalPages && totalPages
        ? false
        : true;
    },
});

// ADMIN PAGINATION
