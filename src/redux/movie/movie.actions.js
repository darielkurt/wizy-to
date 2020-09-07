import MovieActionTypes from './movie.types'

export const getTrendingMoviesStart = () => ({
    type: MovieActionTypes.GET_TRENDING_MOVIES_START,
})

export const getTrendingMoviesSuccess = movieResults => ({
    type: MovieActionTypes.GET_TRENDING_MOVIES_SUCCESS,
    payload: movieResults
})

export const getTrendingMoviesFailure = errorMessage => ({
    type: MovieActionTypes.GET_TRENDING_MOVIES_FAILURE,
    payload: errorMessage
})

export const getTrendingMoviesStartAsync = () => {
    return dispatch => {
        dispatch(getTrendingMoviesStart())
        fetch(
            "https://api.themoviedb.org/3/trending/movie/day?api_key=1c405e1c5592d214f74b8cb74e0781e9"
          )
            .then((response) => response.json()) // one extra step
            .then((data) => {
                dispatch(getTrendingMoviesSuccess(data))
            //   this.props.getTrendingMovies({ movies: data.results });
            })
            .catch((error) => dispatch(getTrendingMoviesFailure(error.message)));
    }
}

export const getPopularMoviesStart = () => ({
    type: MovieActionTypes.GET_POPULAR_MOVIES_START,
})

export const getPopularMoviesSuccess = movieResults => ({
    type: MovieActionTypes.GET_POPULAR_MOVIES_SUCCESS,
    payload: movieResults
})

export const getPopularMoviesFailure = errorMessage => ({
    type: MovieActionTypes.GET_POPULAR_MOVIES_FAILURE,
    payload: errorMessage
})

export const getPopularMoviesStartAsync = () => {
    return dispatch => {
        dispatch(getPopularMoviesStart())
        fetch(
            "https://api.themoviedb.org/3/movie/popular?api_key=1c405e1c5592d214f74b8cb74e0781e9&language=en-US&page=1"
          )
            .then((response) => response.json()) // one extra step
            .then((data) => {
                dispatch(getPopularMoviesSuccess(data))
            //   this.props.getTrendingMovies({ movies: data.results });
            })
            .catch((error) => dispatch(getPopularMoviesFailure(error.message)));
    }
}

export const getUpcomingMoviesStart = () => ({
    type: MovieActionTypes.GET_UPCOMING_MOVIES_START,
})

export const getUpcomingMoviesSuccess = movieResults => ({
    type: MovieActionTypes.GET_UPCOMING_MOVIES_SUCCESS,
    payload: movieResults
})

export const getUpcomingMoviesFailure = errorMessage => ({
    type: MovieActionTypes.GET_UPCOMING_MOVIES_FAILURE,
    payload: errorMessage
})

export const getUpcomingMoviesStartAsync = () => {
    return dispatch => {
        dispatch(getUpcomingMoviesStart())
        fetch(
            "https://api.themoviedb.org/3/movie/upcoming?api_key=1c405e1c5592d214f74b8cb74e0781e9&language=en-US&page=1"
          )
            .then((response) => response.json()) // one extra step
            .then((data) => {
                dispatch(getUpcomingMoviesSuccess(data))
            //   this.props.getTrendingMovies({ movies: data.results });
            })
            .catch((error) => dispatch(getUpcomingMoviesFailure(error.message)));
    }
}

// export const getTrendingMovies = trendingMovies => ({
//     type: 'GET_TRENDING_MOVIES',
//     payload: trendingMovies
// })

// export const getPopularMovies = popularMovies => ({
//     type: 'GET_POPULAR_MOVIES',
//     payload: popularMovies
// })

// export const getUpcomingMovies = upcomingMovies => ({
//     type: 'GET_UPCOMING_MOVIES',
//     payload: upcomingMovies
// })