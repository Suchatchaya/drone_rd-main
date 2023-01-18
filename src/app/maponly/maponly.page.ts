import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { GoogleMap, Marker } from '@capacitor/google-maps';
import {
  ToastController,
  NavController,
  AlertController,
  LoadingController,
} from '@ionic/angular';

import { DataService } from '../shared/data.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-maponly',
  templateUrl: './maponly.page.html',
  styleUrls: ['./maponly.page.scss'],
})
export class MaponlyPage implements OnInit {
  @ViewChild('map') mapRef: ElementRef;
  map: GoogleMap;
  public counter: 9504;
  public responseData: any;
  public latitudeCurrent: string;
  public longitudeCurrent: string;

  constructor(
    private dataService: DataService,
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
          lat:14.028567088279697,
          lng: 100.44098408320802
        },
        zoom: 17,
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
        title: 'drone',
        snippet: 'Best place on earth',
        iconUrl: 'assets/icon/drone.png',
        tintColor: { r: 178, g: 34, b: 34, a: 1 } ,
        iconSize: { width: 20, height: 20 },
        iconAnchor: {
          x: 10 ,
          y: 12
      }
      },
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
