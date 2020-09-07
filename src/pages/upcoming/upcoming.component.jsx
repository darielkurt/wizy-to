import React from "react";
import { connect } from "react-redux";
import Movie from "../../components/movie/movie.component";

import "./upcoming.styles.scss";

const UpcomingMovies = (props) => {
  return (
    <div className="upcoming-movies">
      <h1>Upcoming Movies</h1>

      <div className="movie-list">
        {props.upcomingMovies ? (
          props.upcomingMovies.results.map((movie) => (
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
  upcomingMovies: state.movies.upcomingMovies,
});

export default connect(mapStateToProps)(UpcomingMovies);

// <TextField
// id="filled-full-width"
// label="Search movies here"
// style={{ margin: 8 }}
// color="#FFFFFF"
// placeholder=""
// helperText=""
// fullWidth
// margin="normal"
// InputLabelProps={{
//   shrink: true,
// }}
// variant="filled"
// />
