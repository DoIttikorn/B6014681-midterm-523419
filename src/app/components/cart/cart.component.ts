import { Component, OnInit } from "@angular/core";
import { CartService } from "../../services/cart.service";
import { productsModel } from "../../product.model";
@Component({
  selector: "app-cart",
  templateUrl: "./cart.component.html",
  styleUrls: ["./cart.component.css"],
})
export class CartComponent implements OnInit {
  cart: productsModel = [];
  constructor(private cartService: CartService) {
    this.cart = this.cartService.getCart();
  }

  ngOnInit(): void {}

  getSumPrice() {
    return this.cartService.total;
  }
}
