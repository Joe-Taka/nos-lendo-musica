import { Link } from "react-router-dom";
import {Nav } from "./styles";
import main_logo from "../../../assets/main_logo.svg";

//! IMPORTANTE
//. Como o menu de navegação (ícone 'lendo música' + botões) é diferente dependendo da página, foi necessário criar uma lógica de renderização e estilização condicional. 'secondaryElement' é um prop criado para receber os botões 'Últimas buscas' e 'Limpar histórico', quando necessário. Se não for passado nenhum prop, apenas o logo será renderizado.
export const NavBar = ({secondaryElement}:{secondaryElement?:React.ReactElement}) => {
  return (
      <Nav secondaryElement={secondaryElement ? true : false}>
        <li style={{listStyleType: 'none'}}>
          <Link to="/">
            <img src={main_logo} />
          </Link>
        </li>
        <li style={{listStyleType: 'none'}}>{secondaryElement ? secondaryElement : null}</li>
      </Nav>
  );
};
