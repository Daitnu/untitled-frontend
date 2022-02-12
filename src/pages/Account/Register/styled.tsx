import styled from 'styled-components';
import * as GS from '~/globalStyles';
import nameIcon from 'Assets/images/accounts/name.png';

export const RegisterButton = styled.div`
  width: 30%;
  height: 40px;
  background-color: #4786ff;
  border: none;
  border-radius: 8px;
  color: white;
  outline: none;
  cursor: pointer;
  margin-top: 10px;
  width: 100%;
`;

export const UserNameIcon = styled(GS.IconStyle)`
  background-image: url(${nameIcon});
`;
