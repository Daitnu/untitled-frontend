import styled from 'styled-components';

interface ButtonProps {
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

export const Button = styled.div<ButtonProps>`
  height: ${({ height }) => height}px;
  margin-top: ${({ marginTop }) => marginTop}px;
  font-size: ${({ fontSize }) => fontSize}px;
  line-height: ${({ lineHeight }) => lineHeight}px;
  border-radius: ${({ borderRadius }) => borderRadius}px;
  color: ${({ color }) => color};
  cursor: ${({ cursor }) => cursor};
  border: ${({ border }) => border};
  background-color: ${({ backgroundColor }) => backgroundColor};
  outline: ${({ outline }) => outline};
`;
