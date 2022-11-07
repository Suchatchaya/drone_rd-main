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
  public response_data: any;
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
        this.response_data = response;
        if (this.response_data.result == 'success') {
          this.CCRprovince = this.response_data.province;
          this.CCRarea = this.response_data.area;
          this.CCRabbn = this.response_data.abbn;
          this.CCRsite_ip = this.response_data.site_ip;
          this.CCRgateway = this.response_data.gateway;
          this.CCRdhcp = this.response_data.dhcp;
          this.CCRname = this.response_data.name;
          this.CCRrouter = this.response_data.router;
          this.CCRvlan_name = this.response_data.vlan_name;
          this.CCRnote = this.response_data.note;
          this.CCRvpn = this.response_data.vpn;
          this.CCRremark = this.response_data.remark;
          this.CCRtimestamp = this.response_data.timestamp;
          // alert('OK');
          //console.log("Data is: "+this.response_data.chk_name);
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
        this.response_data = response;
        if (this.response_data.update == 'success') {
          this.requestData();
        }
        else {
          alert(this.response_data.update);
        }
      })
  }



}
