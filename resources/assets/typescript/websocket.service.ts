import * as io from 'socket.io-client';
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs/Rx';
import { Athlete } from './athlete';

@Injectable()
export class WebSocketService {

  private url = 'http://localhost:8890'; 
  private socket;
  private athletesSource = new Subject<string>();

  updatedAthletes = this.athletesSource.asObservable();
 
  constructor() {    
    this.socket = io.connect(this.url);
    let listener = Observable.fromEvent(this.socket, 'updates'); 
    listener.subscribe( 
      payload => {
        this.athletesSource.next('update athletes')
      });
  }
}