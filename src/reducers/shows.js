import { handleActions } from 'redux-actions';
import { combineReducers } from 'redux';
import {
  getSerialByIdRequest,
  getSerialByIdSuccess,
  getSerialByIdFailure
} from '../actions';


const entities = handleActions(
    {
      [getSerialByIdRequest]: () => [],
      [getSerialByIdSuccess]: (state, action) => action.payload
    },
    []
  );
  
  const isFetching = handleActions(
    {
      [getSerialByIdRequest]: () => true,
      [getSerialByIdSuccess]: () => false,
      [getSerialByIdFailure]: () => false
    },
    false
  );
  
  const error = handleActions(
    {
      [getSerialByIdRequest]: () => null,
      [getSerialByIdFailure]: (state, action) => action.payload
    },
    null
  );

  export default combineReducers({
    entities,
    isFetching,
    error
  });