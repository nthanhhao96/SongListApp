import { Component, Inject, ViewChild } from '@angular/core';
import { Platform, NavController, NavParams } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { AngularFireAuth } from 'angularfire2/auth';
import { rootRenderNodes } from '@angular/core/src/view';

@Component({
  template: '<ion-nav #myNav [root]="rootPage"></ion-nav>'
})

export class MyApp {
  @ViewChild('myNav') nav: NavController
  public rootPage:string = 'LoginPage';

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen, 
    private angularFireAuth: AngularFireAuth) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
      angularFireAuth.auth.onAuthStateChanged(function(user)
      {
        if (user) {
          this.rootPage = 'HomePage'; // If user login, go to HomePage
        }
        else {
          this.rootPage = 'LoginPage';
        }
      });
    });
  }
  ngOnInit() {
    this.nav.push(this.rootPage);
  }
}
// Hao Nguyen - 1601800

