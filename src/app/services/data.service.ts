import { HttpClient, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Config } from 'protractor';
import { Response } from '../form-search/Response.class';
import { Product } from '../form-search/product.class';
import { Message } from '../services/Message.class';
import { ProductLimited } from '../product-limited';

//https://jsonplaceholder.typicode.com/todos/1
//https://httpclient-demo.firebaseio.com/appareils.json

@Injectable()
export class dataService{

    constructor(private mHttpClient : HttpClient){

    }

    getData(name): Observable<Response>{
        // API PHP
        //return this.mHttpClient.get<Response>(`http://localhost/tp1_m1dfs/api.php?name=${name}`);
        // API nodejs DONE
        return this.mHttpClient.get<Response>(`http://localhost:4000/api/name/${name}`);
    }

    getAllData(): Observable<Response>{
        // API PHP
        //return this.mHttpClient.get<Response>(`http://localhost/tp1_m1dfs/api.php?name=_ALL`);
        // API nodeJS DONE
        return this.mHttpClient.get<Response>(`http://localhost:4000/api/name/_ALL`);
    }

    /* insérer le produit {'nom':'Produit1','prix':20}*/
    insertData(pr : ProductLimited): Observable<Response> {
        // API PHP
        return this.mHttpClient.post<Response>("http://localhost/tp1_m1dfs/api.php",{data: pr});
        // API nodejs TODO
        //return this.mHttpClient.post<Response>('http://localhost:4000/api/add',{data: pr});
    }

    updateData(id,value): Observable<Response> {
        //API PHP
        //return this.mHttpClient.put<Response>("http://localhost/tp1_m1dfs/api.php",{data: {id,value}});
        //API node js TODO
        return this.mHttpClient.put<Response>(`http://localhost:4000/api/update/${id}/${value}`,{data: {id,value}});
    }

    deleteData(id){
        //API PHP
        //return this.mHttpClient.delete("http://localhost/tp1_m1dfs/api.php",id);
        // API nodejs TODO
        return this.mHttpClient.delete(`http://localhost:4000/api/delete/${id}`);
    }

    getDataForCurve(id){
        // API PHP
        //return this.mHttpClient.get<Response>(`http://localhost/tp1_m1dfs/api.php?id=${id}`);
        // API nodejs DONE
        return this.mHttpClient.get<Response>(`http://localhost:4000/api/id/${id}`);
    }
}