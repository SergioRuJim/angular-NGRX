import { Injectable } from "@angular/core";
import { Observable, of, throwError } from "rxjs";
import { ajax } from 'rxjs/ajax';
import { delay, tap } from "rxjs";

@Injectable({
    providedIn: 'root'
})
export class GitService {
    
    constructor(){}

    gitUser(id: string): Observable<any> {
        const git$ = ajax('https://api.github.com/users/' +id);
        return git$;
    }

    gitError(): Observable<any> {
        return of(0).pipe(
            delay(500),
            tap(() => { throw new Error('GIT ERR')})
        );
    }
}