import styled from 'styled-components';

interface DivProps {
  height: number;
  marginTop: number;
  fontSize: number;
  lineHeight: number;
  color: string;
}

export const Label = styled.div<DivProps>`
  height: ${({ height }) => height}px;
  margin-top: ${({ marginTop }) => marginTop}px;
  font-size: ${({ fontSize }) => fontSize}px;
  line-height: ${({ lineHeight }) => lineHeight}px;
  color: red;
`;
