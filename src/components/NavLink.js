import React from "react";
import { navLine } from "../animation";
import styled from "styled-components";
import { motion, useAnimation } from "framer-motion";
import { Link, useLocation } from "react-router-dom";

const NavLink = ({ toPath, title }) => {
  const control = useAnimation();
  const { pathname } = useLocation();
  console.log(toPath, pathname);

  if (pathname === toPath) {
    control.start("show");
  } else {
    control.start("hidden");
  }

  return (
    <StyledNavLink>
      <div className="link">
        <Link to={toPath}>{title}</Link>
      </div>

      <motion.div
        className="nav-line"
        variants={navLine}
        animate={control}
        initial="hidden"
      ></motion.div>
    </StyledNavLink>
  );
};

const StyledNavLink = styled(motion.li)`
  height: 2rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  .link {
    padding: 0rem 1rem;
  }
  .nav-line {
    padding-top: 1rem;
    width: 100%;
    height: 4px;
    background: #23d997;
    padding: 0rem;
  }
`;

export default NavLink;
