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
//import { ConsoleReporter } from 'jasmine';


@Component({
  selector: 'app-mission-detail',
  templateUrl: './mission-detail.page.html',
  styleUrls: ['./mission-detail.page.scss'],
})
export class MissionDetailPage implements OnInit {
  public mission_id: number = 2;
  public mission_name: string = "test name";
  //public allMission: any = 'Your Mission';
  public dateTime: any;
  sub: Subscription;
  public response_data: any;
  public dataList: any[] = [];
  public cmd_user: string;
  public count_data: number = 0;

  constructor(private navCtrl: NavController,
    private dataService: DataService,
    public toastController: ToastController,
    public alertCtrl: AlertController,
    private router: Router,
    public loadingCtrl: LoadingController,
    public menuCtrl: MenuController
  ) {
    const currState = this.router.getCurrentNavigation().extras.state;
    this.mission_id = currState ? currState.mission_id : null;
    this.mission_name = currState ? currState.mission_name : null;
  }

  ngOnInit() {
    this.loadDetail();
  }

  loadDetail() {
    this.sub = this.dataService
      .missionLoad(this.mission_id)
      .subscribe(async (response: any) => {
        this.response_data = response;
        if (this.response_data.result == 'success') {
          this.dataList = this.response_data.data_list;
          this.count_data = this.response_data.count_data;
          this.count_data++;
          //alert('OK'+  dataInput.latitude);
        }
        else {
          //todo end of data
          alert('Can not insert Way-Point');

        }
      })
  }


  setDetail(dataInput: any) {
    // console.log('all data : ' + this.mission_name,
    //   this.mission_id,
    //   dataInput.lat,
    //   dataInput.long,
    //   dataInput.speed,
    //   dataInput.hight,
    //   dataInput.stay);
    this.sub = this.dataService
      .missionDetail(this.mission_name,
        this.mission_id,
        dataInput.lat,
        dataInput.long,
        dataInput.speed,
        dataInput.hight,
        dataInput.stay)
      .subscribe(async (response: any) => {
        this.response_data = response;
        if (this.response_data.insert == 'success') {
          //alert('OK'+  dataInput.latitude);

        }
        else {
          //todo end of data
          alert('Can not insert Way-Point');

        }
      })
  }


}
