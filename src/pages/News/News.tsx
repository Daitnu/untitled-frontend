import React from 'react';
import * as S from './styled';

const News: React.FC = () => {
  return (
    <>
      <S.Container>
        <button>글등록</button>
        <button>내 게시글보기</button>
        <button>내 댓글보기</button>
      </S.Container>
    </>
  );
};

export default News;
