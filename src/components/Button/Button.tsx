import { ButtonStyle } from "./styles";
import { ButtonHTMLAttributes } from "react";

const Botao: React.FC<ButtonHTMLAttributes<HTMLButtonElement>> = ({
  children,
  ...props
}) => {
  return <ButtonStyle {...props}>{children}</ButtonStyle>;
};

export default Botao;
