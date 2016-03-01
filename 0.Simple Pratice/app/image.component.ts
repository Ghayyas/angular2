import {Component, EventEmitter} from 'angular2/core';
@Component({
    selector: 'clickable-image',
    template: `<div>
    <img src="{{url}}" (click)="clickPressed($event)">
    </div>`,
    inputs: ['url'],
    outputs: ['clicked']
})

export class ImageComponent{
    url: string;
    clicked: EventEmitter<any>  = new EventEmitter();
    constructor(){
        this.url = './../assest/sales.jpg';
    }
    clickPressed(event: MouseEvent){
        this.clicked.emit(event);
    }
}