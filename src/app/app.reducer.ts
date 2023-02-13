// APP STATE

import { ActionReducerMap } from "@ngrx/store";
import { filtrosValidos } from "./filter/filter.actions";
import { filterReducer } from "./filter/filter.reducer";
import { Todo } from "./todos/models/todo.model";
import { toDoReducer } from "./todos/todo.reducer";

export interface AppState {
    todos: Todo[];
    filter: filtrosValidos 
}

export const AppReducers: ActionReducerMap<AppState> = {
    todos: toDoReducer,
    filter: filterReducer
};
