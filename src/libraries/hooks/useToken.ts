import { useEffect, useState } from 'react';

interface IUseLogin {
  email: string;
  userId: string;
  nickname: string;
}

const useToken = (): IUseLogin | null => {
  const [tokenData, setTokenData] = useState<IUseLogin | null>(null);

  useEffect(() => {
    const getUserTokenData = () => {
      const accessToken = localStorage.getItem('accessToken');
      if (accessToken !== null) {
        const base64Url = accessToken.split('.')[1];
        const base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
        const jsonPayload = decodeURIComponent(
          atob(base64)
            .split('')
            .map(function (c) {
              return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
            })
            .join(''),
        );
        const { email, userId, nickname } = JSON.parse(jsonPayload);
        setTokenData({
          email,
          userId,
          nickname,
        });
      } else {
        setTokenData(null);
      }
    };

    getUserTokenData();
    window.addEventListener('accessTokenChanged', getUserTokenData);
    return () => {
      window.removeEventListener('accessTokenChanged', getUserTokenData);
    };
  }, []);

  return tokenData;
};

export default useToken;
