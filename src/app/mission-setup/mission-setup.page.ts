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
  public response_data: any;
  public dataList: any[] = [];
  public cmd_user:string;


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
    this. getData( "cmd_user" );
  }

  setName(mission_name: string) {
    let cmd_user = "youtapong";
    this.sub = this.dataService
      .missionSetup(mission_name, cmd_user)
      .subscribe(async (response: any) => {
        this.response_data = response;
        if (this.response_data.insert == 'success') {
          //alert('OK');
          this.goMission_detail(this.response_data.mission_id, mission_name);
        }
        else {
          //todo end of data
          alert('Can not use this name');

        }
      })
  }

  goMission_detail(id: number, mission_name: string) {
    this.navCtrl.navigateForward('/mission-detail', {
      state: {
        mission_id: id,
        mission_name: mission_name
      },
    })
  }


  async getData(Key: string) {
    let Data = await Preferences.get({ key: Key });
    this.cmd_user  = Data.value;
    //console.log(Key + " : " + Data.value);
    //alert(Key + " : " + Data.value);
  }


}
