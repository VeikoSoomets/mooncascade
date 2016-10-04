System.register(['@angular/core', '@angular/http', 'rxjs/add/operator/toPromise'], function(exports_1, context_1) {
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
    var core_1, http_1;
    var AthleteService;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
            },
            function (_1) {}],
        execute: function() {
            AthleteService = (function () {
                function AthleteService(http) {
                    this.http = http;
                    this.headers = new http_1.Headers({ 'Content-Type': 'application/json' });
                }
                AthleteService.prototype.getAthletes = function () {
                    return this.http.get('/athletes')
                        .toPromise()
                        .then(this.mapAthlete)
                        .catch(this.handleError);
                };
                AthleteService.prototype.mapAthlete = function (response) {
                    var indexes;
                    var athletes = response.json().data;
                    athletes.forEach(function (athlete, index) {
                        athletes[index].timing_points.forEach(function (t_point, t_index) {
                            var date = new Date(athletes[index].timing_points[t_index].pivot.time);
                            athletes[index].timing_points[t_index].pivot.time = date.getHours() + ':' + date.getMinutes() + ':' + date.getSeconds();
                        });
                        if (!!athletes[index - 1]) {
                        }
                    });
                    return athletes;
                };
                AthleteService.prototype.handleError = function (error) {
                    console.error('An error occurred', error);
                    return Promise.reject(error.message || error);
                };
                AthleteService.prototype.moveElementInArray = function (array, old_index, new_index) {
                    if (new_index >= array.length) {
                        var k = new_index - array.length;
                        while ((k--) + 1) {
                            array.push(undefined);
                        }
                    }
                    array.splice(new_index, 0, array.splice(old_index, 1)[0]);
                    return array;
                };
                AthleteService = __decorate([
                    core_1.Injectable(), 
                    __metadata('design:paramtypes', [http_1.Http])
                ], AthleteService);
                return AthleteService;
            }());
            exports_1("AthleteService", AthleteService);
        }
    }
});

//# sourceMappingURL=athlete.service.js.map
