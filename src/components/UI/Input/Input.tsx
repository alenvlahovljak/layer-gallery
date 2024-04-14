import type { FC, DetailedHTMLProps, InputHTMLAttributes } from 'react';

import { Icon } from '@/components/UI';
import { Search, Field } from './Input.styled';

interface InputProps
  extends Omit<
    DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>,
    'onChange' | 'value'
  > {
  value: string;
  onChange: (value: string) => void;
}

const Input: FC<InputProps> = ({ value, onChange, ...props }) => {
  return (
    <Search>
      <Icon name="search" />
      <Field {...props} value={value} onChange={({ target }) => onChange(target.value)} />
    </Search>
  );
};

export default Input;
