import React from "react";
import { NavLink } from "react-router-dom";
import NavStyled from "./NavStyled";

const Nav = () => {
  return (
    <NavStyled>
      <ul>
        <li>
          <NavLink to="/home" activeClassName="navActive">
            Home
          </NavLink>
        </li>

        <li>
          <NavLink to="/config" activeClassName="navActive">
            Configuracion
          </NavLink>
        </li>
      </ul>
    </NavStyled>
  )
}

export default Nav