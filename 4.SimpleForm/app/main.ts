/*

By: Ghayyas Mubashir at Date 28-feb-2016

*/

import {Component} from 'angular2/core'; // Importing Component form angular2/core
import {Control, ControlGroup} from 'angular2/common'; //importing control and controlgroup which will used in our form fetching form angular2/common
import {bootstrap} from 'angular2/platform/browser'; //importing bootstrap beacause of Bootstrap our app or Class
  //Start making Component first
@Component({                            //Declearing by @Component
  selector: 'my-app',               //selector named is my-app which is in our index page as element
  templateUrl: 'app/login.component.html',    //importing our Template url File form app/login.component.html

}) //end component 
 //Start making class App
 class App {   //Declear Class App
  loginForm: ControlGroup;   // Declearing data type of Login form  as ControlGroup
  constructor() {   //initilizing our Constructor
    this.loginForm = new ControlGroup({   //login form Starts
      login: new Control(""),     //our first value
      password: new Control("")  //our second value password
    });
  }
  //our construction fuction end

//start async value at DOM
  get value(): string {
    return JSON.stringify(this.loginForm.value,null,5); // returning Json Stringify with 3 argument
        //first argumnet is our login value 
        //second argunment is Replacer  
        //and the third argumnet is space..
        
        // for More Please Visit 'https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/JSON/stringify'
  
}
//starting our login fuction
   onlogin(): void{
   console.log(this.loginForm.value); //this will log our input values 
}
}
//finally we bootstrap our app..  
bootstrap(App);
 //and we done.
//  yeppiiiii.. !!
 
 
