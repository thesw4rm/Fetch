import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import firebase from 'firebase';

import { TabsPage } from '../pages/tabs/tabs';
import { LandingPage } from '../pages/landing/landing/landing';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage:any;

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen) {
    firebase.initializeApp({
      apiKey: "AIzaSyD2m-Qlu5Mxy6hcfV9bxc4BDWHYE_SeGm0",
      authDomain: "fetch-d48c8.firebaseapp.com",
      databaseURL: "https://fetch-d48c8.firebaseio.com",
      projectId:"fetch-d48c8",
      storageBucket: "fetch-d48c8.appspot.com",
      messagingSenderId: "59075218416"
  });

    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();

      const unsubscribe = firebase.auth().onAuthStateChanged((user) => {
        if (!user) {
          this.rootPage = LandingPage;
          unsubscribe();
        } else { 
          this.rootPage = TabsPage;
          unsubscribe();
        }
      });

    });
  }
}
