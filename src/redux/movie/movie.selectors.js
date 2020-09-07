import { createSelector } from 'reselect'

const selectTrendingMovies = state => state.movies

export const selectIsGetTrendingMoviesFetching = createSelector(
    [selectTrendingMovies],
    movies => movies.isFetching
)