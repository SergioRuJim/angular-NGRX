import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StoreModule } from '@ngrx/store';
import { mainReducer } from './reducers/mainchar.reducer';
import { EffectsModule } from '@ngrx/effects';
import { fromRoot } from './reducers/indexgit';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    StoreModule.forRoot({ mainChar: mainReducer, gitState: fromRoot.gitReducer}),
    EffectsModule.forRoot([fromRoot.GitEffects])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
