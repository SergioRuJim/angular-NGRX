import { createAction, props } from "@ngrx/store";

export const ApiGetData = createAction('[GIT] Api Get Data', props<{ id: string }>());
export const ApiGetDataError = createAction('[GIT] Api Get Data Error', props<{ id: string }>());

export const ApiError = createAction('[GIT] Api Error', props<{ error: any }>());
export const ApiSucces = createAction('[GIT] Api Succes', props<{ data: any }>());
