import { Action, createReducer, on } from "@ngrx/store";
import { filtrosValidos, setFilter } from "./filter.actions";

export const initialStateFilter: filtrosValidos = 'todos' as filtrosValidos;

const _filterReducer = createReducer(
    initialStateFilter,
    on(setFilter, (state, { filter }) => filter),
);


export function filterReducer(state: filtrosValidos | undefined, action: Action): filtrosValidos {
    return _filterReducer(state, action);
}