import {Component} from 'angular2/core';

@Component({
    selector: 'child-one',
    template: `<div>This is Child with input: {{data}}</div>`,
    inputs: ['data'],
    host:{
       // class : 'row',
        '[style.color]': "backgroundColor()"
    }

})

export class childOneComponent{
    data: number;
    constructor(){
        this.data = 10000;
    }
    backgroundColor(){
        return 'red';
    }
}