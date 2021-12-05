const localStorageSet = (key: string, value: Object): void => {
  localStorage.setItem(key, JSON.stringify(value));
};

const localStorageGet = (key: string): Object | boolean => {
  const values: string = localStorage.getItem(key) || '{}';

  try {
    return JSON.parse(values);
  } catch (error) {}
  return false;
};

const localStorageClear = (): void => localStorage.clear();

const localStorageRemove = (key: string) => localStorage.removeItem(key);

const sessionStorageSet = (key: string, value: Object): void => {
  sessionStorage.setItem(key, JSON.stringify(value));
};

const sessionStorageGet = (key: string): Object | boolean => {
  const values: string = sessionStorage.getItem(key) || '{}';

  try {
    return JSON.parse(values);
  } catch (error) {}
  return false;
};

const sessionStorageClear = (): void => sessionStorage.clear();

const sessionStorageRemove = (key: string) => sessionStorage.removeItem(key);

const local = {
  set: localStorageSet,
  get: localStorageGet,
  clear: localStorageClear,
  remove: localStorageRemove,
};

const session = {
  set: sessionStorageSet,
  get: sessionStorageGet,
  clear: sessionStorageClear,
  remove: sessionStorageRemove,
};

export default {
  local,
  session,
};
