import { createStore } from "redux";
import { todoReducer } from "../services/todos/redux/reducer";

export const store = createStore(todoReducer);
