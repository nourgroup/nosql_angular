import { Component, OnInit } from '@angular/core';
import { dataService } from '../services/data.service';

@Component({
  selector: 'app-curve',
  templateUrl: './curve.component.html',
  styleUrls: ['./curve.component.css']
})
export class CurveComponent implements OnInit {

  id 
  constructor(public mDataService: dataService) { 
    
  }

  ngOnInit() {
    this.getData(this.id);
  }

  getData(id): void{
    this.mDataService.getDataForCurve(id).subscribe(
      response => { 
        console.log(response)
      },
      error =>{
          console.log("error");
      });
  }
  //http://localhost/tp1_m1dfs/api.php?id=${this.props.match.params.id}

}
