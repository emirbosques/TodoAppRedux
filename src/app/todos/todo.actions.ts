import { createAction, props } from "@ngrx/store";


export const crearToDo = createAction(
    '[TODO] Crear ToDo',
    props<{ texto: string }>()
);

export const toggleTodo = createAction(
    '[TODO] Toggle Todo',
    props<{ id: number }>()
);

export const editTodo = createAction(
    '[TODO] Edit Todo',
    props<{ id: number, texto: string }>()
);

export const deleteTodo = createAction(
    '[TODO] Delete Todo',
    props<{ id: number }>()
);

export const toggleAllTodos = createAction(
    '[TODO] Toggle All Todos',
    props<{ completado: boolean }>()
);