import thunk from 'redux-thunk';
import {createStore, applyMiddleware} from 'redux';
import reducers from './reducers';

const store = createStore(reducers,applyMiddleware(thunk));
store.getState();

export default store;