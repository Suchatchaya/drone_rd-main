import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { GoogleMap,Marker } from '@capacitor/google-maps';
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
  styles: [
    `
      capacitor-google-map {
        display: inline-block;
        width: 275px;
        height: 400px;
      }
    `,
  ],
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

  ionViewDidEnter() {
    this.createMap();
  }

  async createMap() {
    this.map = await GoogleMap.create({
      id: 'my-map',
      apiKey: 'AIzaSyAlQCXgab7H0o63Psf0tK69Srpoxpl_snM',
      element: this.mapRef.nativeElement,
      config: {
        center: {
          // lat: 20.070293,
          // lng: 99.604024,
          lat:14.028567088279697,
          lng: 100.44098408320802
        },
        zoom: 15,
      },
    });
    this.addMarkers();
  }

  async addMarkers() {
    const markers: Marker[] = [
      {
        coordinate:{
          lat: 14.027818931032364,
          lng: 100.44063385983837,
        },
        title: 'No. 1',
        snippet: 'Best place on earth',
      },
      {
        coordinate:{
          lat: 14.028572144239183,
          lng: 100.44097822315346,
        },
        title: 'No. 2',
        snippet: 'Best place on earth',
      },
      {
        coordinate:{
          lat: 14.02824084749586,
          lng: 100.44187122462175,
        },
        title: 'No. 3',
        snippet: 'Best place on earth',
      },
      {
        coordinate:{
          lat: 14.027589219117742,
          lng: 100.44232374560846,
        },
        title: 'No. 4',
        snippet: 'Best place on earth',
      },
      {
        coordinate:{
          lat: 14.027174574261881,
          lng: 100.44212250920795,
        },
        title: 'No. 5',
        snippet: 'Best place on earth',
      },
    ];
    await this.map.addMarkers(markers);
  }
}
