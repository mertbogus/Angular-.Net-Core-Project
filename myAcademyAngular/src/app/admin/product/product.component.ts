import { Product } from './../../_models/product';
import { HttpClient } from '@angular/common/http';
import { Component, ViewEncapsulation } from '@angular/core';
import { ProductService } from '../../_services/product.service';
import { __values } from 'tslib';
import Swal from 'sweetalert2';
import { CategoryService } from '../../_services/category.service';
import { Category } from '../../_models/category';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-product',
  standalone: false,
  templateUrl: './product.component.html',
  styleUrl: './product.component.css',
  encapsulation: ViewEncapsulation.None
})
export class ProductComponent {

  productList: Product[];
  categoryList: Category[];
  product: Product = new Product();
  editProduct: any = {};
  errors: any ={};


  constructor(private productService:ProductService, private categoryService:CategoryService) {
    this.getAll();
    this.GetCategories();
  }

  getAll(){
    this.productService.GetAll().subscribe({
      next:values=>this.productList=values,
      error: err=> console.log(err)

    });
  }

  Create(){
    this.productService.Create(this.product).subscribe({
      next: value=>this.productList.push(value),
      error: err=>{
        if(err.status===400){
          console.log(err)
           this.errors = err.error.errors;
        }
      },
      complete:()=> Swal.fire({
              title: "Eklendi!",
              text: "Ürün başarıyla eklendi.",
              icon: "success"
            }).then(()=>{
              location.reload()
            })

    });
  }

  GetCategories(){
     this.categoryService.GetAll().subscribe({
      next:values=>this.categoryList=values,
      error:err=>console.log(err)
     });
  }
}
