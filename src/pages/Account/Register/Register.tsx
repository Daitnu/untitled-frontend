import React from 'react';
import * as LS from '../Login/styled';
import * as GS from '~/globalStyles';
import { RegisterForm } from '~/components/Forms/Register';
import backgoundImage from 'Assets/back.jpg';
import { ThreeLayerTemplate } from '~/components/templates';

const RegisterPage: React.FC = () => {
  return (
    <ThreeLayerTemplate>
      <GS.FullScreenWrap bg={backgoundImage}>
        <LS.CenterWrap>
          <LS.LoginFormArea>
            <RegisterForm />
          </LS.LoginFormArea>
          <LS.BackgoundImage />
        </LS.CenterWrap>
      </GS.FullScreenWrap>
    </ThreeLayerTemplate>
  );
};

export default RegisterPage;
