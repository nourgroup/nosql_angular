import { Component, OnInit ,Input } from '@angular/core';
import { dataService } from '../services/data.service';
import { Message } from '../services/Message.class';
import { Product } from '../form-search/product.class';
import { ProductLimited } from '../product-limited';


@Component({
  selector: 'app-ecrire',
  templateUrl: './ecrire.component.html',
  styleUrls: ['./ecrire.component.css']
})
export class EcrireComponent implements OnInit {

  message : Message ;
  product: Product;
  pr = {} as  ProductLimited;

  constructor(private mService : dataService) { 
    this.isDisabled();
  }

  ngOnInit(){
    this.isDisabled();
  }

  onSubmit(): void{
    this.mService.insertData(this.pr).subscribe(
      response => { 
        console.log(response)
      },
      error =>{
          console.log("error");
      });
    this.reset();
    
  }

  isDisabled(){
    if(this.pr == null || (this.pr.name == null) && (this.pr.price == null)){
      return true;
    }else{
      return false;
    }
  }

  reset(){
    this.pr = {'name' : '','price':null};
  }
}

