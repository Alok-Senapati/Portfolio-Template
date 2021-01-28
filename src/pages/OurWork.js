import React from "react";
import styled from "styled-components";
import { Link, useRouteMatch } from "react-router-dom";
import athelete from "../img/athlete-small.png";
import racer from "../img/theracer-small.png";
import goodtime from "../img/goodtimes-small.png";
import { motion } from "framer-motion";
import {
  pageAnimation,
  fade,
  imageAnim,
  lineAnim,
  slider,
  sliderContainer,
} from "../animation";

import { useScroll } from "../useScroll";

const OurWork = () => {
  const { url } = useRouteMatch();
  const [element, control] = useScroll(0.5);
  const [element1, control1] = useScroll(0.5);
  const [element2, control2] = useScroll(0.5);
  return (
    <Work
      variants={pageAnimation}
      initial="hidden"
      animate="show"
      exit="exit"
      style={{ background: "#fff", color: "black" }}
    >
      <motion.div variants={sliderContainer} initial="hidden" animate="show">
        <Frame1 variants={slider} />
        <Frame2 variants={slider} />
        <Frame3 variants={slider} />
        <Frame4 variants={slider} />
        <Frame5 variants={slider} />

        <Movie variants={fade} animate={control} ref={element} initial="hidden">
          <motion.h2 variants={fade}>The Athlete</motion.h2>
          <motion.div variants={lineAnim} className="line"></motion.div>
          <Link to={`${url}/the-athlete`}>
            <Hide>
              <motion.img variants={imageAnim} src={athelete} alt="athelete" />
            </Hide>
          </Link>
        </Movie>
      </motion.div>

      <Movie variants={fade} animate={control1} ref={element1} initial="hidden">
        <h2>The Racer</h2>
        <motion.div variants={lineAnim} className="line"></motion.div>
        <Link to={`${url}/the-racer`}>
          <Hide>
            <motion.img variants={imageAnim} src={racer} alt="racer" />
          </Hide>
        </Link>
      </Movie>

      <Movie variants={fade} animate={control2} ref={element2} initial="hidden">
        <h2>Good Times</h2>
        <motion.div variants={lineAnim} className="line"></motion.div>
        <Link to={`${url}/goodtimes`}>
          <Hide>
            <motion.img variants={imageAnim} src={goodtime} alt="goodtime" />
          </Hide>
        </Link>
      </Movie>
    </Work>
  );
};

const Work = styled(motion.div)`
  padding: 10vh 7rem 5rem;
  color: white;
  overflow-x: hidden;
  @media (max-width: 500px) {
    padding: 10vh 3rem 5rem;
  }
`;

const Movie = styled(motion.div)`
  padding-bottom: 10rem;
  h2 {
    font-weight: lighter;
    padding: 1rem 0rem;
  }
  .line {
    height: 0.5rem;
    background: #cccccc;
    margin-bottom: 3rem;
  }
  img {
    width: 100%;
    height: 70vh;
    object-fit: cover;
    @media (max-width: 500px) {
      height: 60vh;
    }
  }
`;

const Hide = styled.div`
  overflow: hidden;
`;

const Frame1 = styled(motion.div)`
  width: 100%;
  height: 150vh;
  background-color: red;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 7;
`;
const Frame2 = styled(Frame1)`
  background-color: blue;
`;
const Frame3 = styled(Frame1)`
  background-color: green;
`;
const Frame4 = styled(Frame1)`
  background-color: yellow;
`;
const Frame5 = styled(Frame1)`
  background-color: cyan;
`;

export default OurWork;
