import { SIMPLE_ADD_ACTION, SIMPLE_REMOVE_ACTION } from "../constants";

/*
Actions are payloads of information that send data from your application to your store. 
They are the only source of information for the store. 
You send them to the store using store.dispatch().
Remember that actions only describe what happened,
but don't describe how the application's state changes.
*/
const SimpleRemoveAction = () => dispatch => {
  dispatch({ type: SIMPLE_REMOVE_ACTION, payload: 2 });
};
const SimpleAddAction = () => dispatch => {
  dispatch({ type: SIMPLE_ADD_ACTION, payload: 1 });
};

export { SimpleAddAction, SimpleRemoveAction };
