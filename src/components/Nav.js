import React from "react";
import { StyledNav } from "../styles";
import { Link } from "react-router-dom";
import NavLink from "./NavLink";

const Nav = () => {
  return (
    <StyledNav>
      <h1>
        <Link to="/">Capture</Link>
      </h1>
      <ul>
        <NavLink toPath="/" title="1. About Us"></NavLink>
        <NavLink toPath="/work" title="2. Our Work"></NavLink>
        <NavLink toPath="/contact" title="3. Contact Us"></NavLink>
        {/*<li>
          <Link to="/">1. About Us</Link>
        </li>
        <li>
          <Link to="/work">2. Our Work</Link>
        </li>
        <li>
          <Link to="/contact">3. Contact Us</Link>
        </li>*/}
      </ul>
    </StyledNav>
  );
};

export default Nav;
