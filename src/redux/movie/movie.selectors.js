import { createSelector } from 'reselect'

const selectTrendingMovies = state => state.movies

export const selectIsGetTrendingMoviesFetching = createSelector(
    [selectTrendingMovies],
    movies => movies.isFetching
)

const selectPopularMovies = state => state.movies

export const selectIsGetPopularMoviesFetching = createSelector(
    [selectPopularMovies],
    movies => movies.isFetching
)

const selectUpcomingMovies = state => state.movies

export const selectIsGetUpcomingMoviesFetching = createSelector(
    [selectUpcomingMovies],
    movies => movies.isFetching
)