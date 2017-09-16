import { Component, NgZone } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController, Platform } from 'ionic-angular';
import { TabsPage } from '../../tabs/tabs';
import { Facebook } from '@ionic-native/facebook';
import firebase from 'firebase';
/**
 * Generated class for the LandingPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-landing',
  templateUrl: 'landing.html',
})
export class LandingPage {
  rootPage: any;  
  userProfile: any = null;
  zone: NgZone;
  loading: any

  constructor(platform: Platform, public navCtrl: NavController, public navParams: NavParams, private facebook: Facebook,  public loadingCtrl: LoadingController) {
    this.zone = new NgZone({});   
    
  }

 
  fbLogin(): void {
    this.facebookLoginLoader();
    
    this.facebook.login(['email']).then( (response) => {
      const facebookCredential = firebase.auth.FacebookAuthProvider
        .credential(response.authResponse.accessToken);

      firebase.auth().signInWithCredential(facebookCredential)
        .then((success) => {
          console.log("Firebase success: " + JSON.stringify(success));
          this.userProfile = success;
          this.loading.dismiss();
          this.navCtrl.setRoot(TabsPage);
        })
        .catch((error) => {
          console.log("Firebase failure: " + JSON.stringify(error));
          this.loading.dismiss();
      });

    }).catch((error) => { console.log(error) });
    this.loading.dismiss();
  }

  facebookLoginLoader() {
    this.loading = this.loadingCtrl.create({
      content: "Please wait...",
    });
      this.loading.present();
  }

userAuth(){
  this.facebookLoginLoader();
  const unsubscribe = firebase.auth().onAuthStateChanged((user) => {
    if (!user) {
      this.rootPage = "LandingPage";
      this.loading.dismiss();      
      unsubscribe();
    } else { 
      //Do nothing
      this.loading.dismiss();      
      unsubscribe();
    }
  });
}



}
