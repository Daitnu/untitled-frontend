import React from 'react';
import { Button as AntdButton } from 'antd';

interface IButton {
  type: string;
}

const Button: React.FC<IButton> = ({ type }) => {
  return <AntdButton type={type}>Primary Button</AntdButton>;
};

export default Button;
