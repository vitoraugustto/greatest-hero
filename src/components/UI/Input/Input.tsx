import React from 'react';

import { StyledInput } from './Input.styles';
import { IInput } from './Input.types';

export const Input: React.FC<IInput> = ({
  onChange,
  onBlur,
  onKeyUp,
  fontSize,
  value,
  placeholder = 'Digite aqui...',
  style,
}) => {
  return (
    <StyledInput
      autoFocus
      onBlur={onBlur}
      placeholder={placeholder}
      onChange={onChange}
      onKeyUp={onKeyUp}
      value={value}
      fontSize={fontSize}
      style={{ ...style }}
    />
  );
};
