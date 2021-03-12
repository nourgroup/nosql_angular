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
  prix
  pr : ProductLimited
  constructor(public mDataService: dataService) { 
    
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

  onSubmitu(id): void{    
    this.mDataService.updateData(id,this.pr).subscribe(
      response => { 
        console.log(response)
      },
      error =>{
          console.log("error");
      });
    alert(this.prix)
    
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
