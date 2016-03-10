import {Component} from 'angular2/core';

@Component({
    selector: 'child-one',
    template: `<input [value]="'hello'+ Name"> <div>This is Child with input: {{data}}</div>
    <span> My name is ALi</span>
    `,
    inputs: ['data'],
    //styles: ["backgroundColor()"],
    
    host:{
        class : 'row',
       // '[style.color]': "backgroundColor()"
    }

})

export class childOneComponent{
    data: number;
    Name: string;
     
    constructor(){
        this.Name = "Name"
        this.data = 20;
    }
    backgroundColor(){
        return 'blue';
    }
}