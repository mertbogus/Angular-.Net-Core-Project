import { CategoryService } from './../../_services/category.service';
import { Component, ViewEncapsulation } from '@angular/core';
import { Category } from '../../_models/category';

@Component({
  selector: 'app-category',
  standalone: false,
  templateUrl: './category.component.html',
  styleUrl: './category.component.css',
  encapsulation: ViewEncapsulation.None
})
export class CategoryComponent {

 categoryList:Category[];

 constructor(private categoryService: CategoryService){
  this.getAll();
  }

 getAll(){
  this.categoryService.GetAll().subscribe({
    next: values => this.categoryList=values,
    error: err=> console.log(err)
  })
}

}
