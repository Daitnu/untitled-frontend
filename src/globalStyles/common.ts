import styled from 'styled-components';

interface CommonDiv {
  bgColor?: string;
  border?: string;
  margin?: string;
}

export const CommonDiv = styled.div<CommonDiv>`
  background-color: ${(props) => props.bgColor};
  border: ${(props) => props.border};
  margin: ${(props) => props.margin};
`;
