import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { LoginPage } from "../pages/login/login";
import { ProductListPage } from "../pages/product-list/product-list";
import { ProductPage } from "../pages/product/product";
import { CartPage } from "../pages/cart/cart";
import { CheckoutPage } from "../pages/checkout/checkout";
import { CategoriesPage } from "../pages/categories/categories";

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { ProductsProvider } from '../providers/products/products';
import { CartProvider } from '../providers/cart/cart';

@NgModule({
  declarations: [
    MyApp,
    LoginPage,
    ProductListPage,
    ProductPage,
    CartPage,
    CheckoutPage,
    CategoriesPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    LoginPage,
    ProductListPage,
    ProductPage,
    CartPage,
    CheckoutPage,
    CategoriesPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    ProductsProvider,
    CartProvider
  ]
})
export class AppModule {}
