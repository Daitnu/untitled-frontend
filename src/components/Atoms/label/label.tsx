import React from 'react';
import * as S from './styled';

interface ILabel {
  children?: string;
  height: number;
  marginTop: number;
  fontSize: number;
  lineHeight: number;
  color: string;
}

const Label: React.FC<ILabel> = ({ children, height, marginTop, fontSize, lineHeight, color }) => {
  return (
    <S.Label height={height} marginTop={marginTop} fontSize={fontSize} lineHeight={lineHeight} color={color}>
      {children}
    </S.Label>
  );
};

export default Label;
