import { Routes, Route, Navigate } from "react-router-dom";
import LoginCreate from "../../components/LoginForm/LoginCreate";
import LoginForm from "../../components/LoginForm/LoginForm";
import LoginPasswordLost from "../../components/LoginForm/LoginPasswordLost";
import LoginPasswordReset from "../../components/LoginForm/LoginPasswordReset";
import { UserContext } from "../../UserContext";
import { useContext } from "react";
import { LoginStyle } from "../../components/LoginForm/styles";
import NotFound from "../../components/NotFound/NotFound";

const Login = () => {
  const { login } = useContext(UserContext);

  if (login === true) return <Navigate to="/conta" />;
  return (
    <LoginStyle>
      <section className="login">
        <div className="forms">
          <Routes>
            <Route path="/" element={<LoginForm />} />
            <Route path="criar" element={<LoginCreate />} />
            <Route path="perdeu" element={<LoginPasswordLost />} />
            <Route path="resetar" element={<LoginPasswordReset />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </div>
      </section>
    </LoginStyle>
  );
};

export default Login;
