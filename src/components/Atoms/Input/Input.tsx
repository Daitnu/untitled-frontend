import React from 'react';
import * as S from './styled';

interface IInput {
  type: 'text' | 'password';
  id: string;
  width: number;
  height: number;
  padding: number;
  placeholder?: string;
  autoComplete?: boolean;
  maxLength?: number;
  onChange?: React.ChangeEventHandler<HTMLInputElement>;
  onKeyDown?: React.KeyboardEventHandler<HTMLInputElement>;
}

const Input: React.FC<IInput> = ({
  type,
  id,
  width,
  height,
  padding,
  placeholder,
  autoComplete,
  maxLength,
  onChange,
  onKeyDown,
}) => {
  const autoCompleteValue = autoComplete ? 'on' : 'off';
  return (
    <S.Input
      type={type}
      id={id}
      width={width}
      height={height}
      padding={padding}
      placeholder={placeholder}
      autoComplete={autoCompleteValue}
      maxLength={maxLength}
      onChange={onChange}
      onKeyDown={onKeyDown}
    />
  );
};

export default Input;
