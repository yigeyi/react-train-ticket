import {
  createStore,
  combineReducers,
  applyMiddleware
} from 'redux';

import reducers from './reducers';
import thunk from 'redux-thunk'; //支持异步

export default createStore(
  combineReducers(reducers), {},applyMiddleware(thunk)
)