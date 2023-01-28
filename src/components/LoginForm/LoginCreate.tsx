import { FormEvent, useState } from "react";
import Input from "../Input/Input";
import Button from "../Button/Button";
import useForm from "../../Hooks/useForm";
import { USER_POST } from "../../services/MainApi/login";
import { UserContext } from "../../UserContext";
import { useContext } from "react";
import Error from "../Helper/Error";

const LoginCreate = () => {
  const username = useForm("nome");
  const email = useForm("email");
  const password = useForm();

  const { userLogin } = useContext(UserContext);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  async function handleSubmit(event: FormEvent) {
    event.preventDefault();

    if (username.validate() && email.validate() && password.validate()) {
      try {
        setError(null);
        setLoading(true);
        const response = await USER_POST({
          username: username.value,
          email: email.value,
          password: password.value,
        });
        if (response.status === 200) userLogin(username.value, password.value);
      } catch (err) {
        const message = "Error: Email já cadastrado.";
        setError(message);
      } finally {
        setLoading(false);
      }
    }
  }
  return (
    <section className="animeLeft">
      <h1 className="title">Cadastre-se</h1>
      <form onSubmit={handleSubmit}>
        <Input label="Usuário" type="text" name="username" {...username} />
        <Input label="E-mail" type="email" name="email" {...email} />
        <Input label="Senha" type="password" name="password" {...password} />
        {loading ? (
          <Button disabled>Cadastrando...</Button>
        ) : (
          <Button>Cadastrar</Button>
        )}
        <Error error={error} />
      </form>
    </section>
  );
};

export default LoginCreate;
