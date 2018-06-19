import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { TimeAgoPipe } from './time-ago.pipe';


@NgModule({
  declarations: [
    AppComponent,
    TimeAgoPipe
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
