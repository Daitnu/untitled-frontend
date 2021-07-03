import React from 'react';
import './button.css';

export interface ButtonProps {
  color?: string;
  backgroundColor?: string;
  size?: 'small' | 'medium' | 'large';
  label: string;
  onClick?: () => void;
}

/**
 * Primary UI component for user interaction
 */
export const Button: React.FC<ButtonProps> = ({
  color,
  size = 'medium',
  backgroundColor,
  label,
  ...props
}) => {
  // const mode = primary ? 'storybook-button--primary' : 'storybook-button--secondary'
  color = 'storybook-button--' + color;
  return (
    <button
      type="button"
      className={['storybook-button', `storybook-button--${size}`, color].join(' ')}
      style={{ backgroundColor }}
      {...props}
    >
      {label}
    </button>
  );
};
