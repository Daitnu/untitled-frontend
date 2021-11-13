import styled from 'styled-components';
import * as GS from '~/globalStyles';
import userIcon from 'Assets/images/accounts/user.svg';
import passwordIcon from 'Assets/images/accounts/password.svg';
import facebookIcon from 'Assets/facebook.png';
import twitterIcon from 'Assets/twitter.png';
import googleIcon from 'Assets/google.png';

const border = {
  radius: {
    common: '8px',
  },
};

const color = {
  font: {
    facebook: '#4267b2',
    twitter: '#03a9f4',
    google: '#f44235',
    divideContent: '#acadbc',
  },
  border: {
    common: '#cfcdcb',
  },
  button: {
    login: '#4786ff',
  },
};

interface IFormItem {
  isDisplay?: string;
}

interface IFormItemWithIcon {
  isError?: boolean;
}

export const FormItem = styled(GS.FlexRow)<IFormItem>`
  margin: 10px 0 10px 0;
  width: 300px;
  & > label {
    display: ${(props: IFormItem) => props.isDisplay || 'none'};
  }
`;

export const FormItemWithIcon = styled(GS.FlexJustifyAlignCenter)<IFormItemWithIcon>`
  margin: 10px 0 10px 0;
  width: 300px;
  height: 50px;
  border: 2px solid ${(props) => (props.isError ? 'red' : color.border.common)};
  border-radius: ${border.radius.common};
  background-color: white;
  overflow: hidden;
`;

export const FormInput = styled.input`
  width: 100%;
  height: 50px;
  border: none;
  outline: none;
  padding: 0 10px 0 10px;
`;

export const DivideLineContainer = styled.div`
  padding: 15px 0;
  position: relative;
  height: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const DivideLine = styled.div`
  width: 100%;
  height: 1px;
  background-color: ${color.border.common};
`;

export const DivideLineContent = styled.div`
  position: absolute;
  padding: 0 20px;
  text-align: center;
  color: ${color.font.divideContent};
  background-color: white;
`;

export const LoginButton = styled.button`
  width: 30%;
  height: 40px;
  background-color: ${color.button.login};
  border: none;
  border-radius: 8px;
  color: white;
  outline: none;
  cursor: pointer;
`;

export const SNSLoginButton = styled(GS.FullWidth.withComponent('button'))`
  border: none;
  height: 100%;
  border-radius: ${border.radius.common};
  background-color: white;
  outline: none;
  cursor: pointer;
  font-size: 1rem;
`;

export const IconWrapper = styled(GS.FlexJustifyAlignCenter)`
  width: 75px;
  height: 50px;
  border-right: 1px solid ${color.border.common};
`;

export const UserIcon = styled(GS.IconStyle)`
  background-image: url(${userIcon});
`;

export const PasswordIcon = styled(GS.IconStyle)`
  background-image: url(${passwordIcon});
`;

export const FacebookIcon = styled(GS.IconStyle)`
  background-image: url(${facebookIcon});
`;

export const TwitterIcon = styled(GS.IconStyle)`
  background-image: url(${twitterIcon});
`;

export const GoogleIcon = styled(GS.IconStyle)`
  background-image: url(${googleIcon});
`;

export const FacebookButton = styled(SNSLoginButton)`
  color: ${color.font.facebook};
`;

export const TwitterButton = styled(SNSLoginButton)`
  color: ${color.font.twitter};
`;

export const GoogleButton = styled(SNSLoginButton)`
  color: ${color.font.google};
`;
