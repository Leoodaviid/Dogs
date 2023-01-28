import { FormEvent } from "react";
import useApi from "../../Hooks/useApi";
import useForm from "../../Hooks/useForm";
import Botao from "../Button/Button";
import Error from "../Helper/Error";
import Input from "../Input/Input";

const LoginPasswordLost = () => {
  const login = useForm("nome");
  const { PasswordLost, data, error, loading } = useApi();

  async function handleSubmit(event: FormEvent) {
    event.preventDefault();
    if (login.validate()) {
      PasswordLost({
        login: login.value,
        url: window.location.href.replace("perdeu", "resetar"),
      });
    }
  }
  return (
    <section>
      <h1 className="title">Perdeu a senha?</h1>
      {data ? (
        <p style={{ color: "#4c1" }}>{data}</p>
      ) : (
        <form onSubmit={handleSubmit}>
          <Input label="Email / Usuário" type="text" name="email" {...login} />
          {loading ? (
            <Botao disabled>Enviando...</Botao>
          ) : (
            <Botao>Enviar Email</Botao>
          )}
        </form>
      )}

      <Error error={error} />
    </section>
  );
};

export default LoginPasswordLost;
