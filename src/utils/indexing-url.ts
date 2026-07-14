export const getUrlParameter = (name: string): string | null => {
    name = name.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
    const regex = new RegExp("[\\?&]" + name + "=([^&#]*)");
    const results = regex.exec(window.location.search);
    return results === null
        ? null
        : decodeURIComponent(results[1].replace(/\+/g, " "));
};

export const setUrlParameter = (name: string, value: string) => {
    const url = new URL(window.location.href);
    url.searchParams.set(name, value);
    window.history.replaceState({}, "", url);
};

export const removeUrlParameter = (name: string) => {
    const url = new URL(window.location.href);
    url.searchParams.delete(name);
    window.history.replaceState({}, "", url);
};
