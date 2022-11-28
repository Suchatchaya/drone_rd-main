import { Component, OnInit } from '@angular/core';
import {
  ToastController,
  NavController,
  AlertController,
  LoadingController,
} from '@ionic/angular';
import { DataService } from '../shared/data.service';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { MenuController } from '@ionic/angular';
import { Preferences } from '@capacitor/preferences';


@Component({
  selector: 'app-mission-setup',
  templateUrl: './mission-setup.page.html',
  styleUrls: ['./mission-setup.page.scss'],
})
export class MissionSetupPage implements OnInit {
  public dateTime: any;
  sub: Subscription;
  public searchText: string = '';
  public responseData: any;
  public dataList: any[] = [];
  public cmdUser:string;


  constructor(
    private navCtrl: NavController,
    private dataService: DataService,
    public toastController: ToastController,
    public alertCtrl: AlertController,
    private router: Router,
    public loadingCtrl: LoadingController,
    public menuCtrl: MenuController
  ) { }

  ngOnInit() {
    this.dateTime = new Date();
    this. getData( "cmdUser" );
  }

  setName(missionName: string) {
    let cmdUser = "youtapong";
    this.sub = this.dataService
      .missionSetup(missionName, cmdUser)
      .subscribe(async (response: any) => {
        this.responseData = response;
        if (this.responseData.insert == 'success') {
          //alert('OK');
          this.goMission_detail(this.responseData.missionId, missionName);
        }
        else {
          //todo end of data
          alert('Can not use this name');

        }
      })
  }

  goMission_detail(id: number, missionName: string) {
    this.navCtrl.navigateForward('/mission-detail', {
      state: {
        missionId: id,
        missionName: missionName
      },
    })
  }


  async getData(Key: string) {
    let Data = await Preferences.get({ key: Key });
    this.cmdUser  = Data.value;
    //console.log(Key + " : " + Data.value);
    //alert(Key + " : " + Data.value);
  }


}
