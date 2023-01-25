import { useContext } from "react";
import { Root } from "./styles";
import { Link } from "react-router-dom";
import { ReactComponent as Dogs } from "../../Assets/dogs.svg";
import { UserContext } from "../../UserContext";

const Header = () => {
  const { data } = useContext(UserContext);

  return (
    <Root>
      <nav className="container">
        <Link className="logo" to="/" aria-label="Dogs - Home">
          <Dogs />
        </Link>
        {data ? (
          <Link className="login" to="/conta">
            {data.username}
          </Link>
        ) : (
          <Link className="login" to="/login">
            Login / Criar
          </Link>
        )}
      </nav>
    </Root>
  );
};

export default Header;
