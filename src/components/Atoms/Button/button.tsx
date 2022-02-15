import React from 'react';
import * as S from './styled';

interface IButton {
  children?: string;
  height?: number;
  marginTop?: number;
  border?: string;
  borderRadius?: number;
  backgroundColor?: string;
  outline?: string;
  cursor?: string;
  fontSize?: number;
  lineHeight?: number;
  color?: string;
}

const Button: React.FC<IButton> = ({
  children,
  height,
  marginTop,
  fontSize,
  lineHeight,
  color,
  cursor,
  border,
  backgroundColor,
  outline,
  borderRadius,
}) => {
  return (
    <S.Button
      height={height}
      marginTop={marginTop}
      fontSize={fontSize}
      lineHeight={lineHeight}
      color={color}
      backgroundColor={backgroundColor}
      border={border}
      borderRadius={borderRadius}
      outline={outline}
      cursor={cursor}>
      {children}
    </S.Button>
  );
};

export default Button;
