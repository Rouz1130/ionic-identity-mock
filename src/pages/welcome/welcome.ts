import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { LoginPage } from '../login/login';
import { SignupPage } from '../signup/signup';
import { HomePage } from '../home/home';


@IonicPage()
@Component({
  selector: 'page-welcome',
  templateUrl: 'welcome.html',
})
export class WelcomePage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }


  // click events in the html. push redirects to that page in the param. also passes the values with it when is pushed to that page.
  login() {
    this.navCtrl.push(LoginPage)
  }

  signup() {
    this.navCtrl.push(SignupPage)
  }

  goHome() {

   this.navCtrl.push(HomePage) 

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad WelcomePage');
  }

}
