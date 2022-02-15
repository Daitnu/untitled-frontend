import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import * as S from './styled';
import * as GS from '~/globalStyles';
import backgoundImage from 'Assets/back.jpg';
import { ThreeLayerTemplate } from '~/components/templates';

import { KEY_CODE, PATH_URL } from '~/constants';
import validation from '~/libraries/validation';
import { useDispatch, useSelector } from 'react-redux';
import { accountLoginPostClear, accountLoginPostRequest } from '~/store/account/login';
import { IValidations } from '~/@types/libraries';
import { RootState } from '~/store';
import { message } from 'antd';
import { useTranslation } from 'react-i18next';
import FormInput from '~/components/Molecules/FormInput';

import userIcon from 'Assets/images/accounts/user.png';
import passwordIcon from 'Assets/images/accounts/password.png';
import emailIcon from 'Assets/images/accounts/email.png';
import facebookIcon from 'Assets/facebook.png';
import twitterIcon from 'Assets/twitter.png';
import googleIcon from 'Assets/google.png';

interface IUser {
  id: string;
  pw: string;
}

interface IError {
  id: string;
  pw: string;
}

const formValidation: IValidations = {
  id: {
    fieldName: '아이디',
    rules: [
      validation.rules.required,
      validation.rules.lengthMin(2),
      validation.rules.lengthMax(20),
      validation.rules.alphanumeric,
    ],
  },
  pw: {
    fieldName: '비밀번호',
    rules: [validation.rules.required, validation.rules.lengthMin(2), validation.rules.lengthMax(20)],
  },
};

const LoginPage: React.FC = () => {
  const { t } = useTranslation();

  const [userValues, setUserValues] = useState<IUser>({ id: '', pw: '' });
  const [errorMsg, setErrorMsg] = useState<IError>({ id: '', pw: '' });
  const loginApiState = useSelector((state: RootState) => state.account.login);
  const dispatch = useDispatch();

  useEffect(() => {
    if (loginApiState.errors?.message) {
      message.error(loginApiState.errors.message, 10);
      dispatch(accountLoginPostClear());
    }
  }, [loginApiState.errors]);

  const handleInputChange = ({ target: { id, value } }): void => {
    const fieldValidation = formValidation[id];
    const validationResult = validation.validator.field({ value, validation: fieldValidation });

    setErrorMsg({
      ...errorMsg,
      [id]: validationResult.isError ? validationResult.errors[0].reason : '',
    });
    setUserValues({
      ...userValues,
      [id]: value,
    });
  };

  const handlePasswordKeyDown = ({ keyCode }): void => {
    if (keyCode !== KEY_CODE.ENTER) return;
    handleSubmitClick();
  };

  const handleSubmitClick = async (): Promise<void> => {
    const validationResult = validation.validator.form({
      validations: formValidation,
      values: userValues,
    });
    if (validationResult.isError) {
      setErrorMsg({ ...errorMsg, [validationResult.errors[0].key!]: validationResult.errors[0].reason });
    } else {
      const { id, pw } = userValues;
      dispatch(accountLoginPostRequest({ id, password: pw }));
    }
  };

  return (
    <ThreeLayerTemplate>
      <GS.FullScreenWrap bg={backgoundImage}>
        <S.CenterWrap>
          <S.LoginFormArea>
            <div>
              <FormInput
                id="id"
                width={250}
                height={50}
                borderWidth={0}
                padding={10}
                placeholder={t('REGISTER.ID', '아이디')}
                maxLength={20}
                onChange={handleInputChange}
                icon={{ image: userIcon, width: 75, height: 50, borderRight: '2px solid #cfcdcb' }}
                isError={!!errorMsg.id}
                errorLabel={{
                  message: errorMsg.id,
                  height: 16,
                  marginTop: 4,
                  fontSize: 12,
                  lineHeight: 16,
                  color: 'red',
                }}
              />

              <FormInput
                type="password"
                id="pw"
                width={250}
                height={50}
                borderWidth={0}
                padding={10}
                placeholder={t('LOGIN.PW', '비밀번호')}
                maxLength={20}
                onChange={handleInputChange}
                onKeyDown={handlePasswordKeyDown}
                icon={{ image: passwordIcon, width: 75, height: 50, borderRight: '2px solid #cfcdcb' }}
                isError={!!errorMsg.pw}
                errorLabel={{
                  message: errorMsg.pw,
                  height: 16,
                  marginTop: 4,
                  fontSize: 12,
                  lineHeight: 16,
                  color: 'red',
                }}
              />
              <S.FormItem isDisplay="inline">
                <GS.SpaceBetweenWithFullWidth>
                  <GS.AlignCenter>
                    <S.AutoLoginCheckInputLabel htmlFor="autoLogin">
                      <S.AutoLoginCheckInput type="checkbox" id="autoLogin" />
                      {t('LOGIN.AUTO', '자동로그인')}
                    </S.AutoLoginCheckInputLabel>
                  </GS.AlignCenter>
                  <S.LoginButton type="submit" onClick={handleSubmitClick}>
                    {t('LOGIN.LOGIN', '로그인')}
                  </S.LoginButton>
                </GS.SpaceBetweenWithFullWidth>
              </S.FormItem>
              <S.FormItem>
                <GS.SpaceBetweenWithFullWidth>
                  <Link to={PATH_URL.REGISTER}>{t('LOGIN.REGISTER', '회원가입')}</Link>
                  <Link to={PATH_URL.FORGOT_PASSWORD}>{t('LOGIN.FORGOT_PW', '비밀번호찾기')}</Link>
                </GS.SpaceBetweenWithFullWidth>
              </S.FormItem>
              <S.DivideLineContainer>
                <S.DivideLine />
                <S.DivideLineContent>OR</S.DivideLineContent>
              </S.DivideLineContainer>
              <S.FormItemWithIcon>
                <S.IconWrapper>
                  <S.FacebookIcon />
                </S.IconWrapper>
                <S.FacebookButton>{t('LOGIN.FACEBOOK', '페이스북으로 로그인하기')}</S.FacebookButton>
              </S.FormItemWithIcon>
              <S.FormItemWithIcon>
                <S.IconWrapper>
                  <S.TwitterIcon />
                </S.IconWrapper>
                <S.TwitterButton>{t('LOGIN.TWITTER', '트위터로 로그인하기')}</S.TwitterButton>
              </S.FormItemWithIcon>
              <S.FormItemWithIcon>
                <S.IconWrapper>
                  <S.GoogleIcon />
                </S.IconWrapper>
                <S.GoogleButton>{t('LOGIN.GOOGLE', '구글로 로그인하기')}</S.GoogleButton>
              </S.FormItemWithIcon>
            </div>
          </S.LoginFormArea>
          <S.BackgoundImage />
        </S.CenterWrap>
      </GS.FullScreenWrap>
    </ThreeLayerTemplate>
  );
};

export default LoginPage;
