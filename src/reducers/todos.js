import * as actionTypes from "../actions/actionTypes";
import initialState from "./state";

export default todos = (state = initialState.todo, action) => {
  switch (action.type) {
    case actionTypes.ADD_TODO:
      state.push({
        id: action.payload.id,
        text: action.payload.text
      });
      return [...state];

    case actionTypes.DELETE_TODO:
      for (var i = 0; i < state.length; i++) {
        if (state[i].id === action.payload.id) {
          state.splice(i, 1);
          break;
        }
      }
      return [...state];

    case actionTypes.EDIT_TEXT:
      for (var i = 0; i < state.length; i++) {
        if (state[i].id === action.payload.id) {
          state[i].text = action.payload.edit_text;
          break;
        }
      }
      return [...state];

    default:
      return state;
  }
};
