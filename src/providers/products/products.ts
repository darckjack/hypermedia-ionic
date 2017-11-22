import { Injectable } from '@angular/core';
import { Product } from "../../models/product-model";

/*
  Generated class for the ProductsProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class ProductsProvider {

  public products: Product[];

  constructor() {
    this.products = [
      new Product("producto 1", "assets/imgs/1.jpg", "lorem ipsum", 100, 10, "collares"),
      new Product("producto 2", "assets/imgs/2.jpg", "lorem ipsum", 100, 10, "collares"),
      new Product("producto 3", "assets/imgs/3.jpg", "lorem ipsum", 100, 10, "carteras"),
      new Product("producto 4", "assets/imgs/4.jpg", "lorem ipsum", 100, 10, "carteras")
    ]
  }

}
