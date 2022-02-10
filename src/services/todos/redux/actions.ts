import { Todo, TodoActionType } from "./types";

export const addTodo = (todo: Todo) => {
  return {
    type: TodoActionType.AddTodo,
    payload: todo,
  };
};

export const editTodo = (todo: Todo) => {
  return {
    type: TodoActionType.EditTodo,
    payload: todo,
  };
};

export const deleteTodo = (id: number) => {
  return {
    type: TodoActionType.DeleteTodo,
    payload: id,
  };
};
