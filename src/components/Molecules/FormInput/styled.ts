import styled from 'styled-components';
import * as GS from '~/globalStyles';

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
