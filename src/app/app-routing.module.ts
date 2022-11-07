import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'mission-detail',
    pathMatch: 'full'
  },
  {
    path: 'login-admin',
    loadChildren: () => import('./login-admin/login-admin.module').then( m => m.LoginAdminPageModule)
  },
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: 'data-list',
    loadChildren: () => import('./data-list/data-list.module').then( m => m.DataListPageModule)
  },
  {
    path: 'check-status',
    loadChildren: () => import('./check-status/check-status.module').then( m => m.CheckStatusPageModule)
  },
  {
    path: 'ccr-list',
    loadChildren: () => import('./ccr-list/ccr-list.module').then( m => m.CcrListPageModule)
  },
  {
    path: 'ccr-more',
    loadChildren: () => import('./ccr-more/ccr-more.module').then( m => m.CcrMorePageModule)
  },
  {
    path: 'ccr-edit',
    loadChildren: () => import('./ccr-edit/ccr-edit.module').then( m => m.CcrEditPageModule)
  },
  {
    path: 'ccr-add',
    loadChildren: () => import('./ccr-add/ccr-add.module').then( m => m.CcrAddPageModule)
  },
  {
    path: 'mission1',
    loadChildren: () => import('./mission1/mission1.module').then( m => m.Mission1PageModule)
  },
  {
    path: 'mission2',
    loadChildren: () => import('./mission2/mission2.module').then( m => m.Mission2PageModule)
  },
  {
    path: 'mission-setup',
    loadChildren: () => import('./mission-setup/mission-setup.module').then( m => m.MissionSetupPageModule)
  },
  {
    path: 'mission-detail',
    loadChildren: () => import('./mission-detail/mission-detail.module').then( m => m.MissionDetailPageModule)
  },
  {
    path: 'mission',
    loadChildren: () => import('./mission/mission.module').then( m => m.MissionPageModule)
  },
  {
    path: 'mission-submit',
    loadChildren: () => import('./mission-submit/mission-submit.module').then( m => m.MissionSubmitPageModule)
  },
  {
    path: 'mission-show',
    loadChildren: () => import('./mission-show/mission-show.module').then( m => m.MissionShowPageModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
