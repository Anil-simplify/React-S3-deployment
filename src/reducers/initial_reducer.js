import {produce} from 'immer'
import { combineReducers } from 'redux';

const initial_state = {
  counter: 0
}

const updateReducerCounter = (state = initial_state, action) =>
  produce(state, draft => {
    switch (action.type) {
    case 'ADD_PACKAGE':
      draft.packages.push(action.package);
      break;
    default:
      break;
    }
  });

export default combineReducers({
  updateCount: updateReducerCounter
})
