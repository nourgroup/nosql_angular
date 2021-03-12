import { Component, Input , OnInit } from '@angular/core';
import { dataService } from '../services/data.service';
import { Observable } from 'rxjs';
import { Response } from './Response.class';
import { Product } from './product.class';

@Component({
  selector: 'app-form-search',
  templateUrl: './form-search.component.html',
  styleUrls: ['./form-search.component.css']
})
export class FormSearchComponent implements OnInit {

mproduct : Product;
product : String = '';

  constructor(private mDataService : dataService) {
    this.isEnable();
  }

  ngOnInit(): void {
    this.isEnable();
  }

  onSubmit() : void{
    this.mDataService.getData(this.product).subscribe(
      response => { 
        this.mproduct = response.data;
        console.log(this.mproduct)
      },
      error =>{
          console.log("error");
      }
    );
  }

  isEnable(){
    if(this.product===''){
      return false;
    }else{
      return true;
    }
  }

  getColor(){
    if(this.isEnable()){
      return 'green';
    }else{
      return 'red';
    }
  }
}
