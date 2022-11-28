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
  public missionId: 2;
  public missionName: 'test name';
  //public allMission: any = 'Your Mission';
  public dateTime: any;
  sub: Subscription;
  public responseData: any;
  public dataList: any[] = [];
  public cmdUser: string;
  public countData: 0;

  constructor(private navCtrl: NavController,
    private dataService: DataService,
    public toastController: ToastController,
    public alertCtrl: AlertController,
    private router: Router,
    public loadingCtrl: LoadingController,
    public menuCtrl: MenuController
  ) {
    const currState = this.router.getCurrentNavigation().extras.state;
    this.missionId = currState ? currState.missionId : null;
    this.missionName = currState ? currState.missionName : null;
  }

  ngOnInit() {
    this.loadDetail();
  }

  loadDetail() {
    this.sub = this.dataService
      .missionLoad(this.missionId)
      .subscribe(async (response: any) => {
        this.responseData = response;
        if (this.responseData.result === 'success') {
          this.dataList = this.responseData.data_list;
          this.countData = this.responseData.countData;
          this.countData++;
          //alert('OK'+  dataInput.latitude);
        }
        else {
          //todo end of data
          alert('Can not insert Way-Point');

        }
      });
  }

  next(){

  }


  setDetail(dataInput: any) {
    // console.log('all data : ' + this.missionName,
    //   this.missionId,
    //   dataInput.lat,
    //   dataInput.long,
    //   dataInput.speed,
    //   dataInput.hight,
    //   dataInput.stay);
    this.sub = this.dataService
      .missionDetail(this.missionName,
        this.missionId,
        dataInput.lat,
        dataInput.long,
        dataInput.speed,
        dataInput.hight,
        dataInput.stay)
      .subscribe(async (response: any) => {
        this.responseData = response;
        if (this.responseData.insert === 'success') {
          //alert('OK'+  dataInput.latitude);

        }
        else {
          //todo end of data
          alert('Can not insert Way-Point');

        }
      });
  }


}
