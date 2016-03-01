import {Component} from 'angular2/core';
//import {childOneComponent} from './childOne.component';
 import {ImageComponent} from './image.component'

@Component({
    selector: 'my-app',
    template: `<div>This is the Root Compoent</div>
        
        <div *ngFor="#c of cites #i = index">
        <span> {{c+i}} </span>
        <span ngNonBindable> this is form non Bindable. {{c+i}} </span>
        </div>


   <!-- <child-one [data]="mydata"></child-one> -->
   
  <!-- <clickable-image (clicked)="pressed($event)"></clickable-image> -->
    `,
  //  directives:[childOneComponent]
  directives: [ImageComponent]
})

export class AppComponent{
    //mydata: number =10;
    cites: [number]
    constructor(){
         this.cites = [1,2,3,4]
        
      //let cd = setInterval(()=>this.mydata++,1000);
   //for(var i = 0;i>this.mydata;i++){
       //if(this.mydata == 20){
         //  clearInterval(cd);
//       }
   }
   pressed(event: MouseEvent){
       alert("image is clicked..")
   }
    
}