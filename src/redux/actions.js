/* eslint-disable prettier/prettier */
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
