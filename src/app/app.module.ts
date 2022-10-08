import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HistoryPageComponent } from './modules/history/pages/history-page/history-page.component';

@NgModule({
  declarations: [ //TODO: Declaraciones, componentes, directivas, pipes  
    AppComponent, HistoryPageComponent,

  ],
  imports: [ //TODO: Solo se importan otros
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
