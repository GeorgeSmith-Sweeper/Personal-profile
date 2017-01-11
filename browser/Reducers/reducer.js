import { GET_ALL_THE_PUPPIES } from './action-creators';
import { GET_ONE_PUPPY } from './action-creators';
import { combineReducers } from 'redux';

// initial state it an array of names


function allPuppiesReducer (state = [], action) {
  switch (action.type) {
    case GET_ALL_THE_PUPPIES:
      return action.receivedPuppies;
      default: return state;
  }
}

function selectedPuppyReducer (state = {}, action) {
  switch (action.type) {
    case GET_ONE_PUPPY:
      return action.selectedPuppy;
      default: return state;
  }
}

const rootReducer = combineReducers({
  allPuppies: allPuppiesReducer,
  selectedPuppy: selectedPuppyReducer,
})

export default rootReducer;
