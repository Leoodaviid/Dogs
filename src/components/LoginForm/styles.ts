import styled from "styled-components";
import imgBackground from "../../Assets/login.jpg";

const FormStyle = styled.section`
  .form {
    margin-bottom: 2rem;
  }
  .perdeu {
    display: inline-block;
    color: #666;
    padding: 0.5rem 0;
    line-height: 1;
  }
  .perdeu::after {
    content: "";
    height: 2px;
    width: 100%;
    background: currentColor;
    display: block;
  }
  .cadastro {
    margin-top: 4rem;
  }
  .cadastro p {
    margin-top: 2rem;
    margin-bottom: 2rem;
  }
  .subtitle {
    font-family: var(--type-second);
    line-height: 1;
    font-size: 2rem;
  }
  .subtitle::after {
    content: "";
    display: block;
    background: #ddd;
    height: 0.5rem;
    width: 3rem;
    border-radius: 0.2rem;
  }
`;

const LoginStyle = styled.div`
  .login {
    display: grid;
    grid-template-columns: 1fr 1fr;
    min-height: 100vh;
    gap: 2rem;
  }
  .login::before {
    display: block;
    content: "";
    background: url(${imgBackground}) no-repeat center center;
    background-size: cover;
  }
  .forms {
    max-width: 30rem;
    padding: 1rem;
  }
  @media (max-width: 40rem) {
    .login {
      grid-template-columns: 1fr;
    }
    .login::before {
      display: none;
    }
    .forms {
      max-width: 100%;
    }
  }
`;

export { FormStyle, LoginStyle };
