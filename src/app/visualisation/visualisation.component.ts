import { Component, OnInit } from '@angular/core';
import { dataService } from '../services/data.service';

@Component({
  selector: 'app-visualisation',
  templateUrl: './visualisation.component.html',
  styleUrls: ['./visualisation.component.css']
})
export class VisualisationComponent implements OnInit {

  data 

  constructor(public mDataService : dataService) {

  }

  ngOnInit() {
    this.mDataService.getAllData().subscribe(
      response => { 
        console.log(response)
        this.data = response.data
      },
      error =>{
          console.log("error");
      });
  }

  
}
