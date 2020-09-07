import React from "react";
import { connect } from "react-redux";

import Movie from "../../components/movie/movie.component";

import "./popular.styles.scss";

const PopularMovies = (props) => {
  return (
    <div className="popular-movies">
      <h1>Popular Movies</h1>
      <div className="movie-list">
        {props.popularMovies ? (
          props.popularMovies.movies.map((movie) => (
            <Movie
              imgSource={movie.poster_path}
              title={movie.title}
              date={movie.release_date}
              key={movie.id}
            />
          ))
        ) : (
          <div>LOADING</div>
        )}
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  popularMovies: state.movies.popularMovies,
});

export default connect(mapStateToProps)(PopularMovies);
