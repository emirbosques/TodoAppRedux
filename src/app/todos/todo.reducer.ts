import { Action, createReducer, on, State } from '@ngrx/store';
import { Todo } from './models/todo.model';
import { crearToDo, deleteTodo, editTodo, toggleTodo } from './todo.actions';


export const initialStateToDo: Todo[] = [
    new Todo('Save the world 1'),
    new Todo('Save the world 2'),
    new Todo('Save the world 3'),
    new Todo('Save the world 4'),
    new Todo('Save the world 5'),

];

const _toDoReducer = createReducer(
    initialStateToDo,
    on(crearToDo, (state, { texto }) => [...state, new Todo(texto)]),
    on(deleteTodo, (state, { id }) => 
        state.filter(todo => todo.id !== id)
    ),
    on(toggleTodo, (state, { id }) => {
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
    on(editTodo, (state, { id, texto }) => {
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