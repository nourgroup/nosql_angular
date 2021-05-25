import { Categorie } from "./categorie";

export interface ProductLimited {
    name : string ;
    price: number;
    categorie? : Categorie;
    description : String;
}
