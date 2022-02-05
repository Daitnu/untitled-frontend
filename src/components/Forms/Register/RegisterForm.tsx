import React, { useState, useEffect, useMemo } from 'react';
import { Link } from 'react-router-dom';
import * as S from './styled';
import * as LS from '../Login/styled';
import { useDispatch } from 'react-redux';
import { accountRegisterPostRequest } from '~/store/account/register';
import validation from '~/libraries/validation';
import { PATH_URL } from '~/constants';
import { IValidation, IValidations } from '~/@types/libraries';
import { useTranslation } from 'react-i18next';
import FormInput from '~/components/Molecules/FormInput';

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
  const { t } = useTranslation();

  const [userValues, setUserValues] = useState<IRegisterForm>(INITIAL_STATE);
  const [errorMsg, setErrorMsg] = useState<IRegisterForm>(INITIAL_STATE);
  const dispatch = useDispatch();

  const validateBlur = (id, value) => {
    const fieldValidation: IValidation = formValidation[id];
    return validation.validator.field({ value, validation: fieldValidation });
  };

  useEffect(() => {
    const id = 'pwConfirm';
    const value = userValues.pwConfirm;
    const validationResult = validateBlur(id, value);

    console.log('validationResult', validationResult);

    setErrorMsg({
      ...errorMsg,
      [id]: validationResult.isError ? validationResult.errors[0].reason : '',
    });
  }, [userValues.pw]);

  const handleInputChange = ({ target: { id, value } }): void => {
    const validationResult = validateBlur(id, value);

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
    const validationResult = validation.validator.form({
      validations: formValidation,
      values: userValues,
      returnAllError: true,
    });
    if (validationResult.isError) {
      for (let i = 0; i < validationResult.errors.length; i++) {
        setErrorMsg((prev) => ({ ...prev, [validationResult.errors[i].key!]: validationResult.errors[i].reason }));
      }
    } else {
      dispatch(accountRegisterPostRequest({ id, name, email, password: pw, passwordConfirm: pwConfirm }));
    }
  };

  const formValidation: IValidations = useMemo(
    () => ({
      id: {
        fieldName: 'id',
        rules: [validation.rules.required, validation.rules.lengthMax(20), validation.rules.alphanumeric],
      },
      pw: {
        fieldName: 'pw',
        rules: [validation.rules.required],
      },
      pwConfirm: {
        fieldName: 'pwConfirm',
        rules: [validation.rules.required, validation.rules.equalsTwoField(t('REGISTER.PW', '비밀번호'))],
        comparisonValue: userValues.pw,
      },
      email: {
        fieldName: 'email',
        rules: [validation.rules.required, validation.rules.email],
      },
      name: {
        fieldName: 'name',
        rules: [validation.rules.required],
      },
    }),
    [userValues.pw],
  );

  return (
    <div>
      <LS.FormItemWithIcon isError={!!errorMsg.id}>
        <LS.IconWrapper>
          <LS.UserIcon />
        </LS.IconWrapper>
        <FormInput
          id="id"
          width={250}
          height={50}
          borderWidth={0}
          padding={10}
          placeholder={t('REGISTER.ID', '아이디')}
          maxLength={20}
          onChange={handleInputChange}
        />
      </LS.FormItemWithIcon>

      <S.ErrorMsg>{errorMsg.id}</S.ErrorMsg>
      <LS.FormItemWithIcon isError={!!errorMsg.name}>
        <LS.IconWrapper>
          <S.UserNameIcon />
        </LS.IconWrapper>
        <FormInput
          id="name"
          width={250}
          height={50}
          borderWidth={0}
          padding={10}
          placeholder={t('REGISTER.NAME', '이름')}
          maxLength={20}
          onChange={handleInputChange}
        />
      </LS.FormItemWithIcon>
      <S.ErrorMsg>{errorMsg.name}</S.ErrorMsg>
      <LS.FormItemWithIcon isError={!!errorMsg.email}>
        <LS.IconWrapper>
          <LS.EmailIcon />
        </LS.IconWrapper>
        <FormInput
          id="email"
          width={250}
          height={50}
          borderWidth={0}
          padding={10}
          placeholder={t('REGISTER.EMAIL', '이메일')}
          maxLength={40}
          onChange={handleInputChange}
        />
      </LS.FormItemWithIcon>
      <S.ErrorMsg>{errorMsg.email}</S.ErrorMsg>
      <LS.FormItemWithIcon isError={!!errorMsg.pw}>
        <LS.IconWrapper>
          <LS.PasswordIcon />
        </LS.IconWrapper>
        <FormInput
          id="pw"
          width={250}
          height={50}
          borderWidth={0}
          padding={10}
          placeholder={t('REGISTER.PW', '비밀번호')}
          maxLength={20}
          onChange={handleInputChange}
        />
      </LS.FormItemWithIcon>
      <S.ErrorMsg>{errorMsg.pw}</S.ErrorMsg>
      <LS.FormItemWithIcon isError={!!errorMsg.pwConfirm}>
        <LS.IconWrapper>
          <LS.PasswordIcon />
        </LS.IconWrapper>
        <FormInput
          id="pwConfirm"
          width={250}
          height={50}
          borderWidth={0}
          padding={10}
          placeholder={t('REGISTER.PW_CHECK', '비밀번호 확인')}
          maxLength={20}
          onChange={handleInputChange}
        />
      </LS.FormItemWithIcon>
      <S.ErrorMsg>{errorMsg.pwConfirm}</S.ErrorMsg>
      <S.RegisterButton onClick={handleSubmit}>{t('REGISTER.SUBMIT', '회원가입')}</S.RegisterButton>
      <Link to={PATH_URL.LOGIN}>
        <S.RegisterButton>{t('REGISTER.GO_LOGIN', '로그인하러 가기')}</S.RegisterButton>
      </Link>
    </div>
  );
};
