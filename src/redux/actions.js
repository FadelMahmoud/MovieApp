/* eslint-disable prettier/prettier */


// This react-redux used to save favourite user movies on his local devices storage
// with the help of AsyncStorage package
export const SET_MOVIES = 'SET_TASKS';
export const SET_MOVIE_ID = 'SET_TASK_ID';

export const setMovies = tasks => dispatch => {
  dispatch({
    type: SET_MOVIES,
    payload: tasks,
  });
};

export const setMovieId = taskId => dispatch => {
  dispatch({
    type: SET_MOVIE_ID,
    payload: taskId,
  });
};
