import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import * as S from './styled';
import * as GS from '~/globalStyles';
import { KEY_CODE, PATH_URL } from '~/constants';
import validation from '~/libraries/validation';
import { useDispatch } from 'react-redux';
import { accountLoginPostRequest } from '~/store/account/login';
import { IValidations } from '~/@types/libraries';

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

const LoginForm: React.FC = () => {
  const [userValues, setUserValues] = useState<IUser>({ id: '', pw: '' });
  const [errorMsg, setErrorMsg] = useState<IError>({ id: '', pw: '' });
  const dispatch = useDispatch();

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
    <div>
      <S.FormItemWithIcon>
        <S.IconWrapper>
          <S.UserIcon />
        </S.IconWrapper>
        <S.FormInput
          type="text"
          id="id"
          placeholder="아이디"
          maxLength={20}
          autoComplete="off"
          onChange={handleInputChange}
        />
      </S.FormItemWithIcon>
      <S.ErrorMsg>{errorMsg.id}</S.ErrorMsg>
      <S.FormItemWithIcon>
        <S.IconWrapper>
          <S.PasswordIcon />
        </S.IconWrapper>
        <S.FormInput
          type="password"
          id="pw"
          placeholder="비밀번호"
          autoComplete="off"
          maxLength={20}
          onChange={handleInputChange}
          onKeyDown={handlePasswordKeyDown}
        />
      </S.FormItemWithIcon>
      <S.ErrorMsg>{errorMsg.pw}</S.ErrorMsg>
      <S.FormItem isDisplay="inline">
        <GS.SpaceBetweenWithFullWidth>
          <GS.AlignCenter>
            <S.AutoLoginCheckInputLabel htmlFor="autoLogin">
              <S.AutoLoginCheckInput type="checkbox" id="autoLogin" />
              자동 로그인
            </S.AutoLoginCheckInputLabel>
          </GS.AlignCenter>
          <S.LoginButton type="submit" onClick={handleSubmitClick}>
            로그인
          </S.LoginButton>
        </GS.SpaceBetweenWithFullWidth>
      </S.FormItem>
      <S.FormItem>
        <GS.SpaceBetweenWithFullWidth>
          <Link to={PATH_URL.REGISTER}>Register now</Link>
          <Link to={PATH_URL.FORGOT_PASSWORD}>Forgot password?</Link>
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
        <S.FacebookButton>페이스북으로 로그인하기</S.FacebookButton>
      </S.FormItemWithIcon>
      <S.FormItemWithIcon>
        <S.IconWrapper>
          <S.TwitterIcon />
        </S.IconWrapper>
        <S.TwitterButton>트위터로 로그인하기</S.TwitterButton>
      </S.FormItemWithIcon>
      <S.FormItemWithIcon>
        <S.IconWrapper>
          <S.GoogleIcon />
        </S.IconWrapper>
        <S.GoogleButton>구글로 로그인하기</S.GoogleButton>
      </S.FormItemWithIcon>
    </div>
  );
};

export default LoginForm;
