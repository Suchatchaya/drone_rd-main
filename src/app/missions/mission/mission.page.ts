import { Component, OnInit } from '@angular/core';
import {
  ToastController,
  NavController,
  AlertController,
  LoadingController,
} from '@ionic/angular';

@Component({
  selector: 'app-mission',
  templateUrl: './mission.page.html',
  styleUrls: ['./mission.page.scss'],
})
export class MissionPage implements OnInit {

  constructor(
    private navCtrl: NavController,
    public toastController: ToastController,
    public alertCtrl: AlertController,
    public loadingCtrl: LoadingController,
    // public storage: Storage,
  ) { }

  ngOnInit() {
  }

  gotoSubmit() {
    this.navCtrl.navigateForward('/mission-submit');

  }

}
