import styled from "styled-components";

export const About = styled.div`
  min-height: 90vh;
  color: white;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 5rem 7rem;
`;

export const Description = styled.div`
  flex: 1;
  padding-right: 5rem;
  h2 {
    font-weight: lighter;
  }
`;

export const Image = styled.div`
  flex: 1;
  overflow: hidden;
  img {
    width: 100%;
    height: 80vh;
    object-fit: cover;
  }
`;

export const Hide = styled.div`
  overflow: hidden;
`;

export const Services = styled(About)`
  h2 {
    padding-bottom: 5rem;
  }
  p {
    width: 70%;
    padding: 2rem 0rem 4rem 0rem;
  }
`;

export const Cards = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

export const Card = styled.div`
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
  display: block;
  h2 {
    padding-bottom: 3rem;
    font-weight: lighter;
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
