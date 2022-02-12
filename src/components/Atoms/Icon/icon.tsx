import React from 'react';
import * as S from './styled';

interface IIcon {
  image?: any;
  width: number;
  height: number;
  borderRight: string;
}

const Icon: React.FC<IIcon> = ({ image, width, height, borderRight }) => {
  return (
    <S.IconContainer width={width} height={height} borderRight={borderRight}>
      <S.Icon image={image}></S.Icon>
    </S.IconContainer>
  );
};

export default Icon;
