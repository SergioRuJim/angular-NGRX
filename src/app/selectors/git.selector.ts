import { createSelector } from "@ngrx/store";
import { GitState } from '../reducers/git.reducer';

const getError = (state: GitState): string => state.error;
const getData = (state: GitState): any => state.data;

const getStateError = createSelector(
  (state: any) => state.rootState,
  getError  
);

const getStateData = createSelector(
    (state: {gitState: GitState}) => state.gitState,
    getData  
  );

  export { getStateError, getStateData};