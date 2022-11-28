import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { GoogleMap, Marker } from '@capacitor/google-maps';
import {
  ToastController,
  NavController,
  AlertController,
  LoadingController,
} from '@ionic/angular';

@Component({
  selector: 'app-mission-show',
  templateUrl: './mission-show.page.html',
  styleUrls: ['./mission-show.page.scss'],
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
export class MissionShowPage implements OnInit {
  @ViewChild('map') mapRef: ElementRef;
  map: GoogleMap;

  constructor(
    private navCtrl: NavController,
    public toastController: ToastController,
    public alertCtrl: AlertController,
    public loadingCtrl: LoadingController
  ) { }

  ngOnInit() {
  }

  ionViewDidEnter() {
    this.createMap();
  }

  async createMap() {
    this.map = await GoogleMap.create({
      id: 'map',
      apiKey: 'AIzaSyAlQCXgab7H0o63Psf0tK69Srpoxpl_snM',
      element: this.mapRef.nativeElement,
      config: {
        center: {
          lat: 20.070293,
          lng: 99.604024,
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
