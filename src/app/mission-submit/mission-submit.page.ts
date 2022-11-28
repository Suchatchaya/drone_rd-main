import { Component, OnInit } from '@angular/core';
import {
  ToastController,
  NavController,
  AlertController,
  LoadingController,
} from '@ionic/angular';

@Component({
  selector: 'app-mission-submit',
  templateUrl: './mission-submit.page.html',
  styleUrls: ['./mission-submit.page.scss'],
})
export class MissionSubmitPage implements OnInit {

  constructor(
    private navCtrl: NavController,
    public toastController: ToastController,
    public alertCtrl: AlertController,
    public loadingCtrl: LoadingController,
    // public storage: Storage,
  ) { }

  ngOnInit() {
  }

  gotoShow(){
    this.navCtrl.navigateForward('/mission-show');
  }

  backtoMissionPage() {
    this.navCtrl.navigateForward('/mission');
  }

}
