import { ApiError, ApiSucces, ApiGetData, ApiGetDataError } from "../actions/git.action";
import { GitEffects } from "../git.effects";
import { gitReducer } from "./git.reducer";
import { getStateError, getStateData } from "../selectors/git.selector";

export const fromRoot = {
    ApiError,
    ApiSucces,
    ApiGetData,
    gitReducer,
    GitEffects,
    ApiGetDataError,
    getStateError,
    getStateData
};