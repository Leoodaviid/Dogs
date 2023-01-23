import { useContext, useState, useEffect } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { UserContext } from "../../UserContext";
import { ReactComponent as MinhasFotos } from "../../Assets/feed.svg";
import { ReactComponent as Estatisticas } from "../../Assets/estatisticas.svg";
import { ReactComponent as AdicionarFoto } from "../../Assets/adicionar.svg";
import { ReactComponent as Sair } from "../../Assets/sair.svg";
import { UserNavStyle, MobileButtonStyle } from "./styled";
import useMedia from "../../Hooks/useMedia";

const UserHeaderNav = () => {
  const { userLogout } = useContext(UserContext);

  const mobile = useMedia("(max-width: 40rem)");
  const [mobileMenu, setMobileMenu] = useState(false);

  const { pathname } = useLocation();
  useEffect(() => {
    setMobileMenu(false);
  }, [pathname]);

  return (
    <>
      <MobileButtonStyle>
        {mobile && (
          <button
            className={`mobileButton ${mobileMenu && `mobileButtonActive`}`}
            aria-label="Menu"
            onClick={() => setMobileMenu(!mobileMenu)}
          ></button>
        )}
      </MobileButtonStyle>
      <UserNavStyle>
        <nav
          className={`${mobile ? `navMobile` : `nav animeLeft`} ${
            mobileMenu && `navMobileActive`
          }`}
        >
          <NavLink to="/conta" end>
            <MinhasFotos />
            {mobile && "Minhas Fotos"}
          </NavLink>
          <NavLink to="/conta/estatisticas">
            <Estatisticas />
            {mobile && "Estatísticas"}
          </NavLink>
          <NavLink to="/conta/postar">
            <AdicionarFoto />
            {mobile && "Adicionar Fotos"}
          </NavLink>
          <button onClick={userLogout}>
            <Sair />
            {mobile && "Sair"}
          </button>
        </nav>
      </UserNavStyle>
    </>
  );
};

export default UserHeaderNav;
