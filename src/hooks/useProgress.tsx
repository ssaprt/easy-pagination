import { reaction } from "mobx";
import { useEffect, useState } from "react";
import { usePaginationContext } from "./usePaginationContext";

export type ProgressType = {
    start: boolean;
    progress: number;
    end: boolean;
};

export const useProgress = (): ProgressType => {
    const { store } = usePaginationContext();

    const [state, setState] = useState<ProgressType>({
        start: store.startAnim,
        progress: store.progress,
        end: !store.startAnim,
    });

    useEffect(() => {
        const disposer = reaction(
            () => [store.startAnim, store.progress],
            () => {
                setState({
                    start: store.startAnim,
                    progress: store.progress,
                    end: !store.startAnim,
                });
            },
        );

        return disposer;
    }, [store]);

    return state;
};
