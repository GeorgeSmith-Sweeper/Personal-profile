import { createStore, applyMiddleware} from 'redux';
import rootReducer from './Reducers/reducer';
import thunk from 'redux-thunk';

// store created using the one reducer
let store = createStore(rootReducer, applyMiddleware(thunk));

export default store;
