import React from 'react';
import * as S from './styled';
import Input from '~/components/Atoms/Input';

interface IFormInput {
  id: string;
  width: number;
  height: number;
  padding: number;
  borderRadius?: number;
  isError?: boolean;
  borderWidth?: number;
  borderColor?: string;
  backgroundColor?: string;
  placeholder?: string;
  autoComplete?: boolean;
  maxLength?: number;
  onChange?: React.ChangeEventHandler<HTMLInputElement>;
}

const FormInput: React.FC<IFormInput> = ({
  id,
  width,
  height,
  padding,
  borderRadius = 0,
  isError = false,
  borderWidth = 0,
  borderColor,
  backgroundColor = 'white',
  placeholder = '',
  autoComplete = false,
  maxLength,
  onChange,
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
      <Input
        id={id}
        width={width}
        height={height}
        padding={padding}
        placeholder={placeholder}
        autoComplete={autoComplete}
        maxLength={maxLength}
        onChange={onChange}
      />
    </S.InputContainer>
  );
};

export default FormInput;
