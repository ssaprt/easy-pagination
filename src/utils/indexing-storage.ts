export const getStoragePage = (name: string) => {
    return localStorage.getItem(name);
};

export const setStoragePage = (name: string, value: string) => {
    localStorage.setItem(name, value);
};

export const removeStoragePage = (name: string) => {
    localStorage.removeItem(name);
};
