import styled from 'styled-components';

interface CommonDiv {
  bgColor?: string;
  border?: string;
}

export const CommonDiv = styled.div<CommonDiv>`
  background-color: ${(props) => props.bgColor};
  border: ${(props) => props.border};
`;
