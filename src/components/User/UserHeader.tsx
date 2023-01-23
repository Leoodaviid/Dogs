import UserHeaderNav from "./UserHeaderNav";
import { UserHeaderStyle } from "./styled";
import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";

const UserHeader = () => {
  const [title, setTitle] = useState("");
  const location = useLocation();

  useEffect(() => {
    const { pathname } = location;
    switch (pathname) {
      case "/conta/postar":
        setTitle("Poste Sua Foto");
        break;
      case "/conta/estatisticas":
        setTitle("Estatísticas");
        break;
      default:
        setTitle("Minha Conta");
    }
  }, [location]);

  return (
    <UserHeaderStyle>
      <header>
        <h1 className="title">{title}</h1>
        <UserHeaderNav />
      </header>
    </UserHeaderStyle>
  );
};

export default UserHeader;
