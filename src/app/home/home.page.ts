import { Component, OnInit } from '@angular/core';
import { DataService } from '../shared/data.service';
import {
  ToastController,
  NavController,
  AlertController,
  LoadingController,
} from '@ionic/angular';
import { Router } from '@angular/router';
import { MenuController } from '@ionic/angular';
import { Preferences } from '@capacitor/preferences';
import { Subscription } from 'rxjs';


@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {
  //public username: string = '';
  public cmdUser: string;


  constructor(
    public menuCtrl: MenuController,
    private navCtrl: NavController,
    private dataService: DataService,
    public toastController: ToastController,
    public alertCtrl: AlertController,
    private router: Router,
    public loadingCtrl: LoadingController,
    // public storage: Storage,
  ) { }

  ngOnInit() {
    // todo enable side menu
    this.menuCtrl.enable(true);

    this.getData('cmdUser');
  }

  async getData(Key: string) {
    let Data = await Preferences.get({ key: Key });
    this.cmdUser = Data.value;
    //console.log(Key + " : " + Data.value);
    //alert(Key + " : " + Data.value);
  }


  goMission1() {
    this.navCtrl.navigateForward('/mission1');

  }

  goMission2() {
    this.navCtrl.navigateForward('/mission2');

  }

  goMissionSetup() {
    this.navCtrl.navigateForward('/mission-setup');

  }

  goMission() {
    this.navCtrl.navigateForward('/mission');
  }

}
