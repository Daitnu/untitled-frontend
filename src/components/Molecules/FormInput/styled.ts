import styled from 'styled-components';
import * as GS from '~/globalStyles';

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

interface IFormItemContainer {
  isError?: boolean;
}

interface InputContainerProps {
  width: number;
  height: number;
  borderRadius: number;
  isError: boolean;
  borderWidth: number;
  borderColor?: string;
  backgroundColor: string;
}

interface IconWrapperProps {
  iconWidth: number;
  iconHeight: number;
}

interface IconProps {
  icon: any;
}

export const FormItemContainer = styled(GS.FlexJustifyAlignCenter)<IFormItemContainer>`
  margin-top: 10px;
  width: 300px;
  height: 50px;
  border: 2px solid ${(props) => (props.isError ? 'red' : color.border.common)};
  border-radius: ${border.radius.common};
  background-color: white;
  overflow: hidden;
`;

export const InputContainer = styled(GS.FlexJustifyAlignCenter)<InputContainerProps>`
  width: ${({ width }) => width}px;
  height: ${({ height }) => height}px;
  box-sizing: border-box;
  border: ${({ borderWidth }) => borderWidth}px solid ${({ borderColor }) => borderColor};
  border-radius: ${({ borderRadius }) => borderRadius}px;
  background-color: ${({ backgroundColor }) => backgroundColor};
`;

export const IconWrapper = styled(GS.FlexJustifyAlignCenter)<IconWrapperProps>`
  width: ${({ iconWidth }) => iconWidth}px;
  height: ${({ iconHeight }) => iconHeight}px;
`;

export const Icon = styled(GS.IconStyle)<IconProps>`
  background-image: url(${({ icon }) => icon});
`;
