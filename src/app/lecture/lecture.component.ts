import { Component, OnInit } from '@angular/core';
import { dataService } from '../services/data.service';
import { ProductLimited } from '../product-limited';

@Component({
  selector: 'app-lecture',
  templateUrl: './lecture.component.html',
  styleUrls: ['./lecture.component.css']
})
export class LectureComponent implements OnInit {

  data 
  prix = null
  rechercher
  pr : ProductLimited
  constructor(public mDataService: dataService) { }

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
  //https://www.angularjswiki.com/angular/ngmodelchange-change-angular/
  RechercheChange(){
    if(this.rechercher==''){
      this.ngOnInit()
    }else{
      this.getDataWithName()
    }
  }

  getDataWithName(){
    this.mDataService.getData(this.rechercher).subscribe(
      response => { 
        console.log(response)
        this.data = response.data
      },
      error =>{
          console.log("error");
      });
  }

  onSubmitu(id): void{    
    this.mDataService.updateData(id,this.prix).subscribe(
      response => { 
        console.log(response)
      },
      error =>{
          console.log("error");
      });
      //this.ngOnInit()
    
  }
  
  onSubmitd(id): void{
    this.mDataService.deleteData(id).subscribe(
      response => { 
        console.log(response)
      },
      error =>{
          console.log("error");
      });
      this.ngOnInit()
    
  }

}
