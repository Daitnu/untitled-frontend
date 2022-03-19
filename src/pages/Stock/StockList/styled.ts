import styled from 'styled-components';
import { CommonDiv } from '~/globalStyles';

export const Wrap = styled.div`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
`;

export const ContainerMiddle = styled(CommonDiv)`
  padding: 0.5rem;
  width: 50%;
`;

export const Section = styled(CommonDiv)`
  &:first-child {
    margin-top: 1rem;
  }

  & + & {
    margin-top: 1rem;
    display: flex;
    flex-direction: column;
    flex-grow: 1;
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
