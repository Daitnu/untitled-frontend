import { message } from 'antd';
import React, { useEffect } from 'react';
import { PATH_URL } from '~/constants';
import API_PATH from '~/constants/path';
import { apiInstance, history } from '~/libraries/api';

const LogoutPage: React.FC = () => {
  useEffect(() => {
    apiInstance
      .get({ url: API_PATH.ACCOUNT.LOGOUT })
      .then(() => {
        localStorage.removeItem('accessToken');
        localStorage.removeItem('grantType');
        history.push(PATH_URL.LOGIN);
      })
      .catch(() => {
        message.error('서버에러입니다.', 10);
      });
  }, []);

  return <></>;
};

export default LogoutPage;
