import {Component} from 'angular2/core';
import {childOneComponent} from './childOne.component';
 import {ImageComponent} from './image.component';
 

@Component({
    selector: 'my-app',
    template: `<div>This is the Root Compoent</div>


        <div *ngFor="#c of cites #i = index">
        <span> {{c + i+1}} </span>
        <span ngNonBindable> this is form non Bindable. {{c+i}} </span>
        </div>


    <child-one [data]="mydata"></child-one> 
   
  <!-- <clickable-image (clicked)="pressed($event)"></clickable-image> -->
    `,
    directives:[childOneComponent]
 // directives: [ImageComponent]
 

})

export class AppComponent{
    mydata: number =10;
    cites: [number]
    constructor(){
        // var num = 1;
        // var interval = setInterval(function(){
        //     alert('Hello');
        //     num++;
        //     if(num > 3){
        //         clearInterval(interval);
        //     }
        // },2000)
        
         this.cites = [1,2,3,4]
         
        
      let cd = setInterval(()=>{
      //console.log('cd');
      this.mydata++;
       if(this.mydata== 20){
          // alert('bomb');
            clearInterval(cd);
        }
      },1000);
      //for(var i = 0;i>this.mydata.length;i++){
    //    if(this.mydata== 20){
    //        clearInterval(cd);
    //    }
   //}
    }
   pressed(event: MouseEvent){
       alert("image is clicked..")
   }
    
}
/*
export class newAppComp{
    cites: [string]
    constructor(){
        this.cites = ['stirng','abc','reb']
    }
}

*/