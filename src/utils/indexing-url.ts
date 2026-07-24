const getRelativeUrl = (url: URL): string => {
    return `${url.pathname}${url.search}${url.hash}`;
};

export const getUrlParameter = (key: string): string | null => {
    if (typeof window === "undefined") {
        return null;
    }

    const url = new URL(window.location.href);

    return url.searchParams.get(key);
};

export const setUrlParameter = (key: string, value: string): void => {
    if (typeof window === "undefined") {
        return;
    }

    const url = new URL(window.location.href);

    if (url.searchParams.get(key) === value) {
        return;
    }

    url.searchParams.set(key, value);

    window.history.replaceState(window.history.state, "", getRelativeUrl(url));
};

export const removeUrlParameter = (key: string): void => {
    if (typeof window === "undefined") {
        return;
    }

    const url = new URL(window.location.href);

    if (!url.searchParams.has(key)) {
        return;
    }

    url.searchParams.delete(key);

    window.history.replaceState(window.history.state, "", getRelativeUrl(url));
};
