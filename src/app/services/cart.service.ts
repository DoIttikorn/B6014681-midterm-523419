import { Injectable } from "@angular/core";
import { productsModel } from "../product.model";
import { ProductService } from "../services/product.service";

@Injectable({
  providedIn: "root",
})
export class CartService {
  cartProduct: productsModel = [];
  total: number = 0;

  constructor(private productService: ProductService) {}

  add(id: number) {
    this.cartProduct.push(this.productService.getSomeProduct(id));
    this.total += this.productService.getSomeProduct(id).price;
  }
  
}
