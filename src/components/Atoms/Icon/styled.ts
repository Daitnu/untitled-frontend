import styled from 'styled-components';
import * as GS from '~/globalStyles';

interface IconProps {
  image?: any;
}

interface IconContainerProps {
  image?: any;
  width: number;
  height: number;
  borderRight: string;
}

export const Icon = styled(GS.IconStyle)<IconProps>`
  background-image: url(${({ image }) => image});
`;

export const IconContainer = styled(GS.FlexJustifyAlignCenter)<IconContainerProps>`
  width: ${({ width }) => width}px;
  height: ${({ height }) => height}px;
  border-right: ${({ borderRight }) => borderRight};
`;
