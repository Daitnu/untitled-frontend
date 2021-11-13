import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import * as S from './styled';
import * as LS from '../Login/styled';

interface IRegisterForm {
  id: string;
  name: string;
  email: string;
  pw: string;
  pwConfirm: string;
}

interface IUser {
  id: string;
  name: string;
}

const initialState: IRegisterForm = {
  id: '',
  name: '',
  email: '',
  pw: '',
  pwConfirm: '',
};

const checkPwConfirmCondition = ({ pw, pwConfirm }): boolean => {
  if (pwConfirm === '') return false;
  return pw === pwConfirm;
};

const registerValidate = ({ id, pw, email, pwConfirm, name }: IRegisterForm, setErrorMsg) => {
  // const vals: ICheckParams[] = [];
  // const { ID, PW, NAME, PW_CONFIRM } = REGISTER_FIELDS;
  // vals.push({ fieldName: ID, val: id });
  // vals.push({ fieldName: PW, val: pw });
  // vals.push({ fieldName: NAME, val: name });
  // const validationResult = inputValidation(vals).filter(({ error }) => error !== null);
  // if (!checkPwConfirmCondition({ pw, pwConfirm })) {
  //   validationResult.push({
  //     error: new ErrorField(PW_CONFIRM, pwConfirm, ERROR.REGISTER.EQUAL[PW_CONFIRM]),
  //   });
  // }
  // if (validationResult.length) {
  //   const resultObj = {};
  //   validationResult.forEach(({ error }) => (resultObj[error.field] = error.reason));
  //   setErrorMsg({ ...resultObj });
  //   return false;
  // }
  // setErrorMsg({ ...initialState });
  // return true;
};

export const RegisterForm: React.FC = () => {
  const [userValues, setUserValues] = useState<IRegisterForm>(initialState);
  const [errorMsg, setErrorMsg] = useState<IRegisterForm>(initialState);

  const handleInputChange = ({ target: { id, value } }): void => {
    setUserValues({
      ...userValues,
      [id]: value,
    });
  };

  const handleSubmit = async (): Promise<void> => {
    const { id, name, email, pw, pwConfirm }: IRegisterForm = userValues;
    // if (!registerValidate({ id, pw, pwConfirm, name }, setErrorMsg)) return;
    // TODO: api call
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
        />
      </LS.FormItemWithIcon>
      <S.ErrorMsg>{errorMsg.pwConfirm}</S.ErrorMsg>
      <S.RegisterButton onClick={handleSubmit}>회원가입</S.RegisterButton>
      <Link to="login">
        <S.RegisterButton>로그인하러 가기</S.RegisterButton>
      </Link>
    </div>
  );
};
