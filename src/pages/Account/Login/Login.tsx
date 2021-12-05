import React from 'react';
import * as S from './styled';
import * as GS from '~/globalStyles';
import LoginForm from '~/components/Forms/Login/LoginForm';
import backgoundImage from 'Assets/back.jpg';
import { ThreeLayerTemplate } from '~/components/templates';

const LoginPage: React.FC = () => {
  return (
    <ThreeLayerTemplate>
      <GS.FullScreenWrap bg={backgoundImage}>
        <S.CenterWrap>
          <S.LoginFormArea>
            <LoginForm />
          </S.LoginFormArea>
          <S.BackgoundImage />
        </S.CenterWrap>
      </GS.FullScreenWrap>
    </ThreeLayerTemplate>
  );
};

export default LoginPage;
