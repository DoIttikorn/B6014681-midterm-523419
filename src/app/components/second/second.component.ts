import { Component, OnInit } from "@angular/core";
import { FormControl, FormGroup, FormArray, Validators } from "@angular/forms";
import { ProductService } from "../../services/product.service";

@Component({
  selector: "app-second",
  templateUrl: "./second.component.html",
  styleUrls: ["./second.component.css"],
})
export class SecondComponent implements OnInit {
  productForm = new FormGroup({
    type: new FormControl(""),
    id: new FormControl(""),
    name: new FormControl(""),
    detail: new FormControl(""),
    quantity: new FormControl("", [
      Validators.required,
      Validators.min(1),
      Validators.max(50),
    ]),
    price: new FormControl("", [
      Validators.required,
      Validators.min(1),
      Validators.max(100000),
    ]),
  });

  productType: string[] = ["CPU", "RAM", "HDD", "Mainboard"];

  constructor(private productService: ProductService) {}

  ngOnInit(): void {}

  get quantity() {
    return this.productForm.get("quantity");
  }
  get price() {
    return this.productForm.get("price");
  }
  OK() {
    return this.productForm.status;
  }
  addProduct() {
    this.productService.getpush(this.productForm);
  }
}
