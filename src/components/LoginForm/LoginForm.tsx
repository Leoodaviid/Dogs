import { Link } from "react-router-dom";
import { FormEvent, useContext } from "react";
import Input from "../Input/Input";
import Button from "../Button/Button";
import useForm from "../../Hooks/useForm";
import { UserContext } from "../../UserContext";
import Error from "../Helper/Error";
import { FormStyle } from "./styles";
import { ButtonStyle } from "../Button/styles";

const LoginForm = () => {
  const username = useForm("login");
  const password = useForm();

  const { userLogin, error, loading } = useContext(UserContext);

  async function handleSubmit(event: FormEvent) {
    event.preventDefault();

    if (username.validate() && password.validate()) {
      userLogin(username.value, password.value);
    }
  }

  return (
    <FormStyle>
      <div className="animeLeft">
        <h1 className="title">Login</h1>
        <form className="form" onSubmit={handleSubmit}>
          <Input label="Usuário" type="text" name="username" {...username} />
          <Input label="Senha" type="password" name="password" {...password} />
          {loading ? (
            <Button disabled>Carregando...</Button>
          ) : (
            <Button>Entrar</Button>
          )}
          <Error error={error} />
        </form>
        <Link className="perdeu" to="/login/perdeu">
          Perdeu a Senha?
        </Link>
        <div className="cadastro">
          <h2 className="subtitle">Cadastre-se</h2>
          <p>Ainda não possui conta? Cadastre-se no site</p>
          <ButtonStyle>
            <Link to="/login/criar">Cadastro</Link>
          </ButtonStyle>
        </div>
      </div>
    </FormStyle>
  );
};

export default LoginForm;
