import { createStore, applyMiddleware} from 'redux';
import mainReducer from './reducer';
import thunk from 'redux-thunk';

// store created using the one reducer
let store = createStore(mainReducer, applyMiddleware(thunk));

export default store;
