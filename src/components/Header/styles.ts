import styled from "styled-components";
import usuario from "../../Assets/usuario.svg";

export const Root = styled.header`
  box-shadow: 0px 1px 1px rgba(0, 0, 0, 0.1);
  position: fixed;
  width: 100%;
  z-index: 100;
  background: white;
  top: 0px;

  nav {
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 4rem;
  }
  .logo {
    padding: 0.5rem 0;
  }
  .login {
    color: #333;
    display: flex;
    align-items: center;
  }
  .login::after {
    content: "";
    display: inline-block;
    width: 14px;
    height: 17px;
    background: url(${usuario}) no-repeat center center;
    margin-left: 0.5rem;
    position: relative;
    top: -1px;
  }
`;
