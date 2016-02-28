/*

By: Ghayyas Mubashir at Date 28-feb-2016

*/
System.register(['angular2/core', 'angular2/common', 'angular2/platform/browser'], function(exports_1, context_1) {
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
    var core_1, common_1, browser_1;
    var App;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (common_1_1) {
                common_1 = common_1_1;
            },
            function (browser_1_1) {
                browser_1 = browser_1_1;
            }],
        execute: function() {
            //Start making Component first
            App = (function () {
                function App() {
                    this.loginForm = new common_1.ControlGroup({
                        login: new common_1.Control(""),
                        password: new common_1.Control("") //our second value password
                    });
                }
                Object.defineProperty(App.prototype, "value", {
                    //our construction fuction end
                    //start async value at DOM
                    get: function () {
                        return JSON.stringify(this.loginForm.value, null, 5); // returning Json Stringify with 3 argument
                        //first argumnet is our login value 
                        //second argunment is Replacer  
                        //and the third argumnet is space..
                        // for More Please Visit 'https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/JSON/stringify'
                    },
                    enumerable: true,
                    configurable: true
                });
                //starting our login fuction
                App.prototype.onlogin = function () {
                    console.log(this.loginForm.value); //this will log our input values 
                };
                App = __decorate([
                    //importing bootstrap beacause of Bootstrap our app or Class
                    core_1.Component({
                        selector: 'my-app',
                        templateUrl: 'app/login.component.html',
                    }), 
                    __metadata('design:paramtypes', [])
                ], App);
                return App;
            }());
            //finally we bootstrap our app..  
            browser_1.bootstrap(App);
        }
    }
});
//and we done.
//  yeppiiiii.. !!
//# sourceMappingURL=main.js.map