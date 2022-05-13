import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatTooltipModule } from '@angular/material/tooltip';
import { AnalogClockComponent } from './analog-clock/analog-clock.component';
import { HandArrowComponent } from './analog-clock/hand-arrow/hand-arrow.component';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    AnalogClockComponent,
    HandArrowComponent
  ],
  imports: [
    BrowserModule,
    MatTooltipModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
