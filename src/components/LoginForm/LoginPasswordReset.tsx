import { useEffect, useState, FormEvent } from "react";
import useApi from "../../Hooks/useApi";
import useForm from "../../Hooks/useForm";
import Botao from "../Button/Button";
import Error from "../Helper/Error";
import Head from "../Helper/Head";
import Input from "../Input/Input";

const LoginPasswordReset = () => {
  const [login, setLogin] = useState("");
  const [key, setKey] = useState("");
  const password = useForm("senha");
  const { PasswordReset, error, loading } = useApi();

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const key = params.get("key");
    const login = params.get("login");
    if (key) setKey(key);
    if (login) setLogin(login);
  }, []);

  async function handleSubmit(event: FormEvent) {
    event.preventDefault();
    if (password.validate()) {
      PasswordReset({
        login,
        key,
        password: password.value,
      });
    }
  }
  return (
    <div>
      <Head title="Resete a senha" />
      <h1 className="title">Resete a Senha</h1>
      <form onSubmit={handleSubmit}>
        <Input
          label="Nova Senha"
          type="password"
          name="password"
          {...password}
        />
        {loading ? (
          <Botao disabled>Resetando...</Botao>
        ) : (
          <Botao>Resetar</Botao>
        )}
      </form>
      <Error error={error} />
    </div>
  );
};

export default LoginPasswordReset;
