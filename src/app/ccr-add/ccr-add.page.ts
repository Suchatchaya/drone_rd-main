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
  selector: 'app-ccr-add',
  templateUrl: './ccr-add.page.html',
  styleUrls: ['./ccr-add.page.scss'],
})
export class CcrAddPage implements OnInit {
  sub: Subscription;
  public lastID: number;
  public response_data: any;

  constructor(private navCtrl: NavController,
    private dataService: DataService,
    public toastController: ToastController,
    public alertCtrl: AlertController,
    private router: Router,
    public loadingCtrl: LoadingController,
    public menuCtrl: MenuController) { }

  ngOnInit() {
  }


  add_value(ccr_value: string) {
    //alert(edit_value);
    this.sub = this.dataService
      .ccrAdd(ccr_value)
      .subscribe(async (response: any) => {
        this.response_data = response;
        if (this.response_data.update == 'success') {
          this.lastID = this.response_data.last_id;
          //alert('this.lastID + ' + this.lastID);
          this.goCcrEdit(this.lastID);
        }
        else {
          alert(this.response_data.update);
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
