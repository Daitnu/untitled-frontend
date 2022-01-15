import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { PATH_URL } from '~/constants';
import storage from '~/libraries/store';
import * as S from './styled';
import { useTranslation } from 'react-i18next';
import i18n from 'i18next';
import { Button } from 'antd';
import { apiInstance } from '~/libraries/api';

const Header = () => {
  const { t } = useTranslation();

  useEffect(() => {
    if (storage.local.get('accessToken')) {
      apiInstance.post({ url: '/reissue', data: { accessToken: storage.local.get('accessToken') } });
    }
  }, []);

  return (
    <S.Header>
      <S.Container>
        <S.flexItem>
          <Link to={PATH_URL.HOME}>Untitled Project</Link>
        </S.flexItem>
        {/* <S.flexItem>
          <Link to="/news">News</Link>
        </S.flexItem>
        <S.flexItem>
          <Link to="/ranking">Ranking</Link>
        </S.flexItem>
        <S.flexItem>
          <Link to="/group">Group</Link>
        </S.flexItem>
        <S.flexItem>
          <Link to="/mypage">Mypage</Link>
        </S.flexItem> */}
        <S.flexItem>
          <Link to={PATH_URL.LOGIN}>{t('HEADER.LOGIN')}</Link>
        </S.flexItem>

        <Button onClick={() => i18n.changeLanguage(i18n.language === 'en' ? 'ko' : 'en')}>{i18n.language}</Button>
      </S.Container>
    </S.Header>
  );
};

export default Header;
