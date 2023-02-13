import { createAction, props } from '@ngrx/store';

export type filtrosValidos = 'todos' | 'completados' | 'pendientes';

// action action
export const setFilter = createAction('[Filter] Set Filter',
    props<{ filter: filtrosValidos }>()
);