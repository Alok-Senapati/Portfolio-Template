import styled from "styled-components";
import { motion } from "framer-motion";

export const About = styled(motion.div)`
  min-height: 90vh;
  color: white;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10rem 7rem 5rem;
`;

export const Description = styled.div`
  flex: 1;
  padding-right: 5rem;
  h2 {
    font-weight: lighter;
  }
  z-index: 5;
`;

export const Image = styled(motion.div)`
  flex: 1;
  overflow: hidden;
  img {
    width: 100%;
    height: 80vh;
    object-fit: cover;
  }
  z-index: 5;
`;

export const Hide = styled.div`
  overflow: hidden;
`;

export const Services = styled(About)`
  padding-top: 5rem;
  h2 {
    padding-bottom: 5rem;
  }
  p {
    width: 70%;
    padding: 2rem 0rem 4rem 0rem;
  }
`;

export const Cards = styled(motion.div)`
  display: flex;
  flex-wrap: wrap;
`;

export const Card = styled(motion.div)`
  flex-basis: 20rem;
  .icon {
    display: flex;
    align-items: center;
    h3 {
      margin-left: 1rem;
      padding: 1rem;
      background: white;
      color: black;
    }
  }
`;

export const Faq = styled(About)`
  padding-top: 5rem;
  display: block;
  h2 {
    padding-bottom: 3rem;
    font-weight: lighter;
  }
  h4 {
    margin-top: 6rem;
    margin-bottom: 1rem;
  }
  span {
    display: block;
  }
  .faq-line {
    height: 2px;
    width: 100%;
    background: #cccccc;
  }
  .question {
    padding: 5rem 0rem 0rem;
    h4 {
      cursor: pointer;
    }
  }
  .answer {
    padding: 1rem 0rem;
    p {
      padding: 1rem;
      font-size: 1.2rem;
    }
  }
`;

export const StyledNav = styled.nav`
  position: sticky;
  overflow-x: hidden;
  top: 0;
  left: 0;
  z-index: 10;
  width: 100vw;
  min-height: 10vh;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0rem 7rem 0rem 7rem;
  font-size: 1.3rem;
  color: white;
  overflow: hidden;
  background: #2a2a2a;
  a {
    text-decoration: none;
    color: white;
  }
  h1 {
    a {
      font-size: 1.5rem;
      font-family: "Lobster", cursive;
    }
  }
  li {
    position: relative;
  }
  ul {
    display: flex;
    list-style: none;
    width: 50%;
    justify-content: space-around;
    align-items: center;
  }
`;
