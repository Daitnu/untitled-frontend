import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import * as S from './styled';
import * as LS from '../Login/styled';
import { useDispatch } from 'react-redux';
import { accountRegisterPostRequest } from '~/store/account';
import validation from '~/libraries/validation';
import { PATH_URL } from '~/constants';

interface IRegisterForm {
  id: string;
  name: string;
  email: string;
  pw: string;
  pwConfirm: string;
}

const INITIAL_STATE: IRegisterForm = {
  id: '',
  name: '',
  email: '',
  pw: '',
  pwConfirm: '',
};

export const RegisterForm: React.FC = () => {
  const [userValues, setUserValues] = useState<IRegisterForm>(INITIAL_STATE);
  const [errorMsg, setErrorMsg] = useState<IRegisterForm>(INITIAL_STATE);
  const dispatch = useDispatch();

  const handleInputChange = ({ target: { id, value } }): void => {
    const fieldValidation = formValidation[id];
    const validationResult = validation.validator.blur({ value, validation: fieldValidation });

    setErrorMsg({
      ...errorMsg,
      [id]: validationResult.isError ? validationResult.errors[0].reason : '',
    });
    setUserValues({
      ...userValues,
      [id]: value,
    });
  };

  const handleSubmit = async (): Promise<void> => {
    const { id, name, email, pw, pwConfirm }: IRegisterForm = userValues;
    // if (!registerValidate({ id, pw, pwConfirm, name }, setErrorMsg)) return;
    // TODO: api call
    dispatch(accountRegisterPostRequest({ id, name, email, password: pw, passwordConfirm: pwConfirm }));
  };

  const formValidation = {
    id: {
      fieldName: '아이디',
      rules: [validation.rules.required, validation.rules.lengthMax(20), validation.rules.alphanumeric],
    },
    pw: {
      fieldName: '비밀번호',
      rules: [validation.rules.required],
    },
    pwConfirm: {
      fieldName: '비밀번호확인',
      rules: [validation.rules.required, validation.rules.equalsTwoField('비밀번호')],
      comparison: userValues.pw,
    },
    email: {
      fieldName: '이메일',
      rules: [validation.rules.required, validation.rules.email],
    },
    name: {
      fieldName: '이름',
      rules: [validation.rules.required],
    },
  };

  return (
    <div>
      <LS.FormItemWithIcon isError={!!errorMsg.id}>
        <LS.IconWrapper>
          <LS.UserIcon />
        </LS.IconWrapper>
        <LS.FormInput
          type="text"
          id="id"
          placeholder="아이디"
          maxLength={20}
          autoComplete="off"
          onChange={handleInputChange}
        />
      </LS.FormItemWithIcon>
      <S.ErrorMsg>{errorMsg.id}</S.ErrorMsg>
      <LS.FormItemWithIcon isError={!!errorMsg.name}>
        <LS.IconWrapper>
          <S.UserNameIcon />
        </LS.IconWrapper>
        <LS.FormInput
          type="text"
          id="name"
          placeholder="이름"
          maxLength={20}
          autoComplete="off"
          onChange={handleInputChange}
        />
      </LS.FormItemWithIcon>
      <S.ErrorMsg>{errorMsg.name}</S.ErrorMsg>
      <LS.FormItemWithIcon isError={!!errorMsg.email}>
        <LS.IconWrapper>
          <LS.EmailIcon />
        </LS.IconWrapper>
        <LS.FormInput
          type="email"
          id="email"
          placeholder="이메일"
          autoComplete="off"
          maxLength={20}
          onChange={handleInputChange}
        />
      </LS.FormItemWithIcon>
      <S.ErrorMsg>{errorMsg.email}</S.ErrorMsg>
      <LS.FormItemWithIcon isError={!!errorMsg.pw}>
        <LS.IconWrapper>
          <LS.PasswordIcon />
        </LS.IconWrapper>
        <LS.FormInput
          type="password"
          id="pw"
          placeholder="비밀번호"
          autoComplete="off"
          maxLength={20}
          onChange={handleInputChange}
        />
      </LS.FormItemWithIcon>
      <S.ErrorMsg>{errorMsg.pw}</S.ErrorMsg>
      <LS.FormItemWithIcon isError={!!errorMsg.pwConfirm}>
        <LS.IconWrapper>
          <LS.PasswordIcon />
        </LS.IconWrapper>

        <LS.FormInput
          type="password"
          id="pwConfirm"
          placeholder="비밀번호 확인"
          autoComplete="off"
          maxLength={20}
          onChange={handleInputChange}
          // disabled={!userValues.pw || errorMsg.pw}
        />
      </LS.FormItemWithIcon>
      <S.ErrorMsg>{errorMsg.pwConfirm}</S.ErrorMsg>
      <S.RegisterButton onClick={handleSubmit}>회원가입</S.RegisterButton>
      <Link to={PATH_URL.LOGIN}>
        <S.RegisterButton>로그인하러 가기</S.RegisterButton>
      </Link>
    </div>
  );
};
