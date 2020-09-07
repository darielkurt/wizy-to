import { combineReducers } from "redux";

import movieReducer from "./movie/movie.reducer";

export default combineReducers({
  movies: movieReducer,
});
