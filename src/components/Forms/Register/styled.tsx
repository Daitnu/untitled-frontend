import styled from 'styled-components';
import * as LS from '../Login/styled';
import * as GS from '~/globalStyles';
import nameIcon from 'Assets/images/accounts/name.png';

export const RegisterButton = styled(LS.LoginButton)`
  margin-top: 10px;
  width: 100%;
`;

export const UserNameIcon = styled(GS.IconStyle)`
  background-image: url(${nameIcon});
`;

export const ErrorMsg = styled.div`
  margin-top: 4px;
  height: 16px;
  font-size: 12px;
  line-height: 16px;
  color: red;
`;
