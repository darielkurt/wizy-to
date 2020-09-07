import React from "react";

import "./movie.styles.scss";

const Movie = (props) => {
  return(
    <div className="movie">
      <div className='movie-poster-container'>
      <img alt='movie-poster' src={`https://image.tmdb.org/t/p/w500/` + props.imgSource} className='movie-poster' /></div>
      <div className="movie-title">{props.title}</div>
      <div className="movie-year">{props.date}</div>
    </div>
  );
}

export default Movie;
