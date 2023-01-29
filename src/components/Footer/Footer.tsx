import { StylesFooter } from "./styles";
import { ReactComponent as Dogs } from "../../Assets/dogs-footer.svg";

const Footer = () => {
  return (
    <StylesFooter>
      <Dogs />
      <p>Dogs. Alguns direitos reservados.</p>
    </StylesFooter>
  );
};

export default Footer;
