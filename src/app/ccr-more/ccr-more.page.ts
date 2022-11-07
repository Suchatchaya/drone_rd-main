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


@Component({
  selector: 'app-ccr-more',
  templateUrl: './ccr-more.page.html',
  styleUrls: ['./ccr-more.page.scss'],
})
export class CcrMorePage implements OnInit {
  sub: Subscription;
  public searchText: string = '';
  public response_data: any;
  public dataList: any[] = [];

  constructor(
    private navCtrl: NavController,
    private dataService: DataService,
    public toastController: ToastController,
    public alertCtrl: AlertController,
    private router: Router,
    public loadingCtrl: LoadingController,
    public menuCtrl: MenuController
  ) {
    const currState = this.router.getCurrentNavigation().extras.state;
    this.searchText = currState ? currState.searchText : null;
  }

  ngOnInit() {
    this.requestData();
  }


  requestData() {
    this.sub = this.dataService
      .ccrMore(this.searchText)
      .subscribe(async (response: any) => {
        this.response_data = response;
        if (this.response_data.result == 'success') {
          this.dataList = this.response_data.data_list;
          // alert('OK');
          //console.log("Data is: "+this.response_data.chk_name);
        }
        else {
          //todo end of data
          //alert('API Invalid');

        }
      })
  }


  goCcrEdit(id: number) {
    this.navCtrl.navigateForward('/ccr-edit', {
      state: {
        searchID: id,
      },
    })
  }


}
