import { handleActions } from 'redux-actions';
import { combineReducers } from 'redux';
import {
  getSerialsRequest,
  getSerialsSuccess,
  getSerialsFailure
} from '../actions';

const result = handleActions(
  {
    [getSerialsRequest]: () => [],
    [getSerialsSuccess]: (state, action) => action.payload
  },
  []
);

const isFetching = handleActions(
  {
    [getSerialsRequest]: () => true,
    [getSerialsSuccess]: () => false,
    [getSerialsFailure]: () => false
  },
  false
);

const error = handleActions(
  {
    [getSerialsRequest]: () => null,
    [getSerialsFailure]: (state, action) => action.payload
  },
  null
);

export default combineReducers({
  result,
  isFetching,
  error
});
