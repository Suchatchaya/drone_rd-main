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
  selector: 'app-ccr-edit',
  templateUrl: './ccr-edit.page.html',
  styleUrls: ['./ccr-edit.page.scss'],
})
export class CcrEditPage implements OnInit {
  sub: Subscription;
  public searchID: number;
  public responseData: any;
  public CCRprovince: string;
  public CCRarea: string;
  public CCRabbn: string;
  public CCRsite_ip: string;
  public CCRgateway: string;
  public CCRdhcp: string;
  public CCRname: string;
  public CCRrouter: string;
  public CCRvlan_name: string;
  public CCRnote: string;
  public CCRvpn: string;
  public CCRremark: string;
  public CCRtimestamp: string;


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
    this.searchID = currState ? currState.searchID : null;
  }

  ngOnInit() {
    this.requestData();
  }


  requestData() {
    this.sub = this.dataService
      .ccrID(this.searchID)
      .subscribe(async (response: any) => {
        this.responseData = response;
        if (this.responseData.result == 'success') {
          this.CCRprovince = this.responseData.province;
          this.CCRarea = this.responseData.area;
          this.CCRabbn = this.responseData.abbn;
          this.CCRsite_ip = this.responseData.site_ip;
          this.CCRgateway = this.responseData.gateway;
          this.CCRdhcp = this.responseData.dhcp;
          this.CCRname = this.responseData.name;
          this.CCRrouter = this.responseData.router;
          this.CCRvlan_name = this.responseData.vlan_name;
          this.CCRnote = this.responseData.note;
          this.CCRvpn = this.responseData.vpn;
          this.CCRremark = this.responseData.remark;
          this.CCRtimestamp = this.responseData.timestamp;
          // alert('OK');
          //console.log("Data is: "+this.responseData.chk_name);
        }
        else {
          //todo end of data
          //alert('API Invalid');

        }
      })
  }

  edit_value(ccr_name: string, ccr_value: string) {
    //alert(edit_value);
    this.sub = this.dataService
      .ccrEdit(this.searchID, ccr_name, ccr_value)
      .subscribe(async (response: any) => {
        this.responseData = response;
        if (this.responseData.update == 'success') {
          this.requestData();
        }
        else {
          alert(this.responseData.update);
        }
      })
  }



}
