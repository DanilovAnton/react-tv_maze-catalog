import {
  getSerialsRequest,
  getSerialsSuccess,
  getSerialsFailure,

  getSerialByIdRequrst,
  getSerialByIdSuccess,
  getSerialByIdFailure
} from '../actions';
import { search, show } from '../api.js';

export const tvmazeFetchMiddleware = store => next => action => {
  if (action.type === getSerialsRequest.toString()) {      
    search(action.payload)
    .then(data => store.dispatch(getSerialsSuccess(data)))
    .catch(error => store.dispatch(getSerialsFailure(error)))    
  }
  if (action.type === getSerialByIdRequrst.toString()) {      
      show(action.payload)
        .then(data => store.dispatch(getSerialByIdSuccess(data)))
        .catch(error => store.dispatch(getSerialByIdFailure(error)))
  }
  next(action)


};
