import { useLocation } from 'react-router';

function useQueryParam<T extends object>(): T {
  const { search } = useLocation();

  if (search === '') {
    return {} as T;
  }

  const obj: object = {};

  search
    .substring(1)
    .split('&')
    .forEach((s) => {
      const [k, v] = s.split('=');
      obj[k] = v;
    });

  return obj as T;
}

export default useQueryParam;
