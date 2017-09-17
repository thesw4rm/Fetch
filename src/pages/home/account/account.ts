import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { LandingPage } from '../../landing/landing/landing';
/**
 * Generated class for the AccountPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-account',
  templateUrl: 'account.html',
})
export class AccountPage {
  photoUrl = "https://scontent-iad3-1.xx.fbcdn.net/v/t1.0-9/20638138_1972390039661044_7930668379242096001_n.jpg?oh=c4f8820bd6673c0ee1f6423b53209c2a&oe=5A4B933C"
  
  displayName= "Chran Murugapandi";

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    
    
  }

 
  

}
