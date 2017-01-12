import { combineReducers } from 'redux';
import { GRAB_A_NAME } from '../Components/action-creators';

// doesn't really do anything, needed to get rid of the store error
function nameReducer(state = [], action) {
  switch (action.type) {
    case GRAB_A_NAME:
      return action.receivedName;
      default: return state;
  }
}

const rootReducer = combineReducers({
  grabName: nameReducer
})

export default rootReducer;
