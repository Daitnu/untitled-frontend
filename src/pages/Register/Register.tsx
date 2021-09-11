import React from 'react';
import * as LS from '../Login/styled';
import * as GS from '~/globalStyles';
import { RegisterForm } from '~/components/Forms/Register';
import backgoundImage from 'Assets/back.jpg';

const RegisterPage: React.FC = () => {
  return (
    <GS.FullScreenWrap bg={backgoundImage}>
      <LS.CenterWrap>
        <LS.LoginFormArea>
          <RegisterForm />
        </LS.LoginFormArea>
        <LS.BackgoundImage />
      </LS.CenterWrap>
    </GS.FullScreenWrap>
  );
};

export default RegisterPage;
