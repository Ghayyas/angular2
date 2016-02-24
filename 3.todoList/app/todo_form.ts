import {Component, Output, EventEmitter} from "angular2/core";
import {Todo} from "./todo";

@Component({
    selector: 'todo-form',
    template: `
    <form (ngSubmit)="addTodo()">
    <input type="text" [(ngModel)]="task" size="30" placeholder="Enter your Todo">
    <input type="submit" value="submit">
    </form>
    
    `
})

export class TodoForm{
    @Output() newTask = new EventEmitter<Todo>();
    task: string = "";
    
    addTodo(){
        if(this.task){
            this.newTask.next({text: this.task, done: false})
        }
        this.task = ""; 
    }
}