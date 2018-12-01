import 'regenerator-runtime/runtime';
import { combineReducers,  createStore, applyMiddleware, compose } from 'redux';
import createSagaMiddleware from 'redux-saga'
import postsReducer from './posts/reducer';
import {bootstrap} from './posts/sagas';


// dev tools middleware
const reduxDevTools =
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();

const reducer = combineReducers({
	posts: postsReducer,
});

const sagaMiddleware = createSagaMiddleware()

const store = createStore(
  reducer,
  compose(applyMiddleware(sagaMiddleware), reduxDevTools)
);
// then run the saga
sagaMiddleware.run(bootstrap);

export default store;
