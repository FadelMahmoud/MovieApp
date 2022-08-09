/* eslint-disable prettier/prettier */
import {SET_MOVIES, SET_MOVIE_ID} from './actions';

const initialState = {
  movies: [],
  movieId: 1,
};

function taskReducer(state = initialState, action) {
  switch (action.type) {
    case SET_MOVIES:
      return {...state, movies: action.payload};
    case SET_MOVIE_ID:
      return {...state, movieId: action.payload};
    default:
      return state;
  }
}

export default taskReducer;
