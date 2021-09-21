import styled from 'styled-components';
import { COLOR } from '~/constants';

export const Header = styled.div`
  height: 50px;
  background-color: ${COLOR.DARK};
  /* margin-bottom: 20px; */
`;

export const Container = styled.div`
  width: 90%;
  margin: auto;
  height: inherit;
  display: flex;
  font-size: 1em;
  font-weight: bold;
  color: white;
`;

export const flexItem = styled.div`
  flex-basis: 200px;
  height: inherit;
  display: flex;
  align-items: center;
`;
