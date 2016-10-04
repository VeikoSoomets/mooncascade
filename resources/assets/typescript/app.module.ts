///<reference path="../../../typings/index.d.ts"/>

import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule }    from '@angular/http';

import { AppComponent }   from './app.component';
import { AthleteService }   from './athlete.service';
import { WebSocketService } from './websocket.service';

@NgModule({
  imports:      [ 
  	BrowserModule,
  	HttpModule
  ],
  declarations: [ 
  	AppComponent 
  ],
  providers: [
    AthleteService,
    WebSocketService
  ],
  bootstrap:    [ 
  	AppComponent 
  ]
})

export class AppModule { }