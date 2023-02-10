import { createAction, props } from "@ngrx/store";


export const crearToDo = createAction(
    '[TODO] Crear ToDo',
    props<{ texto: string }>()
);