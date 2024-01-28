import React from 'react';

interface ButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  style?: React.CSSProperties;
}

const Button: React.FC<ButtonProps> = ({ children, onClick, style }) => (
  <button onClick={onClick} style={style}>{children}</button>
);

export default Button;
