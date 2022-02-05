import React from 'react';
import * as S from './styled';
import Input from '~/components/Atoms/Input';

interface IFormInput {
  width: number;
  height: number;
  padding: number;
  borderRadius: number;
  isError: boolean;
  borderWidth?: number;
  borderColor?: string;
  backgroundColor?: string;
}

const FormInput: React.FC<IFormInput> = ({
  width,
  height,
  padding,
  borderRadius = 0,
  isError = false,
  borderWidth = 0,
  borderColor,
  backgroundColor = 'white',
}) => {
  return (
    <S.InputContainer
      width={width}
      height={height}
      borderRadius={borderRadius}
      isError={isError}
      borderWidth={borderWidth}
      borderColor={borderColor}
      backgroundColor={backgroundColor}>
      <Input width={width} height={height} padding={padding} />
    </S.InputContainer>
  );
};

export default FormInput;
