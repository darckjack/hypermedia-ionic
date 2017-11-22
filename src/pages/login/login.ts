import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';
import { ProductListPage } from "../product-list/product-list";

/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {
  email: string;
  password: string;

  constructor(public navCtrl: NavController, public navParams: NavParams, public toastCtrl: ToastController) {
  }

  login() {
    if(this.email == "admin@admin.com" && this.password == "admin123") {
      this.navCtrl.setRoot(ProductListPage);
    } else {
      let toast = this.toastCtrl.create({
        message: "correo o contraseña incorrectos",
        duration: 3000
      });
      toast.present();
    }
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

}
