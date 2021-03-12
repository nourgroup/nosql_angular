import { HttpClient, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Config } from 'protractor';
import { Response } from '../form-search/Response.class';
import { Product } from '../form-search/product.class';
import { Message } from '../services/Message.class';
import { ProductLimited } from '../product-limited';

@Injectable()
export class dataService{

    constructor(private mHttpClient : HttpClient){

    }

    getData(name): Observable<Response>{
        return this.mHttpClient.get<Response>(`http://localhost/tp1_m1dfs/api.php?name=${name}`);
        //port : 8033
        //https://jsonplaceholder.typicode.com/todos/1
        //https://httpclient-demo.firebaseio.com/appareils.json
    }

    getAllData(): Observable<Response>{
        return this.mHttpClient.get<Response>(`http://localhost/tp1_m1dfs/api.php?name=_ALL`);
    }

    /* insérer le produit {'nom':'Produit1','prix':20}*/
    insertData(pr : ProductLimited): Observable<Response> {
        return this.mHttpClient.post<Response>("http://localhost/tp1_m1dfs/api.php",{data: pr});
    }

    updateData(id,value): Observable<Response> {
        return this.mHttpClient.put<Response>("http://localhost/tp1_m1dfs/api.php",{data: {id,value}});
    }

    deleteData(id){
        return this.mHttpClient.delete("http://localhost/tp1_m1dfs/api.php",id);
    }

    getDataForCurve(id){
        return this.mHttpClient.get<Response>(`http://localhost/tp1_m1dfs/api.php?id=${id}`);
    }
}