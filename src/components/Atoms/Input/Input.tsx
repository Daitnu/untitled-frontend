import React from 'react';
import * as S from './styled';

interface IInput {
  width: number;
  height: number;
  padding: number;
}

const Input: React.FC<IInput> = ({ width, height, padding }) => {
  return <S.Input width={width} height={height} padding={padding} />;
};

export default Input;
