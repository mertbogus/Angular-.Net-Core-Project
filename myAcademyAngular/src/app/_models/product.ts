import { Category } from "./category"

export class Product{
  id;
  productName;
  productDesc;
  imageUrl;
  categoryId;
  category:Category;
}
