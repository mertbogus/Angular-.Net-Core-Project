import { Category } from './../_models/category';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {
 apiUrl='https://localhost:7000/api/categories/';
  constructor(private http: HttpClient) {

   }


   GetAll(){
    return this.http.get<Category[]>(this.apiUrl);
   }

   GetById(id:number){
    return this.http.get<Category>(this.apiUrl+id);
   }

   Create(model:Category){
    return this.http.post<Category>(this.apiUrl, model);
   }

   Update(id:number, model:Category){
    return this.http.put(this.apiUrl+id, model);
   }

   Delete(id:number){
    this.http.delete(this.apiUrl+id);
   }
}
