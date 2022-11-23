import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { GoogleMap } from '@capacitor/google-maps/';
import {
  ToastController,
  NavController,
  AlertController,
  LoadingController,
} from '@ionic/angular';
import { element } from 'protractor';

@Component({
  selector: 'app-mission',
  templateUrl: './mission.page.html',
  styleUrls: ['./mission.page.scss'],
})
export class MissionPage implements OnInit {
  @ViewChild('map') mapRef: ElementRef;
  map: GoogleMap;

  constructor(
    private navCtrl: NavController,
    public toastController: ToastController,
    public alertCtrl: AlertController,
    public loadingCtrl: LoadingController // public storage: Storage,
  ) {}

  ngOnInit() {}

  gotoSubmit() {
    this.navCtrl.navigateForward('/mission-submit');
  }

  ionViewDidEnter() {}

  async createMap() {
    this.map = await GoogleMap.create({
      id: 'map',
      apiKey: 'AIzaSyAlQCXgab7H0o63Psf0tK69Srpoxpl_snM',
      element: this.mapRef.nativeElement,
      config: {
        center: {
          lat: 33.6,
          lng: -117.9,
        },
        zoom: 8,
      },
    });
  }
}
