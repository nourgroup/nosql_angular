import { Component, OnInit } from '@angular/core';
import { dataService } from '../services/data.service';

@Component({
  selector: 'app-app-tp1-angular',
  templateUrl: './app-tp1-angular.component.html',
  styleUrls: ['./app-tp1-angular.component.css']
})
export class AppTp1AngularComponent implements OnInit {

  constructor(public mDataService : dataService) {

   }

  ngOnInit(): void {
    
  }

}
