System.register(['angular2/core', './image.component'], function(exports_1, context_1) {
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
    var core_1, image_component_1;
    var AppComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (image_component_1_1) {
                image_component_1 = image_component_1_1;
            }],
        execute: function() {
            AppComponent = (function () {
                function AppComponent() {
                    this.cites = [1, 2, 3, 4];
                    //let cd = setInterval(()=>this.mydata++,1000);
                    //for(var i = 0;i>this.mydata;i++){
                    //if(this.mydata == 20){
                    //  clearInterval(cd);
                    //       }
                }
                AppComponent.prototype.pressed = function (event) {
                    alert("image is clicked..");
                };
                AppComponent = __decorate([
                    core_1.Component({
                        selector: 'my-app',
                        template: "<div>This is the Root Compoent</div>\n        \n        <div *ngFor=\"#c of cites #i = index\">\n        <span> {{c+i}} </span>\n        <span ngNonBindable> this is form non Bindable. {{c+i}} </span>\n        </div>\n\n\n   <!-- <child-one [data]=\"mydata\"></child-one> -->\n   \n  <!-- <clickable-image (clicked)=\"pressed($event)\"></clickable-image> -->\n    ",
                        //  directives:[childOneComponent]
                        directives: [image_component_1.ImageComponent]
                    }), 
                    __metadata('design:paramtypes', [])
                ], AppComponent);
                return AppComponent;
            }());
            exports_1("AppComponent", AppComponent);
        }
    }
});
//# sourceMappingURL=app.component.js.map