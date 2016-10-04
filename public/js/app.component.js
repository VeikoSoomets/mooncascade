System.register(['@angular/core', './athlete.service', './websocket.service'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, athlete_service_1, websocket_service_1;
    var AppComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (athlete_service_1_1) {
                athlete_service_1 = athlete_service_1_1;
            },
            function (websocket_service_1_1) {
                websocket_service_1 = websocket_service_1_1;
            }],
        execute: function() {
            AppComponent = (function () {
                function AppComponent(athleteService, websocketService) {
                    this.athleteService = athleteService;
                    this.websocketService = websocketService;
                }
                AppComponent.prototype.getAthletes = function () {
                    var _this = this;
                    this.athleteService
                        .getAthletes()
                        .then(function (athletes) { return _this.athletes = athletes; });
                };
                AppComponent.prototype.initWebSocket = function () {
                    var _this = this;
                    this.websocketService.constructor();
                    this.websocketService.updatedAthletes.subscribe(function (resp) {
                        _this.getAthletes();
                    });
                };
                AppComponent.prototype.ngOnInit = function () {
                    this.getAthletes();
                    this.initWebSocket();
                };
                AppComponent = __decorate([
                    core_1.Component({
                        selector: 'my-app',
                        template: "<div class=\"flex-center position-ref full-height\">\t          \n\t            <div class=\"content\">              \n                <div class=\"title m-b-md\">\n                  Fini\u0161i Protokoll\n                </div>\n                <div><h4>Viimati l\u00F5petanud</h4></div>\n                <table class=\"table table-striped\">\n                  <thead>\n                    <tr>                      \n                      <th>Stardinumber</th>\n                      <th>Nimi</th>\n                      <th>Esimese Punkti Aeg</th>\n                      <th>Teise Punkti Aeg</th>\n                    </tr>\n                  </thead>\n                  <tbody *ngIf=\"athletes\">                  \n                    <tr *ngFor=\"let athlete of athletes.slice(0,5)\">\n                      <td>{{athlete.starting_number}}</td>\n                      <td>{{athlete.name}}</td>\n                      <td *ngIf=\"athlete.timing_points[0]\">{{athlete.timing_points[0].pivot.time}}</td>\n                      <td *ngIf=\"athlete.timing_points[1]\">{{athlete.timing_points[1].pivot.time}}</td>\n                    </tr>\n                  </tbody>\n                </table>\n                <br/>\n                <br/>\n                <br/>\n                <div><h4>Ajalugu (varem l\u00F5petanud)</h4></div>\n                <table class=\"table table-striped\">\n                  <thead>\n                    <tr>                      \n                      <th>Stardinumber</th>\n                      <th>Nimi</th>\n                      <th>Esimese Punkti Aeg</th>\n                      <th>Teise Punkti Aeg</th>\n                    </tr>\n                  </thead>\n                  <tbody *ngIf=\"athletes\">                  \n                    <tr *ngFor=\"let athlete of athletes.slice(5)\">\n                      <td>{{athlete.starting_number}}</td>\n                      <td>{{athlete.name}}</td>\n                      <td *ngIf=\"athlete.timing_points[0]\">{{athlete.timing_points[0].pivot.time}}</td>\n                      <td *ngIf=\"athlete.timing_points[1]\">{{athlete.timing_points[1].pivot.time}}</td>\n                    </tr>\n                  </tbody>\n                </table>                       \n\t            </div>\n\t        </div>"
                    }), 
                    __metadata('design:paramtypes', [athlete_service_1.AthleteService, websocket_service_1.WebSocketService])
                ], AppComponent);
                return AppComponent;
            }());
            exports_1("AppComponent", AppComponent);
        }
    }
});

//# sourceMappingURL=app.component.js.map
