import { Component, OnInit } from '@angular/core';
import { DataService } from '../shared/data.service';
import {
  ToastController,
  NavController,
  AlertController,
  LoadingController,
} from '@ionic/angular';
import { MenuController } from '@ionic/angular';
import { Subscription } from 'rxjs';

import { Platform } from '@ionic/angular';
import { Preferences } from '@capacitor/preferences';


@Component({
  selector: 'app-login-admin',
  templateUrl: './login-admin.page.html',
  styleUrls: ['./login-admin.page.scss'],
})
export class LoginAdminPage implements OnInit {
  sub: Subscription;
  public ion_col: number = 2;
  public app_size: number = 1;
  public auth_key: string = "";
  public username: string = "";

  constructor(
    public menuCtrl: MenuController,
    // private storage: Storage,
    private dataService: DataService,
    private navCtrl: NavController,
    public alertCtrl: AlertController,
    public platform: Platform,
  ) { }

  ngOnInit() {
    this.menuCtrl.enable(false);
    this.checkPlatform();
    this.app_size = 1;

    // this.setData("name", "test data");
    // this.getData("name");


    // this.platform.resize.subscribe(async () => {
    //   alert('Resize event detected');
    // });

  }

  async setData(Key: string, Value: string) {
    await Preferences.set({
      key: Key,
      value: Value
    });

  }

  async getData(Key: string) {
    let Data = await Preferences.get({ key: Key });
    console.log(Key + " : " + Data.value);
    //alert(Key + " : " + Data.value);
  }

  async removeData(Key: string) {
    await Preferences.remove({ key: Key });
  }

  singin(loginForm: any) {
    this.sub = this.dataService
      .singin(loginForm.username, loginForm.password)
      .subscribe(async (response: any) => {
        //console.log("response.message : "+response.message);
        if (response.message == 'success') {
          this.username = loginForm.username;
          this.setData("cmdUser", this.username);
          this.navCtrl.navigateRoot("home");

        } else {
          // console.log("Test Wrong Account ");
          this.pageAlert('Warring', response.message);
        }
      });

  }




  checkPlatform() {
    if (this.platform.is('desktop')) {
      //alert('desktop');
      this.app_size = 2;

    }
    if (this.platform.is('ios')) {
      this.app_size = 1;
    }
    if (this.platform.is('android')) {
      //alert('android');
      this.app_size = 1;
    }

    else {
      //alert('something else');
      //this.app_size=1;
    }

  }

  //todo set Storage
  // async setStorage(key, value) {
  //   const res = await this.storage.set(key, value);
  //   //console.log(res);
  // }



  async pageAlert(header: string, message: string) {
    const alert = await this.alertCtrl.create({
      cssClass: 'my-custom-class',
      header: header,
      message: message,
      buttons: ['OK'],
    });
    await alert.present();
  }
}


