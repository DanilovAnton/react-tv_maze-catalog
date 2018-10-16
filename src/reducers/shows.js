import { handleActions } from 'redux-actions';
import { combineReducers } from 'redux';
import {
  getSerialByIdRequrst,
  getSerialByIdSuccess,
  getSerialByIdFailure
} from '../actions';


const entities = handleActions(
    {
      [getSerialByIdRequrst]: () => [],
      [getSerialByIdSuccess]: (state, action) => action.payload
    },
    []
  );
  
  const isFetching = handleActions(
    {
      [getSerialByIdRequrst]: () => true,
      [getSerialByIdSuccess]: () => false,
      [getSerialByIdFailure]: () => false
    },
    false
  );
  
  const error = handleActions(
    {
      [getSerialByIdRequrst]: () => null,
      [getSerialByIdFailure]: (state, action) => action.payload
    },
    null
  );

  export default combineReducers({
    entities,
    isFetching,
    error
  });