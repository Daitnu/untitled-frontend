import React from 'react';
import * as S from './styled';

interface IInput {
  id: string;
  width: number;
  height: number;
  padding: number;
  placeholder?: string;
  autoComplete?: boolean;
  maxLength?: number;
  onChange?: React.ChangeEventHandler<HTMLInputElement>;
}

const Input: React.FC<IInput> = ({ id, width, height, padding, placeholder, autoComplete, maxLength, onChange }) => {
  const autoCompleteValue = autoComplete ? 'on' : 'off';
  return (
    <S.Input
      id={id}
      width={width}
      height={height}
      padding={padding}
      placeholder={placeholder}
      autoComplete={autoCompleteValue}
      maxLength={maxLength}
      onChange={onChange}
    />
  );
};

export default Input;
