import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {path: '', loadChildren: () => import('./pages/login/login.module').then( m => m.LoginPageModule)},
  {path: 'register', loadChildren: () => import('./pages/register/register.module').then( m => m.RegisterPageModule)},
  {path: 'about', loadChildren: () => import('./pages/about/about.module').then( m => m.AboutPageModule)},
  {path: 'settings', loadChildren: () => import('./pages/settings/settings.module').then( m => m.SettingsPageModule)},
  {path: 'edit-profile', loadChildren: () => import('./pages/edit-profile/edit-profile.module').then( m => m.EditProfilePageModule)},
  {path: 'home-results', loadChildren: () => import('./pages/home-results/home-results.module').then( m => m.HomeResultsPageModule)},
  {path: 'home', loadChildren: () => import('./pages/home/home.module').then( m => m.HomePageModule)},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule {}
