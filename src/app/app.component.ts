import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  title = 'mongodb 2021';
  // menu dynamique
  menu = [{
    'name' : 'Home',
    'url' : 'home', 
  },
  {
    'name':'Ecriture',
    'url' : 'ecriture'
  },
  {
    'name':'Lecture',
    'url' : 'lecture'
  },
  {
    'name' : 'Visualisation',
    'url' : 'visualisation'
  }];
}
