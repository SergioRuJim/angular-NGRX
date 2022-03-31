import { createReducer,on } from "@ngrx/store";
import { ApiError, ApiSucces } from "../actions/git.action";

export interface GitState {
    error: any;
    data: any;
}

const initialState: GitState = {
    error: null,
    data: null
};

export const gitReducer = createReducer(initialState,
    on(ApiError, (state, action) => ({ error: action.error, data: null})),
    on(ApiSucces, (state, action) => ({ data: action.data, error: null}))
);