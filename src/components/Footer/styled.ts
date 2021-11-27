import styled from 'styled-components';
import { COLOR } from '~/constants';

export const Container = styled.div`
  position: fixed;
  bottom: 0;
  width: 100%;
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${COLOR.DARK};
  color: ${COLOR.GRAY_TEXT};
`;
