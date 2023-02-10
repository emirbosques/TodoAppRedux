import { Action, createReducer, on, State } from '@ngrx/store';
import { Todo } from './models/todo.model';
import { crearToDo } from './todo.actions';


export const initialStateToDo: Todo[] = [new Todo('Save the world')];

const _toDoReducer = createReducer(
    initialStateToDo,
    on(crearToDo, (state, { texto }) => [...state, new Todo(texto)]),


);


export function toDoReducer(state: Todo[] | undefined, action: Action) {
    return _toDoReducer(state, action);
}