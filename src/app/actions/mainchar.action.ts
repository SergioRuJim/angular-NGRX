import { createAction, props } from "@ngrx/store";

export const normal = createAction('Normal');
export const speed = createAction('Speed', props<{s: number}>());
export const slow = createAction('Slow', props<{s: number}>());
