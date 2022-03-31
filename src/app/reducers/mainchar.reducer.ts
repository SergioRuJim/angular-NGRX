import { createReducer, on } from "@ngrx/store";
import * as actions from '../actions/mainchar.action'

export interface State {
    speed: number;
    w: number;
    h: number;
    color : string;
}

export const initialState: State = {
    speed:1,
    w: 40,
    h: 80,
    color: 'red'
}

const _mainReducer = createReducer(
    initialState,
    on(actions.normal, (state) => ({speed: 1, w: 50, h:100, color: 'red'})),
    on(actions.speed, (state, {s}) => ({speed: s, w: 30, h:180, color: 'blue'})),
    on(actions.slow, (state, {s}) => ({speed: s, w: 60, h:80, color: 'green'})),
);

export function mainReducer(state: any, action: any) {
    return _mainReducer(state, action);
}