import rootReducer from './reducers';
import { createStore, applyMiddleware, compose } from 'redux';
import {
  tvmazeFetchMiddleware,
  serialFetchMiddleware
} from './middlewares/searchMiddleware.js';

export default () => {
  const store = createStore(
    rootReducer,
    compose(
      applyMiddleware(tvmazeFetchMiddleware, serialFetchMiddleware),
      window.__REDUX_DEVTOOLS_EXTENSION__
      ? window.__REDUX_DEVTOOLS_EXTENSION__()
      : noop => noop
    )
  );

  return store;
};
