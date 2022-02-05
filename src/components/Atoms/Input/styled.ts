import styled from 'styled-components';

interface InputProps {
  width: number;
  height: number;
  padding: number;
}

export const Input = styled.input<InputProps>`
  width: ${({ width }) => width}px;
  height: ${({ height }) => height}px;
  border: none;
  outline: none;
  box-sizing: border-box;
  padding: 0 ${({ padding }) => padding}px;
  display: flex;
  align-items: center;
`;
