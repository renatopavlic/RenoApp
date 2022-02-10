import { initialState } from "./consts";
import { TodoActionType, TodoState } from "./types";

// Add payload type
// Edit todo ?

export const todoReducer = (
  state: TodoState = initialState,
  action: { type: TodoActionType; payload }
) => {
  switch (action.type) {
    case TodoActionType.AddTodo:
      return {
        ...state,
        todos: [...state.todos, action.payload],
      };
    case TodoActionType.DeleteTodo:
      return {
        ...state,
        todos: state.todos.filter((t) => t.id !== action.payload),
      };
    default:
      return state;
  }
};
