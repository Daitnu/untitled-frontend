import React from 'react';
import { Link } from 'react-router-dom';
import { PATH_URL } from '~/constants';
import * as S from './styled';

const Header = () => {
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
          <Link to={PATH_URL.LOGIN}>Login</Link>
        </S.flexItem>
      </S.Container>
    </S.Header>
  );
};

export default Header;
