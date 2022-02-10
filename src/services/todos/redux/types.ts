export interface TodoState {
  todos: Todo[];
}

export interface Todo {
  id: number | null;
  description: string;
}

export enum TodoActionType {
  AddTodo = "ADD_TODO",
  EditTodo = "EDIT_TODO",
  DeleteTodo = "DELETE_TODO",
}
