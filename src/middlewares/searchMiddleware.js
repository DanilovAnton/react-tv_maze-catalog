import {
  getSerialsRequest,
  getSerialsSuccess,
  getSerialsFailure,
  getSerialByIdRequest,
  getSerialByIdSuccess,
  getSerialByIdFailure
} from '../actions';
import { search, show } from '../api.js';

export const tvmazeFetchMiddleware = store => next => action => {  
  if (action.type === getSerialsRequest.toString()) {
    search(action.payload)
      .then(data => store.dispatch(getSerialsSuccess(data)))
      .catch(error => store.dispatch(getSerialsFailure(error)));
  }
  next(action);
};

export const serialFetchMiddleware = store => next => action => {
  if (action.type === getSerialByIdRequest.toString()) {    
    show(action.payload)
      .then(data => store.dispatch(getSerialByIdSuccess(data)))
      .catch(error => store.dispatch(getSerialByIdFailure(error)));
  }
  next(action);
};
