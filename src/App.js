import React from "react";
import { connect } from "react-redux";

import { Switch, Route } from "react-router-dom";

import Header from "./components/header/header.component";
import BrowseMovies from "./pages/browse/browse.component";
import PopularMovies from "./pages/popular/popular.component";
import UpcomingMovies from "./pages/upcoming/upcoming.component";

import { getTrendingMoviesStartAsync, getPopularMoviesStartAsync, getUpcomingMoviesStartAsync } from './redux/movie/movie.actions'
import { selectIsGetTrendingMoviesFetching, selectIsGetPopularMoviesFetching, selectIsGetUpcomingMoviesFetching } from './redux/movie/movie.selectors'
import { createStructuredSelector } from 'reselect'

// import { getTrendingMovies, getPopularMovies, getUpcomingMovies } from "./redux/movie/movie.actions";

import "./App.scss";

class App extends React.Component {
  componentDidMount() {

    this.props.getTrendingMoviesStartAsync();
    this.props.getPopularMoviesStartAsync();
    this.props.getUpcomingMoviesStartAsync();

    // fetch(
    //   "https://api.themoviedb.org/3/movie/popular?api_key=1c405e1c5592d214f74b8cb74e0781e9&language=en-US&page=1"
    // )
    //   .then((response) => response.json()) // one extra step
    //   .then((data) => {
    //     this.props.getPopularMovies({ movies: data.results });
    //   })
    //   .catch((error) => console.error(error));

    // fetch(
    //   "https://api.themoviedb.org/3/trending/all/day?api_key=1c405e1c5592d214f74b8cb74e0781e9"
    // )
    //   .then((response) => response.json()) // one extra step
    //   .then((data) => {
    //     this.props.getTrendingMovies({ movies: data.results });
    //   })
    //   .catch((error) => console.error(error));

    // fetch(
    //   "https://api.themoviedb.org/3/movie/upcoming?api_key=1c405e1c5592d214f74b8cb74e0781e9&language=en-US&page=1"
    // )
    //   .then((response) => response.json()) // one extra step
    //   .then((data) => {
    //     this.props.getUpcomingMovies({ movies: data.results });
    //   })
    //   .catch((error) => console.error(error));

  }

  render() {
    // const {  }

    return (
      <div className="wizy-to">
        <Header />
        <div className="body">
          <Switch>
            <Route
              exact
              path="/movies/browse"
              render={(props) => (
                <BrowseMovies trendingMovies={this.props.isTrendingMoviesFetching} pageName="Browse Movies" {...props} />
              )}
            />
            <Route
              path="/movies/browse/:movieId"
              render={(props) => (
                <BrowseMovies pageName="Browse Movies" {...props} />
              )}
            />
            <Route
              pageName="Popular Movies"
              path="/movies/popular"
              render={(props) => (
                <PopularMovies popularMovies={this.props.isPopularMoviesFetching} pageName="Popular Movies" {...props} />
              )}
            />
            <Route
              pageName="Upcoming Movies"
              path="/movies/upcoming"
              render={(props) => (
                <UpcomingMovies upcomingMovies={this.props.isUpcomingMoviesFetching} pageName="Upcoming Movies" {...props} />
              )}
            />
          </Switch>
        </div>
      </div>
    );
  }
}

// const mapDispatchToProps = (dispatch) => ({
//   getTrendingMovies: (trendingMovies) =>
//     dispatch(getTrendingMovies(trendingMovies)),
//   getPopularMovies: (popularMovies) =>
//     dispatch(getPopularMovies(popularMovies)),
//   getUpcomingMovies: (upcomingMovies) =>
//     dispatch(getUpcomingMovies(upcomingMovies)),
// });

const mapStateToProps = createStructuredSelector ({
  isTrendingMoviesFetching: selectIsGetTrendingMoviesFetching,
  isPopularMoviesFetching: selectIsGetPopularMoviesFetching,
  isUpcomingMoviesFetching: selectIsGetUpcomingMoviesFetching,
})

const mapDispatchToProps = dispatch => ({
  getTrendingMoviesStartAsync: () => dispatch(getTrendingMoviesStartAsync()),
  getPopularMoviesStartAsync: () => dispatch(getPopularMoviesStartAsync()),
  getUpcomingMoviesStartAsync: () => dispatch(getUpcomingMoviesStartAsync()),
})

export default connect(mapStateToProps, mapDispatchToProps)(App);