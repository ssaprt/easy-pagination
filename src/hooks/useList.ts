import { usePaginationContext } from "./usePaginationContext";

export const useList = <T = React.ReactNode>(): T[] => {
    const { store } = usePaginationContext();
    return store.currentItems as T[];
};
