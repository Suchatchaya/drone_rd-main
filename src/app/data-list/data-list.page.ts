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
  selector: 'app-data-list',
  templateUrl: './data-list.page.html',
  styleUrls: ['./data-list.page.scss'],
})
export class DataListPage implements OnInit {
  @ViewChild(IonInfiniteScroll) infiniteScroll: IonInfiniteScroll;
  public response_data: any;
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

  async pageAlert(header: string, messageObj: any) {
    let message: string;
    message = '<li>ID: ' + messageObj.id + '</li>';
    message = message + '<li>Area:' + messageObj.area + '</li>';
    message = message + '<li>Province:' + messageObj.province + '</li>';
    message = message + '<li>abbn: ' + messageObj.abbn + '</li>';
    message = message + '<li>Site IP: ' + messageObj.site_ip + '</li>';
    message = message + '<li>GateWay:' + messageObj.gateway + '</li>';
    message = message + '<li>DHCP' + messageObj.dhcp + '</li>';
    message = message + '<li>Name: ' + messageObj.name + '</li>';
    message = message + '<li>Router: ' + messageObj.router + '</li>';
    message = message + '<li>Note: ' + messageObj.note + '</li>';
    message = message + '<li>VPN: ' + messageObj.vpn + '</li>';
    message = message + '<li>Remark: ' + messageObj.remark + '</li>';
    message = message + '<li>timestamp: ' + messageObj.timestamp + '</li>';
    const alert = await this.alertCtrl.create({
      cssClass: 'my-custom-class',
      header: header,
      message: message,
      buttons: [
        {
          text: 'OK',
          role: 'cancel',
          handler: () => {
            //console.log('OK clicked');
          }
        },
        {
          text: 'Edit',
          handler: () => {
            //console.log('Buy clicked');
            this.navCtrl.navigateForward('/ccr-edit', {
              state: {
                searchID: messageObj.id,
              },
            });
          }
        }],
    });
    await alert.present();
  }

  async delAlert(header: string, messageObj: any) {
    let message: string;
    message = '<li>ID: ' + messageObj.id + '</li>';
    message = message + '<li>Area:' + messageObj.area + '</li>';
    message = message + '<li>Province:' + messageObj.province + '</li>';
    message = message + '<li>abbn: ' + messageObj.abbn + '</li>';
    message = message + '<li>Site IP: ' + messageObj.site_ip + '</li>';
    message = message + '<li>GateWay:' + messageObj.gateway + '</li>';
    message = message + '<li>DHCP' + messageObj.dhcp + '</li>';
    message = message + '<li>Name: ' + messageObj.name + '</li>';
    message = message + '<li>Router: ' + messageObj.router + '</li>';
    message = message + '<li>Note: ' + messageObj.note + '</li>';
    message = message + '<li>VPN: ' + messageObj.vpn + '</li>';
    message = message + '<li>Remark: ' + messageObj.remark + '</li>';
    message = message + '<li>timestamp: ' + messageObj.timestamp + '</li>';
    const alert = await this.alertCtrl.create({
      cssClass: 'my-custom-class',
      header: header,
      message: message,
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          handler: () => {
            //console.log('OK clicked');
          }
        },
        {
          text: 'Delete',
          handler: () => {
            //console.log('Buy clicked');
            this.ccrDel(messageObj.id );
          }
        }],
    });
    await alert.present();
  }

  requestListNew(chk_name: string) {
    //console.log('new chk_name : ' + chk_name);
    this.page_start = 0;
    this.dataList = [];
    this.dataLength = 0;
    this.dataTotal = 0;
    this.sub = this.dataService
      .dataList(chk_name, this.page_start, this.page_limit)
      .subscribe(async (response: any) => {
        this.response_data = response;
        if (this.response_data.result == 'success') {
          this.dataList = this.dataList.concat(this.response_data.data_list);
          this.dataLength = this.response_data.data_start;
          this.dataTotal = this.response_data.total_data;
        }
        else {
          //todo end of data

        }
      });
  }


  requestList(chk_name: string) {
    this.page_start++;
    this.sub = this.dataService
      .dataList(chk_name, this.page_start, this.page_limit)
      .subscribe(async (response: any) => {
        this.response_data = response;
        if (this.response_data.result == 'success') {
          this.dataList = this.dataList.concat(this.response_data.data_list);
          this.dataLength = this.response_data.data_start;
          this.dataTotal = this.response_data.total_data;
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


  ccrDel(id: number) {
    this.sub = this.dataService
      .ccrDel(id)
      .subscribe(async (response: any) => {
        this.response_data = response;
        if ((this.response_data.result == 'success')&&(this.response_data.delete =='success')) {
          this.pageAlert("ลบข้อมูลสำเร็จ","");
          this.requestListNew('');
        }
        else {
          //todo end of data

        }
      });
  }

}
