export const localStorageSet = (key: string, value: Object): void => {
  localStorage.setItem(key, JSON.stringify(value));
};

export const localStorageGet = (key: string): Object | boolean => {
  const values: string = localStorage.getItem(key) || '{}';

  try {
    return JSON.parse(values);
  } catch (error) {}
  return false;
};

export const localStorageClear = (): void => localStorage.clear();

export const localStorageRemove = (key: string) => localStorage.removeItem(key);
