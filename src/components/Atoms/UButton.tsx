import React from 'react';
import { Button as AntdButton } from 'antd';
import { ButtonType } from 'antd/lib/button';

interface IButton {
  type?: ButtonType;
  children: React.ReactElement | string;
}

const UButton: React.FC<IButton> = ({ type = 'default', children }) => {
  return <AntdButton type={type}>{children}</AntdButton>;
};

export default UButton;
export type { ButtonType };
