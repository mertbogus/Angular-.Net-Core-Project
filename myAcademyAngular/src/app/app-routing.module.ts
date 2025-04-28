import { CategoryComponent } from './admin/category/category.component';
import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { MainLayoutComponent } from './layouts/main-layout/main-layout.component';
import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';
import { ProductComponent } from './admin/product/product.component';

const routes: Routes = [

  //Main Routes
 {path:'', component:MainLayoutComponent, children:[]},

 //Admin
 {path:'admin', component:AdminLayoutComponent, children:[
   {path:'category', component:CategoryComponent},
   {path:'product', component:ProductComponent}
  ]},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
