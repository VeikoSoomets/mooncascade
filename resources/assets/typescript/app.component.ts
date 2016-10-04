import { Component, OnInit } from '@angular/core';

import { AthleteService } from './athlete.service';
import { WebSocketService } from './websocket.service';
import { Athlete } from './athlete';

@Component({
  selector: 'my-app',
  template: `<div class="flex-center position-ref full-height">	          
	            <div class="content">              
                <div class="title m-b-md">
                  Finiši Protokoll
                </div>
                <div><h4>Viimati lõpetanud</h4></div>
                <table class="table table-striped">
                  <thead>
                    <tr>                      
                      <th>Stardinumber</th>
                      <th>Nimi</th>
                      <th>Esimese Punkti Aeg</th>
                      <th>Teise Punkti Aeg</th>
                    </tr>
                  </thead>
                  <tbody *ngIf="athletes">                  
                    <tr *ngFor="let athlete of athletes.slice(0,5)">
                      <td>{{athlete.starting_number}}</td>
                      <td>{{athlete.name}}</td>
                      <td *ngIf="athlete.timing_points[0]">{{athlete.timing_points[0].pivot.time}}</td>
                      <td *ngIf="athlete.timing_points[1]">{{athlete.timing_points[1].pivot.time}}</td>
                    </tr>
                  </tbody>
                </table>
                <br/>
                <br/>
                <br/>
                <div><h4>Ajalugu (varem lõpetanud)</h4></div>
                <table class="table table-striped">
                  <thead>
                    <tr>                      
                      <th>Stardinumber</th>
                      <th>Nimi</th>
                      <th>Esimese Punkti Aeg</th>
                      <th>Teise Punkti Aeg</th>
                    </tr>
                  </thead>
                  <tbody *ngIf="athletes">                  
                    <tr *ngFor="let athlete of athletes.slice(5)">
                      <td>{{athlete.starting_number}}</td>
                      <td>{{athlete.name}}</td>
                      <td *ngIf="athlete.timing_points[0]">{{athlete.timing_points[0].pivot.time}}</td>
                      <td *ngIf="athlete.timing_points[1]">{{athlete.timing_points[1].pivot.time}}</td>
                    </tr>
                  </tbody>
                </table>                       
	            </div>
	        </div>`
})

export class AppComponent implements OnInit {
  athletes: Athlete[];
	constructor(
    private athleteService: AthleteService,
    private websocketService: WebSocketService
  ) { }

  getAthletes(): void {
    this.athleteService
        .getAthletes()
        .then(athletes => this.athletes = athletes);
  }

  initWebSocket(): void {
    this.websocketService.constructor();
    this.websocketService.updatedAthletes.subscribe(
      resp => {
        this.getAthletes();
      });
  }

  ngOnInit() {
    this.getAthletes();
    this.initWebSocket();
  }
}