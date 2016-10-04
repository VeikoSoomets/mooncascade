System.register(['socket.io-client', '@angular/core', 'rxjs/Rx'], function(exports_1, context_1) {
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
    var io, core_1, Rx_1;
    var WebSocketService;
    return {
        setters:[
            function (io_1) {
                io = io_1;
            },
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (Rx_1_1) {
                Rx_1 = Rx_1_1;
            }],
        execute: function() {
            WebSocketService = (function () {
                function WebSocketService() {
                    var _this = this;
                    this.url = 'http://localhost:8890';
                    this.athletesSource = new Rx_1.Subject();
                    this.updatedAthletes = this.athletesSource.asObservable();
                    this.socket = io.connect(this.url);
                    var listener = Rx_1.Observable.fromEvent(this.socket, 'updates');
                    listener.subscribe(function (payload) {
                        _this.athletesSource.next('update athletes');
                    });
                }
                WebSocketService = __decorate([
                    core_1.Injectable(), 
                    __metadata('design:paramtypes', [])
                ], WebSocketService);
                return WebSocketService;
            }());
            exports_1("WebSocketService", WebSocketService);
        }
    }
});

//# sourceMappingURL=websocket.service.js.map
