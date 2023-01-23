import { FormEvent } from "react";
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

  const { userLogin, error, loading } = useContext(UserContext);

  async function handleSubmit(event: FormEvent) {
    event.preventDefault();

    const response = await USER_POST({
      username: username.value,
      email: email.value,
      password: password.value,
    });

    if (response.status === 200) userLogin(username.value, password.value);

    console.log(response.data);
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
