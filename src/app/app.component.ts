import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'Home', url: '/home', icon: 'home' },
    { title: 'Mission', url: '/mission', icon: 'paper-plane' },
    { title: 'Mission1', url: '/mission1', icon: 'paper-plane' },
    { title: 'Mission2', url: '/mission2', icon: 'paper-plane' },
    { title: 'mission-setup', url: '/mission3', icon: 'paper-plane' },
    { title: 'Log out', url: '/login-admin', icon: 'walk' },
  ];
 // public labels = ['Family', 'Friends', 'Notes', 'Work', 'Travel', 'Reminders'];
  constructor() {}
}
