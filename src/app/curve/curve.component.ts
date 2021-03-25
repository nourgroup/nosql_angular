import { Component, OnChanges, OnInit } from '@angular/core';
import { dataService } from '../services/data.service';
import { ChartDataSets, ChartOptions } from 'chart.js';
import { Color, Label } from 'ng2-charts';
import { ActivatedRoute } from '@angular/router';
import { PrefixNot } from '@angular/compiler';

@Component({
  selector: 'app-curve',
  templateUrl: './curve.component.html',
  styleUrls: ['./curve.component.css']
})

// TODO https://www.positronx.io/angular-chart-js-tutorial-with-ng2-charts-examples/
export class CurveComponent implements OnInit {
  
  id 

  constructor(public mDataService: dataService,private _Activatedroute:ActivatedRoute) { 
    this.id=this._Activatedroute.snapshot.paramMap.get("id");
    //console.log(this.lineChartData[0].data)
  }
  ngAfterViewInit(){
    
  }

  ngAfterViewChecked(){
    
  }

  ngOnInit(){
    this.mDataService.getDataForCurve(this.id).subscribe(
      response => {
        this.lineChartData = [
          { 
            data: response['data']['evolutions']['prix'],
            label: 'Crude oil prices',
          },
        ];
        this.lineChartLabels = response['data']['evolutions']['date']
        console.log(this.lineChartData)
      },
      error =>{
          console.log("error");
      });
  }

  lineChartData = []
  lineChartLabels 

  lineChartOptions = {
    responsive: true,
  };

  lineChartColors: Color[] = [
    {
      borderColor: 'black',
      backgroundColor: 'rgba(255,255,0,0.28)',
    },
  ];

  lineChartLegend = true;
  lineChartPlugins = [];
  lineChartType = 'line';
}