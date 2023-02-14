import { Action, createReducer, on } from '@ngrx/store';
import { Todo } from './models/todo.model';
import * as actions from './todo.actions';


export const initialStateToDo: Todo[] = [
    new Todo('Save the world 1'),
    new Todo('Save the world 2'),
    new Todo('Save the world 3'),
    new Todo('Save the world 4'),
    new Todo('Save the world 5'),

];

const _toDoReducer = createReducer(
    initialStateToDo,
    // CLEAN
    on(actions.clearCompletedToDos, (state) =>
        state.filter(todo => !todo.completado)
    ),

    // CREATE
    on(actions.crearToDo, (state, { texto }) => [...state, new Todo(texto)]),

    // DELETE
    on(actions.deleteTodo, (state, { id }) =>
        state.filter(todo => todo.id !== id)
    ),

    // COMPLETE ONE TODO BY ID
    on(actions.toggleTodo, (state, { id }) => {
        return state.map(todo => {
            if (todo.id === id) {
                return {
                    ...todo,
                    completado: !todo.completado
                }
            } else {
                return todo;
            }
        })
    }),

    // COMPLETE ALL TODOs
    on(actions.toggleAllTodos, (state, { completado }) => {
        return state.map(todo => {
            if (state.length > 0) {
                return {
                    ...todo,
                    completado
                }
            } else {
                return todo;
            }
        })
    }),

    // EDIT TODO
    on(actions.editTodo, (state, { id, texto }) => {
        return state.map(todo => {
            if (todo.id === id) {
                return {
                    ...todo,
                    texto: texto
                }
            } else {
                return todo;
            }
        })
    }),


);


export function toDoReducer(state: Todo[] | undefined, action: Action) {
    return _toDoReducer(state, action);
}