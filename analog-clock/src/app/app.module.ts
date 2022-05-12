import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AnalogClockComponent } from './analog-clock/analog-clock.component';
import { HandArrowComponent } from './analog-clock/hand-arrow/hand-arrow.component';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent,
    AnalogClockComponent,
    HandArrowComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
