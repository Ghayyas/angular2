
// import { Component } from "angular2/core"
// import { Hero } from "./hero";
// @Component({
//     selector: 'hello-world',
//     template: `<h1> {{title}} </h1>
    
//     <i> My Favoruite hero is {{myhero.name}} </i>
    
//     <ul>
//     <li *ngFor="#hero of heroes">
//     {{hero.name}}
//     </li></ul>
    
//     <p *ngIf="heroes.length > 3">There are many heroes </p>
//     `
// })
// export class AppComponent{
//     // title: string;
//     // heroes: string[];
//     // myhero: string;
    
//     // constructor(){
//     //     this.title = "Tour Of Heroes";
//     //     this.heroes = ['Windstorm','Bombasto', 'Magneta','Tornado'];
//     //     this.myhero = this.heroes[0];
//     // }
    
//     title = 'Tour off Heroes';
//     heroes = [
//         new Hero(1 , 'Windstorm'),
//         new Hero(12, 'Bombasto')
//     ]
//     myHero = this.heroes[0];
// }

import {Component} from 'angular2/core';
import {Hero} from './hero'
@Component({
  selector:  'hello-world',
  template: `
  <h1>{{title}}</h1>
  <h2>My favorite hero is: {{myHero.name}}</h2>
  <p>Heroes:</p>
  <ul>
    <li *ngFor="#hero of heroes">
      {{ hero.name }}
      </li>
  </ul>
  <p *ngIf="heroes.length > 3">There are many heroes!</p>
`
})
export class AppComponent {
  title = 'Tour of Heroes';
  heroes = [
    new Hero(1, 'Windstorm'),
    new Hero(13, 'Bombasto'),
    new Hero(15, 'Magneta'),
    new Hero(20, 'Tornado')
  ];
  myHero = this.heroes[0];
}
