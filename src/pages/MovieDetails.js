import React, { useState, useEffect } from "react";
import { useRouteMatch } from "react-router-dom";
import { MovieState } from "../movieState";
import styled from "styled-components";
import { motion } from "framer-motion";
import { pageAnimation } from "../animation";

const MovieDetails = () => {
  const { url } = useRouteMatch();
  const [movies, setMovies] = useState(MovieState());
  const [movie, setMovie] = useState({});
  const [flag, setFlag] = useState(true);
  console.log(setMovies);

  useEffect(() => {
    let currentMovie = movies.filter((stateMovie) => stateMovie.url === url);
    if (!currentMovie.length) {
      setFlag(false);
      setMovie({});
    } else {
      setFlag(true);
      setMovie(currentMovie[0]);
    }
  }, [movies, url]);
  return (
    <Details
      variants={pageAnimation}
      initial="hidden"
      animate="show"
      exit="exit"
    >
      {!flag ? (
        <h1>Movie not found!!!</h1>
      ) : (
        <>
          <HeadLine>
            <h2>{movie.title}</h2>
            <img src={movie.mainImg} alt="movie" />
          </HeadLine>
          <Awards>
            {movie.awards?.map((award) => (
              <Award title={award.title} description={award.description} key />
            ))}
          </Awards>
          <ImageDisplay>
            <img src={movie.secondaryImg} alt="movie" />
          </ImageDisplay>
        </>
      )}
    </Details>
  );
};

const Details = styled(motion.div)`
  color: white;
  overflow: hidden;
  h1 {
    padding: 15vh;
    font-size: 3rem;
    font-weight: lighter;
    color: red;
  }
`;

const HeadLine = styled.div`
  min-height: 90vh;
  padding-top: 20vh;
  position: relative;
  h2 {
    text-align: center;
    padding-bottom: 2rem;
    font-weight: lighter;
  }
  img {
    width: 100%;
    height: 70vh;
    object-fit: cover;
  }
`;

const Awards = styled.div`
  padding: 7rem 7rem 5rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
`;

const Award = ({ title, description }) => {
  return (
    <AwardStyle>
      <h3>{title}</h3>
      <div className="line"></div>
      <p>{description}</p>
    </AwardStyle>
  );
};

const AwardStyle = styled.div`
  padding-bottom: 2rem;
  width: 100%;
  h3 {
    font-size: 2rem;
  }
  p {
    font-size: 1.2rem;
  }
  .line {
    height: 5px;
    background-color: #23d997;
    margin-top: 1.5rem;
    width: 100%;
  }
`;

const ImageDisplay = styled.div`
  width: 100vw;
  height: 100vh;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

export default MovieDetails;
