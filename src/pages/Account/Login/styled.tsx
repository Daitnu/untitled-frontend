import styled, { css } from 'styled-components';
import * as GS from '~/globalStyles';
import { BREAK_POINT_MOBILE } from '~/constants';
import backgroundImg from 'Assets/space.jpg';
import userIcon from 'Assets/images/accounts/user.png';
import passwordIcon from 'Assets/images/accounts/password.png';
import emailIcon from 'Assets/images/accounts/email.png';
import facebookIcon from 'Assets/facebook.png';
import twitterIcon from 'Assets/twitter.png';
import googleIcon from 'Assets/google.png';
import kakaoIcon from 'Assets/kakao.png';

const width = 760 as const;
const height = 600 as const;

const UNIT = {
  REM: 'rem' as const,
  EM: 'em' as const,
  PX: 'px' as const,
};

interface IimageInputCard {
  width: number;
  height: number;
  imagePosition: string;
}

export const ImageInputCard = styled.div<IimageInputCard>`
  width: ${(props) => props.width};
  border: 1px solid grey;
  height: ${(props) => props.height};
  display: flex;
  flex-direction: ${(props) => (props.imagePosition === 'left' ? 'row' : 'row-reverse')};
`;

const sharedFlexItemStyle = css`
  width: ${width / 2 + UNIT.PX};
  height: ${height + UNIT.PX};
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const LoginFormArea = styled.div`
  ${sharedFlexItemStyle}
  background-color: white;
`;

export const BackgoundImage = styled(GS.BackgroundImageStyle)`
  ${sharedFlexItemStyle}
  background-image: url(${backgroundImg});
`;

export const CenterWrap = styled(GS.CenterWrap)`
  width: ${width + UNIT.PX};
  height: ${height + UNIT.PX};
  flex-direction: row;
  box-shadow: 0 0 10px 5px rgba(0, 0, 0, 0.15);

  @media (max-width: ${BREAK_POINT_MOBILE}) {
    box-shadow: none;
    padding: 20px 10px;
    max-height: 100vh;
    max-width: 100%;
    & > *:nth-child(2) {
      display: none;
    }
  }
`;

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
    kakao: '#FEE500',
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
  margin-top: 10px;
  width: 300px;
  & > label {
    display: ${(props: IFormItem) => props.isDisplay || 'none'};
  }
`;

export const FormItemWithIcon = styled(GS.FlexJustifyAlignCenter)<IFormItemWithIcon>`
  margin-top: 10px;
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
  padding: 0 10px;
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

export const AutoLoginCheckInput = styled.input`
  margin-right: 4px;
`;

export const AutoLoginCheckInputLabel = styled(GS.AlignCenter.withComponent('label'))``;

export const ErrorMsg = styled.div`
  margin-top: 4px;
  height: 16px;
  font-size: 12px;
  line-height: 16px;
  color: red;
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

export const SNSLoginButton = styled.button`
  border: none;
  width: 100%;
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

export const EmailIcon = styled(GS.IconStyle)`
  background-image: url(${emailIcon});
`;

export const FacebookIcon = styled(GS.IconStyle)`
  background-image: url(${facebookIcon});
`;

export const KakaoIcon = styled(GS.IconStyle)`
  background-image: url(${kakaoIcon});
`;

export const TwitterIcon = styled(GS.IconStyle)`
  background-image: url(${twitterIcon});
`;

export const GoogleIcon = styled(GS.IconStyle)`
  background-image: url(${googleIcon});
`;

export const FacebookButton = styled(SNSLoginButton)`
  color: ${color.font.facebook};
  font-size: 16px;
  line-height: 24px;
`;

export const KakaoButton = styled(SNSLoginButton)`
  color: ${color.font.kakao};
  font-size: 16px;
  line-height: 24px;
`;

export const TwitterButton = styled(SNSLoginButton)`
  color: ${color.font.twitter};
  font-size: 16px;
  line-height: 24px;
`;

export const GoogleButton = styled(SNSLoginButton)`
  color: ${color.font.google};
  font-size: 16px;
  line-height: 24px;
`;
