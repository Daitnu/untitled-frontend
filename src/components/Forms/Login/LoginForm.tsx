import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import * as S from './styled';
import * as GS from '~/globalStyles';
import { KEY_CODE } from '~/constants';

interface IUser {
  id: string;
  pw: string;
}

interface IError {
  message: string;
}

const LoginForm: React.FC = () => {
  const [user, setUser] = useState<IUser>({ id: '', pw: '' });
  const [errorMessage, setErrorMessage] = useState<IError>({ message: '' });

  const handleInputChange = ({ target: { id, value } }): void => {
    const changedField: string = id;
    const changedValue: string = value;
    setUser({
      ...user,
      [changedField]: changedValue,
    });
  };

  const handlePasswordKeyDown = ({ keyCode }): void => {
    if (keyCode !== KEY_CODE.ENTER) return;
    handleSubmitClick();
  };

  const handleSubmitClick = async (): Promise<void> => {
    const { id, pw } = user;
    console.log(user);
    console.log('submit click');
    // TODO: api call
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
      <S.FormItem isDisplay="inline">
        <GS.SpaceBetweenWithFullWidth>
          <GS.AlignCenter>
            <input type="checkbox" id="autoLogin" />
            <label htmlFor="autoLogin">자동 로그인</label>
          </GS.AlignCenter>
          <S.LoginButton type="submit" onClick={handleSubmitClick}>
            로그인
          </S.LoginButton>
        </GS.SpaceBetweenWithFullWidth>
      </S.FormItem>
      <S.FormItem>{errorMessage.message}</S.FormItem>
      <S.FormItem>
        <GS.SpaceBetweenWithFullWidth>
          <Link to="/register">Register now</Link>
          <div>Forgot password?</div>
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
