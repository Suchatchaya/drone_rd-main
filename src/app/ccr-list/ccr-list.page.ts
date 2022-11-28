import { Component, OnInit, ViewChild } from '@angular/core';
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
import { IonInfiniteScroll } from '@ionic/angular';

@Component({
  selector: 'app-ccr-list',
  templateUrl: './ccr-list.page.html',
  styleUrls: ['./ccr-list.page.scss'],
})
export class CcrListPage implements OnInit {
  @ViewChild(IonInfiniteScroll) infiniteScroll: IonInfiniteScroll;
  public responseData: any;
  public dataList: any[] = [];
  public dataLength: number = 0;
  public dataTotal: number = 0;
  public page_start: number = 0;
  public page_limit: number = 8;
  sub: Subscription;

  constructor(private navCtrl: NavController,
    private dataService: DataService,
    public toastController: ToastController,
    public alertCtrl: AlertController,
    private router: Router,
    public loadingCtrl: LoadingController,
    public menuCtrl: MenuController) { }

  ngOnInit() {
    //this.toggleInfiniteScroll();
    this.requestList('');
  }

  // async pageAlert(header: string, messageObj: any) {
  //   let message: string;
  //   message = '<li>ID: ' + messageObj.num + '</li>';
  //   message = message + '<li>Router:' + messageObj.router + '</li>';
  //   const alert = await this.alertCtrl.create({
  //     cssClass: 'my-custom-class',
  //     header: header,
  //     message: message,
  //     buttons: [
  //       {
  //         text: 'OK',
  //         role: 'cancel',
  //         handler: () => {
  //           //console.log('OK clicked');
  //         }
  //       },
  //       {
  //         text: 'Chk-Status',
  //         handler: () => {
  //           //console.log('Buy clicked');
  //           this.navCtrl.navigateForward('/check-status', {
  //             state: {
  //               request_id: messageObj.request_id,
  //             },
  //           });
  //         }
  //       }],
  //   });
  //   await alert.present();
  // }

  requestListNew(chk_name: string) {
    //console.log('new chk_name : ' + chk_name);
    this.page_start = 0;
    this.dataList = [];
    this.dataLength = 0;
    this.dataTotal = 0;
    this.sub = this.dataService
      .ccrList(chk_name, this.page_start, this.page_limit)
      .subscribe(async (response: any) => {
        this.responseData = response;
        if (this.responseData.result == 'success') {
          this.dataList = this.dataList.concat(this.responseData.data_list);
          this.dataLength = this.responseData.data_start;
          this.dataTotal = this.responseData.total_data;
        }
        else {
          //todo end of data

        }
      });
  }


  requestList(chk_name: string) {
    this.page_start++;
    this.sub = this.dataService
      .ccrList(chk_name, this.page_start, this.page_limit)
      .subscribe(async (response: any) => {
        this.responseData = response;
        if (this.responseData.result == 'success') {
          this.dataList = this.dataList.concat(this.responseData.data_list);
          this.dataLength = this.responseData.data_start;
          this.dataTotal = this.responseData.total_data;
        }
        else {
          //todo end of data

        }
      });
  }

  loadData(event) {
    setTimeout(() => {
      //console.log('Done');
      // console.log('this.dataLength : ' + this.dataLength);
      // console.log('this.dataTotal : ' + this.dataTotal);
      event.target.complete();
      // App logic to determine if all data is loaded
      // and disable the infinite scroll
      let temp: number = this.page_limit + this.dataLength;
      if (temp >= this.dataTotal) {
        event.target.disabled = true;
      }
      else {
        this.infiniteScroll.disabled;
        this.requestList('');
      }
    }, 500);
  }

  toggleInfiniteScroll() {
    this.infiniteScroll.disabled = !this.infiniteScroll.disabled;
  }


  help() {
    let message = '<li>ชื่อ</li><li>โครงการ</li><li>ID</li><li>บริษัท</li>';
    this.pageAlert1("ค้นหา Form จาก", message);
  }

  async pageAlert1(header: string, message: string) {
    const alert = await this.alertCtrl.create({
      cssClass: 'my-custom-class',
      header: header,
      message: message,
      buttons: ['OK'],
    });
    await alert.present();
  }


  goCcrMore(messageObj: any) {
    this.navCtrl.navigateForward('/ccr-more', {
      state: {
        searchText: messageObj.router,
      },
    })
  }





}
