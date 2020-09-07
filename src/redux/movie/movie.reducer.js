import MovieActionTypes from './movie.types'

const INITIAL_STATE = {
    trendingMovies: null,
    popularMovies: null,
    upcomingMovies: null,
    isFetching: false,
    errorMessage: undefined
};

const movieReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case MovieActionTypes.GET_TRENDING_MOVIES_START:
            return {
                ...state,
                isFetching: true
            }
        case MovieActionTypes.GET_TRENDING_MOVIES_SUCCESS:
            return {
                ...state,
                isFetching: false,
                trendingMovies: action.payload
            }
        case MovieActionTypes.GET_TRENDING_MOVIES_FAILURE:
            return {
                ...state,
                isFetching: false,
                errorMessage: action.payload
            }
        case MovieActionTypes.GET_POPULAR_MOVIES_START:
            return {
                ...state,
                isFetching: true
            }
        case MovieActionTypes.GET_POPULAR_MOVIES_SUCCESS:
            return {
                ...state,
                isFetching: false,
                popularMovies: action.payload
            }
        case MovieActionTypes.GET_POPULAR_MOVIES_FAILURE:
            return {
                ...state,
                isFetching: false,
                errorMessage: action.payload
            }
        case MovieActionTypes.GET_UPCOMING_MOVIES_START:
            return {
                ...state,
                isFetching: true
            }
        case MovieActionTypes.GET_UPCOMING_MOVIES_SUCCESS:
            return {
                ...state,
                isFetching: false,
                upcomingMovies: action.payload
            }
        case MovieActionTypes.GET_UPCOMING_MOVIES_FAILURE:
            return {
                ...state,
                isFetching: false,
                errorMessage: action.payload
            }

        // case MovieActionTypes.GET_TRENDING_MOVIES:
        //     return {
        //         ...state,
        //         trendingMovies: action.payload,
        //     }
        // case MovieActionTypes.GET_POPULAR_MOVIES:
        //     return {
        //         ...state,
        //         popularMovies: action.payload,
        //     }
        // case MovieActionTypes.GET_UPCOMING_MOVIES:
        //     return {
        //         ...state,
        //         upcomingMovies: action.payload,
        //     }
        default:
            return state
    }
};

export default movieReducer;