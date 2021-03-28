import React from 'react';
import * as S from './styled';

const Header = () => {
  return (
    <S.Header>
      <S.Container>
        <S.flexItem>Untitled Project</S.flexItem>
        <S.flexItem>News</S.flexItem>
        <S.flexItem>Ranking</S.flexItem>
        <S.flexItem>Group</S.flexItem>
        <S.flexItem>Mypage</S.flexItem>
      </S.Container>
    </S.Header>
  );
};

export default Header;
