import { usePaginationContext } from "./usePaginationContext";

export const useList = <T extends any>(): T[] => {
    const { store } = usePaginationContext();
    return store.currentItems as T[];
};
