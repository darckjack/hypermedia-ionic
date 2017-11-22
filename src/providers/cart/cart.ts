import { Injectable } from '@angular/core';
import { Product } from '../../models/product-model';

/*
  Generated class for the CartProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class CartProvider {
  public products: Product[];

  constructor() {
    this.products = [];
  }

  addProduct(product: Product) {
    this.products.push(product);
  }

  deleteProduct(product: Product) {
    for (let index = 0; index < this.products.length; index++) {
      if (this.products[index] == product) {
        this.products.splice(index, 1);
      }
    }
  }

  emptyCart() {
    this.products = [];
  }

  getTotal() {
    let total = 0;
    for (let index = 0; index < this.products.length; index++) {
      total += this.products[index].price;
    }
    return total;
  }

}
