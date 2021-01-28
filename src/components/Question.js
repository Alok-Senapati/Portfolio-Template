import React, { useState } from "react";
import styled from "styled-components";
import { motion } from "framer-motion";

const Question = ({ children, title }) => {
  const [flag, setFlag] = useState(false);
  const toggleFlag = (e) => {
    setFlag(!flag);
  };
  return (
    <QuestionStyle layout>
      <motion.h4 layout onClick={toggleFlag}>
        {title}
      </motion.h4>
      {flag ? children : ""}
      <div className="faq-line"></div>
    </QuestionStyle>
  );
};

const QuestionStyle = styled(motion.div)`
  h4 {
    cursor: pointer;
  }
  p {
    padding: 1rem 0.5rem;
  }
  .faq-line {
    margin: 2rem 0rem;
  }
`;

export default Question;
