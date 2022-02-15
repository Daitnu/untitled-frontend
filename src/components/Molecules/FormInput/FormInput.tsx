import React from 'react';
import * as S from './styled';
import Input from '~/components/Atoms/Input';
import Icon from '~/components/Atoms/Icon';
import Label from '~/components/Atoms/label';

interface IIcon {
  image: any;
  width: number;
  height: number;
  borderRight: string;
}
interface ILabel {
  message?: string;
  height: number;
  marginTop: number;
  fontSize: number;
  lineHeight: number;
  color: string;
}
interface IFormInput {
  type?: 'text' | 'password';
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
  onKeyDown?: React.KeyboardEventHandler<HTMLInputElement>;
  icon?: IIcon;
  errorLabel?: ILabel;
}

const FormInput: React.FC<IFormInput> = ({
  type = 'text',
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
  onKeyDown,
  icon,
  errorLabel,
}) => {
  return (
    <>
      <S.FormItemContainer isError={isError}>
        {!!icon && (
          <Icon image={icon.image} width={icon.width} height={icon.height} borderRight={icon.borderRight}></Icon>
        )}
        <S.InputContainer
          width={width}
          height={height}
          borderRadius={borderRadius}
          isError={isError}
          borderWidth={borderWidth}
          borderColor={borderColor}
          backgroundColor={backgroundColor}>
          <Input
            type={type}
            id={id}
            width={width}
            height={height}
            padding={padding}
            placeholder={placeholder}
            autoComplete={autoComplete}
            maxLength={maxLength}
            onChange={onChange}
            onKeyDown={onKeyDown}
          />
        </S.InputContainer>
      </S.FormItemContainer>
      {!!errorLabel && (
        <Label
          height={errorLabel.height}
          marginTop={errorLabel.marginTop}
          fontSize={errorLabel.fontSize}
          lineHeight={errorLabel.lineHeight}
          color={errorLabel.color}>
          {errorLabel.message}
        </Label>
      )}
    </>
  );
};

export default FormInput;
