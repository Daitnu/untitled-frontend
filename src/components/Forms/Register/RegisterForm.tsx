import React from 'react';
import { Link } from 'react-router-dom';
import * as S from './styled';
import { PATH_URL } from '~/constants';
import { useTranslation } from 'react-i18next';

import FormInput from '~/components/Molecules/FormInput';
import userIcon from 'Assets/images/accounts/user.png';
import nameIcon from 'Assets/images/accounts/name.png';
import passwordIcon from 'Assets/images/accounts/password.png';
import emailIcon from 'Assets/images/accounts/email.png';
interface IIRegisterForm {
  id: string;
  name: string;
  email: string;
  pw: string;
  pwConfirm: string;
}
interface IRegisterForm {
  handleInputChange: (event) => void;
  errorMsg: IIRegisterForm;
  handleSubmit: (event) => void;
}

export const RegisterForm: React.FC<IRegisterForm> = ({ handleInputChange, errorMsg, handleSubmit }) => {
  const { t } = useTranslation();
  return (
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
        errorLabel={{ message: errorMsg.id, height: 16, marginTop: 4, fontSize: 12, lineHeight: 16, color: 'red' }}
      />
      <FormInput
        id="name"
        width={250}
        height={50}
        borderWidth={0}
        padding={10}
        placeholder={t('REGISTER.NAME', '이름')}
        maxLength={20}
        onChange={handleInputChange}
        icon={{ image: nameIcon, width: 75, height: 50, borderRight: '2px solid #cfcdcb' }}
        isError={!!errorMsg.name}
        errorLabel={{ message: errorMsg.name, height: 16, marginTop: 4, fontSize: 12, lineHeight: 16, color: 'red' }}
      />
      <FormInput
        id="email"
        width={250}
        height={50}
        borderWidth={0}
        padding={10}
        placeholder={t('REGISTER.EMAIL', '이메일')}
        maxLength={40}
        onChange={handleInputChange}
        icon={{ image: emailIcon, width: 75, height: 50, borderRight: '2px solid #cfcdcb' }}
        isError={!!errorMsg.email}
        errorLabel={{ message: errorMsg.email, height: 16, marginTop: 4, fontSize: 12, lineHeight: 16, color: 'red' }}
      />
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
        icon={{ image: passwordIcon, width: 75, height: 50, borderRight: '2px solid #cfcdcb' }}
        isError={!!errorMsg.pw}
        errorLabel={{ message: errorMsg.pw, height: 16, marginTop: 4, fontSize: 12, lineHeight: 16, color: 'red' }}
      />
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
        icon={{ image: passwordIcon, width: 75, height: 50, borderRight: '2px solid #cfcdcb' }}
        isError={!!errorMsg.pwConfirm}
        errorLabel={{
          message: errorMsg.pwConfirm,
          height: 16,
          marginTop: 4,
          fontSize: 12,
          lineHeight: 16,
          color: 'red',
        }}
      />
      <S.RegisterButton onClick={handleSubmit}>{t('REGISTER.SUBMIT', '회원가입')}</S.RegisterButton>
      <Link to={PATH_URL.LOGIN}>
        <S.RegisterButton>{t('REGISTER.GO_LOGIN', '로그인하러 가기')}</S.RegisterButton>
      </Link>
    </div>
  );
};
