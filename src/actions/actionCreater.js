import * as actionTypes from "./actionTypes";
let nextId = 0;

export const addTodo = text => ({
  type: actionTypes.ADD_TODO,
  payload: {
    id: nextId++,
    text: text
  }
});

export const deleteTodo = id => ({
  type: actionTypes.DELETE_TODO,
  payload: {
    id: id
  }
});

export const editText = (id, edit_text) => ({
  type: actionTypes.EDIT_TEXT,
  payload: {
    id: id,
    edit_text: edit_text
  }
});
