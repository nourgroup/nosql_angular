import { Component, OnInit } from '@angular/core';
import { dataService } from '../services/data.service';
import { Product } from '../form-search/product.class';


@Component({
  selector: 'app-afficher-produit',
  templateUrl: './afficher-produit.component.html',
  styleUrls: ['./afficher-produit.component.css']
})
export class AfficherProduitComponent implements OnInit {

  public data : Product

  constructor(public mDataService : dataService) {

   }

  ngOnInit() {
    //this.data = this.mDataService.data.data;
    //if(this.mDataService.data!= null){
      //console.log(this.mDataService.data.data.prix);
    //}
    console.log("test");
  }

}
