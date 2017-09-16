import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { Facebook } from '@ionic-native/facebook'

import { TabsPage } from '../pages/tabs/tabs';
import { LandingPage } from '../pages/landing/landing/landing';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { AngularFireModule } from 'angularfire2';
import { AngularFireAuthModule } from 'angularfire2/auth';

export const firebaseCredential = {
    apiKey: "AIzaSyD2m-Qlu5Mxy6hcfV9bxc4BDWHYE_SeGm0",
    authDomain: "fetch-d48c8.firebaseapp.com",
    databaseURL: "https://fetch-d48c8.firebaseio.com",
    projectId:"fetch-d48c8",
    storageBucket: "fetch-d48c8.appspot.com",
    messagingSenderId: "59075218416"
};

@NgModule({
  declarations: [
    MyApp,
    TabsPage,
    LandingPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(firebaseCredential),
    AngularFireAuthModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    TabsPage,
    LandingPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    Facebook,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
