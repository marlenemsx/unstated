import {
  SIMPLE_ACTION,
  SIMPLE_ADD_ACTION,
  SIMPLE_REMOVE_ACTION
} from "../constants/ActionTypes";

/*
 * initite state
 */
const initialState = {
  nb: 0
};

const SimpleReducer = (state = initialState, action) => {
  switch (action.type) {
    case SIMPLE_ACTION:
      return { result: action.payload };
    case SIMPLE_ADD_ACTION:
      return { nb: state.nb + action.payload };
    default:
      return state;
  }
};

export default SimpleReducer;
