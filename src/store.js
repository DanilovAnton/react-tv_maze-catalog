import rootReducer from './reducers';
import { createStore, applyMiddleware, compose } from 'redux';
import { tvmazeFetchMiddleware } from './middlewares/searchMiddleware.js'

export default () => {
  const store = createStore(
    rootReducer,    
    compose(
      applyMiddleware(tvmazeFetchMiddleware),    
      window.__REDUX_DEVTOOLS_EXTENSION__()       
    )
    
  );

  return store;
};