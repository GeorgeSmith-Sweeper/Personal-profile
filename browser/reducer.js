import { combineReducers } from 'redux';
import { GET_ALL_PROJECTS } from './action-creators';

// will grab all of my projects from the server
function allProjectsReducer (state = [], action) {
  switch(action.type) {
    case GET_ALL_PROJECTS:
      return action.receivedProjects;
      default: return state;
  }
}

const rootReducer = combineReducers({
  allProjects: allProjectsReducer
});

export default rootReducer;
