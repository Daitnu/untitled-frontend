import styled from 'styled-components';
import { COLOR } from '~/constants';

export const Container = styled.div`
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${COLOR.DARK};
  color: ${COLOR.GRAY_TEXT};
`;
