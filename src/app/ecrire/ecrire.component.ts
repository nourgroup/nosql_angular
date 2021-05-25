import { Component, OnInit } from '@angular/core';
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
  //message : Message ;
  pr = {} as  ProductLimited;
  data 

  constructor(private mService : dataService) { 
    this.isDisabled();
  }

  ngOnInit(){
    this.isDisabled();
    this.mService.getCategorie().subscribe(
      response => { 
        console.log(response)
        this.data = response.data
      },
      error =>{
          console.log("error");
      });
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
    if(this.pr == null || (this.pr.name == "") && (this.pr.price == null) && (this.pr.description == "")){
      return true;
    }else{
      return false;
    }
  }
  reset(){
    this.pr = {'name' : '','price':null,'categorie': null,'description' : ''};
  }
}

