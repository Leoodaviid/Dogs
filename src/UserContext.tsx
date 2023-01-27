import { createContext, useEffect, useCallback, useState } from "react";
import {
  TOKEN_POST,
  TOKEN_VALIDATE_POST,
  USER_GET,
} from "./services/MainApi/login";
import { useNavigate } from "react-router-dom";

type ContextProviderData = {
  data: {
    id: number;
    email: string;
    username: string;
  };
  userLogin: (username: string, password: string) => Promise<void>;
  userLogout(): Promise<void>;
  error: null;
  loading: boolean;
  login: boolean;
};

export const UserContext = createContext<ContextProviderData>(
  {} as ContextProviderData
);

export const UserStorage = ({ children }: { children: React.ReactNode }) => {
  const [data, setData] = useState<any>();
  const [login, setLogin] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const userLogout = useCallback(
    async function () {
      setData(null);
      setError(null);
      setLoading(false);
      setLogin(false);
      window.localStorage.removeItem("token");
      navigate("/login");
    },
    [navigate]
  );

  async function userLogin(username: string, password: string) {
    try {
      setError(null);
      setLoading(true);
      const response = await TOKEN_POST({ username, password });
      if (response.status !== 200)
        throw new Error(`Error: ${response.statusText}`);
      const token = response.data.token;
      window.localStorage.setItem("token", token);
      await getUser(token);
      navigate("/conta");
    } catch (err: any) {
      const message = err.response.data.statusText;
      setError(err.message);
      setLogin(false);
    } finally {
      setLoading(false);
    }
  }

  async function getUser(token: string) {
    const response = USER_GET(token);
    const data = (await response).data;
    setData(data);
    setLogin(true);
    // console.log(data);
  }

  useEffect(() => {
    async function autoLogin() {
      const token = window.localStorage.getItem("token");
      if (token) {
        try {
          setError(null);
          setLoading(true);
          const response = await TOKEN_VALIDATE_POST(token);
          if (response.status !== 200) throw new Error("Token Inválido");
          await getUser(token);
        } catch (err) {
          alert("Deu erro na validação do token");
          userLogout();
        } finally {
          setLoading(false);
        }
      } else {
        setLogin(false);
      }
    }

    autoLogin();
  }, []);

  return (
    <UserContext.Provider
      value={{
        userLogin,
        userLogout,
        data,
        error,
        loading,
        login,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};
