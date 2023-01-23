import { Error, Style } from "./style";
import { ChangeEvent, FocusEvent } from "react";

interface InputProps {
  name?: string;
  label?: string;
  type?: string;
  value?: any;
  onChange?: (event: ChangeEvent<HTMLInputElement>) => void;
  onBlur?: (event: FocusEvent<HTMLInputElement>) => void;
  erro?: string;
}

const Input: React.FC<InputProps> = ({
  name,
  label,
  type,
  onChange,
  onBlur,
  value,
  erro,
  ...rest
}) => {
  return (
    <Style>
      <label htmlFor={name}>{label}</label>
      <input
        id={name}
        name={name}
        type={type}
        value={value}
        onChange={onChange}
        onBlur={onBlur}
        {...rest}
      />
      {erro && <Error>{erro}</Error>}
    </Style>
  );
};

export default Input;
