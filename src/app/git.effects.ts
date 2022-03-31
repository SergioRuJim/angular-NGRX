import { Injectable } from "@angular/core";
import { createEffect, Actions, ofType } from '@ngrx/effects';
import { GitService } from "./git.service";
import { ApiGetData, ApiGetDataError, ApiError, ApiSucces } from "./actions/git.action";
import { catchError, map, mergeMap, tap } from "rxjs/operators";
import { of } from "rxjs";
import { Inject } from '@angular/core';


@Injectable()
export class GitEffects {

    constructor( @Inject(Actions) private actions$: Actions, private gitApi: GitService){}

    getGitDataEffect$ = createEffect(() => {
        return this.actions$.pipe(
            ofType(ApiGetData),
            tap(() => { console.log('Git Api in queue'); }),
            mergeMap((action) => {
                console.log('Git Api in Process');
                return this.gitApi.gitUser(action.id).pipe(
                    map(res => ApiSucces({data:res})),
                    catchError(error => of(ApiError({ error }))),
                    tap(() => { console.log('Git End');})
                );
            })
        )
    });

    getGitDataErrorEffects$ = createEffect(() => {
        return this.actions$.pipe(
            ofType(ApiGetDataError),
            tap(() => { console.log('Git Api in queue'); }),
            mergeMap((action) => {
                console.log('Git Api in Process');
                return this.gitApi.gitError().pipe(
                    map(res => ApiSucces({data:res})),
                    catchError(error => of(ApiError({ error }))),
                    tap(() => { console.log('Git End');})
                );
            })
        )
    });
}