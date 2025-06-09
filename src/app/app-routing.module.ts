import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  //Route mặc định - chuyển hướng khi truy cập '/'
  { path: '', loadChildren: () => import('./modules/landing/landing.module').then(m => m.LandingModule) },
  //Route fallback - khi route không tồn tại
  { path: '**', redirectTo: '' },


  { path: 'about', loadChildren: () => import('./modules/about/about.module').then(m => m.AboutModule) }, 
  { path: 'user', loadChildren: () => import('./modules/user/user.module').then(m => m.UserModule) },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
