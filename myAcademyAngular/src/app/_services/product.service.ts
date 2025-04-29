import { Product } from './../_models/product';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
apiUrl='https://localhost:7000/api/products/';
  constructor(private http:HttpClient) {
  }

  GetAll(){
     return this.http.get<Product[]>(this.apiUrl);
  }

  GetById(Id:number){
     return this.http.get<Product>(this.apiUrl+Id);
  }

  Create(model:Product){
    return this.http.post<Product>(this.apiUrl, model);
  }

  Update(Id:number, model:Product){
     return this.http.put(this.apiUrl+Id, model);
  }

  Delete(Id:number){
     return this.http.delete(this.apiUrl+Id);
  }


}
