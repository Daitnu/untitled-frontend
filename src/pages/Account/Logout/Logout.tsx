import { message } from 'antd';
import React, { useEffect } from 'react';
import { PATH_URL } from '~/constants';
import API_PATH from '~/constants/path';
import { apiInstance, history } from '~/libraries/api';

const LogoutPage: React.FC = () => {
  useEffect(() => {
    const accessToken = localStorage.getItem('accessToken');
    const grantType = localStorage.getItem('grantType');
    const authorizationHeader = accessToken ? `${grantType} ${accessToken}` : '';
    apiInstance
      .get({ url: API_PATH.ACCOUNT.LOGOUT, token: authorizationHeader })
      .catch(() => {
        message.error('서버에러입니다.', 10);
      })
      .finally(() => {
        localStorage.removeItem('accessToken');
        localStorage.removeItem('grantType');
        history.push(PATH_URL.LOGIN);
      });
  }, []);

  return <></>;
};

export default LogoutPage;
