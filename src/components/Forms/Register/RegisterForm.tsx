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
import Label from '~/components/Atoms/label';
import Icon from '~/components/Atoms/Icon';

import userIcon from 'Assets/images/accounts/user.png';
import nameIcon from 'Assets/images/accounts/name.png';
import passwordIcon from 'Assets/images/accounts/password.png';
import emailIcon from 'Assets/images/accounts/email.png';
import facebookIcon from 'Assets/facebook.png';
import twitterIcon from 'Assets/twitter.png';
import googleIcon from 'Assets/google.png';

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
        <Icon image={userIcon} width={75} height={50} borderRight={'1px solid black'} />
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
      <Label height={16} marginTop={4} fontSize={12} lineHeight={16} color={'red'}>
        {errorMsg.id}
      </Label>
      <LS.FormItemWithIcon isError={!!errorMsg.name}>
        <Icon image={nameIcon} width={75} height={50} borderRight={'1px solid black'} />
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
      <Label height={16} marginTop={4} fontSize={12} lineHeight={16} color={'red'}>
        {errorMsg.name}
      </Label>
      <LS.FormItemWithIcon isError={!!errorMsg.email}>
        <Icon image={emailIcon} width={75} height={50} borderRight={'1px solid black'} />
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
      <Label height={16} marginTop={4} fontSize={12} lineHeight={16} color={'red'}>
        {errorMsg.email}
      </Label>
      <LS.FormItemWithIcon isError={!!errorMsg.pw}>
        <Icon image={passwordIcon} width={75} height={50} borderRight={'1px solid black'} />
        <FormInput
          id="pw"
          type="password"
          width={250}
          height={50}
          borderWidth={0}
          padding={10}
          placeholder={t('REGISTER.PW', '비밀번호')}
          maxLength={20}
          onChange={handleInputChange}
        />
      </LS.FormItemWithIcon>
      <Label height={16} marginTop={4} fontSize={12} lineHeight={16} color={'red'}>
        {errorMsg.pw}
      </Label>
      <LS.FormItemWithIcon isError={!!errorMsg.pwConfirm}>
        <Icon image={passwordIcon} width={75} height={50} borderRight={'1px solid black'} />
        <FormInput
          id="pwConfirm"
          type="password"
          width={250}
          height={50}
          borderWidth={0}
          padding={10}
          placeholder={t('REGISTER.PW_CHECK', '비밀번호 확인')}
          maxLength={20}
          onChange={handleInputChange}
        />
      </LS.FormItemWithIcon>
      <Label height={16} marginTop={4} fontSize={12} lineHeight={16} color={'red'}>
        {errorMsg.pwConfirm}
      </Label>
      <S.RegisterButton onClick={handleSubmit}>{t('REGISTER.SUBMIT', '회원가입')}</S.RegisterButton>
      <Link to={PATH_URL.LOGIN}>
        <S.RegisterButton>{t('REGISTER.GO_LOGIN', '로그인하러 가기')}</S.RegisterButton>
      </Link>
    </div>
  );
};
