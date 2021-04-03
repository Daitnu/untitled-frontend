import React from 'react';
import { Link } from 'react-router-dom';
import * as S from './styled';

const Header = () => {
  return (
    <S.Header>
      <S.Container>
        <S.flexItem>
          <Link to="/">Untitled Project</Link>
        </S.flexItem>
        <S.flexItem>
          <Link to="/news">News</Link>
        </S.flexItem>
        <S.flexItem>
          <Link to="/Ranking">Ranking</Link>
        </S.flexItem>
        <S.flexItem>
          <Link to="/Group">Group</Link>
        </S.flexItem>
        <S.flexItem>
          <Link to="/Mypage">Mypage</Link>
        </S.flexItem>
      </S.Container>
    </S.Header>
  );
};

export default Header;
