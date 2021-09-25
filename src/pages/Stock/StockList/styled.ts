import styled from 'styled-components';
import { CommonDiv } from '~/globalStyles';

export const Wrap = styled.div`
  min-height: 600px;
`;

export const ContainerMiddle = styled(CommonDiv)`
  padding: 0.5rem;
  width: 95%;
  margin: auto;
`;

export const ContainerWide = styled(CommonDiv)`
  width: 99%;
  max-width: 2300px;
  margin: auto;
`;

export const Section = styled(CommonDiv)`
  &:first-child {
    margin-top: 1rem;
  }

  & + & {
    margin-top: 1rem;
  }
`;

export const AdditionalFeatures = styled.div`
  margin-bottom: 10px;
  height: 35px;
`;

export const Calander = styled.button`
  height: inherit;
  border: none;
  background: #dbe4ff;
  width: 200px;
  font-size: 1.2rem;
  color: black;
  font-weight: bold;
`;
